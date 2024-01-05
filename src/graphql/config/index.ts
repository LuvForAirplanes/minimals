import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import {
  from,
  split,
  ApolloLink,
  ServerError,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import PossibleTypes from './possibleTypes.json';

export interface QueryContext {
  hideErrors?: boolean;
}

const httpLink = createHttpLink({
  uri: '/graphql/',
});

const wsLink = new WebSocketLink({
  uri: `${
    (window.location.protocol === 'https:' ? 'wss://' : 'ws://') +
    window.location.hostname +
    (window.location.port ? `:${window.location.port}` : '')
  }/graphql/`,
  options: {
    reconnect: true,
  },
});

const uploadLink = createUploadLink({
  uri: '/graphql/',
  headers: {
    'GraphQL-Preflight': '1',
  },
});

const cleanTypeName = new ApolloLink((operation, forward) => {
  if (operation.variables && operation.variables.file === undefined) {
    const omitTypename = (key: string, value: any) => (key === '__typename' ? undefined : value);
    operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
  }
  return forward(operation).map((data) => data);
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      console.log(`[Query Error]: ${message}`);
    });
  }

  if (networkError) {
    const sError = networkError as ServerError;
    console.log(sError.statusCode);
    switch (sError.statusCode) {
      case 401:
        if (!window.location.href.includes('login')) {
          if (window.location.href.includes('3000')) {
            window.location.href = `http://localhost/identity/account/login?returnUrl=${window.location}`;
          } else {
            window.location.href = `/identity/account/login?returnUrl=${window.location
              .toString()
              .replace(window.location.origin, '')}`;
          }
        }
        break;
      default:
        break;
    }

    console.log(`[Network error]: ${networkError}`);
  }
});

const uploadVsNonUploadLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition!.variableDefinitions!.filter(
        (v) => (v.type as any)?.type?.name?.value === 'Upload'
      ).length > 0
    );
  },
  uploadLink,
  httpLink
);

export const cache = new InMemoryCache({
  possibleTypes: PossibleTypes,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  uploadVsNonUploadLink
);

export const client = new ApolloClient({
  link: from([cleanTypeName, errorLink, splitLink]),
  connectToDevTools: true,
  cache,
  credentials: 'include',
});
