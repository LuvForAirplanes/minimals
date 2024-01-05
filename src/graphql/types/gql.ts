/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment AccountNotificationEditor on AccountNotificationsEdit {\n    id\n    notifyOnMessage\n  }\n": types.AccountNotificationEditorFragmentDoc,
    "\n  fragment AccountProfileEditor on AccountProfileEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n  }\n": types.AccountProfileEditorFragmentDoc,
    "\n  mutation changeAccountPassword($existingPassword: String!, $newPassword: String!) {\n    changeAccountPassword(existingPassword: $existingPassword, newPassword: $newPassword)\n  }\n": types.ChangeAccountPasswordDocument,
    "\n  mutation updateCurrentAccountNotifications($notificationsEdit: AccountNotificationsEditInput!) {\n    currentAccountNotifications(notificationsEdit: $notificationsEdit) {\n      ...AccountNotificationEditor\n    }\n  }\n  \n": types.UpdateCurrentAccountNotificationsDocument,
    "\n  mutation updateCurrentAccountProfile($profileEdit: AccountProfileEditInput!) {\n    currentAccountProfile(profileEdit: $profileEdit) {\n      ...AccountProfileEditor\n    }\n  }\n  \n": types.UpdateCurrentAccountProfileDocument,
    "\n  mutation deleteUser($id: String!) {\n    deleteUser(id: $id)\n  }\n": types.DeleteUserDocument,
    "\n  mutation uploadCurrentProfileImage($file: Upload!) {\n    uploadCurrentProfileImage(file: $file)\n  }\n": types.UploadCurrentProfileImageDocument,
    "\n  query currentAccountNotifications {\n    currentAccountNotifications {\n      ...AccountNotificationEditor\n    }\n  }\n  \n": types.CurrentAccountNotificationsDocument,
    "\n  query currentAccountProfile {\n    currentAccountProfile {\n      ...AccountProfileEditor\n    }\n    currentAccountProfileImage\n  }\n  \n": types.CurrentAccountProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccountNotificationEditor on AccountNotificationsEdit {\n    id\n    notifyOnMessage\n  }\n"): (typeof documents)["\n  fragment AccountNotificationEditor on AccountNotificationsEdit {\n    id\n    notifyOnMessage\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccountProfileEditor on AccountProfileEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n  }\n"): (typeof documents)["\n  fragment AccountProfileEditor on AccountProfileEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation changeAccountPassword($existingPassword: String!, $newPassword: String!) {\n    changeAccountPassword(existingPassword: $existingPassword, newPassword: $newPassword)\n  }\n"): (typeof documents)["\n  mutation changeAccountPassword($existingPassword: String!, $newPassword: String!) {\n    changeAccountPassword(existingPassword: $existingPassword, newPassword: $newPassword)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCurrentAccountNotifications($notificationsEdit: AccountNotificationsEditInput!) {\n    currentAccountNotifications(notificationsEdit: $notificationsEdit) {\n      ...AccountNotificationEditor\n    }\n  }\n  \n"): (typeof documents)["\n  mutation updateCurrentAccountNotifications($notificationsEdit: AccountNotificationsEditInput!) {\n    currentAccountNotifications(notificationsEdit: $notificationsEdit) {\n      ...AccountNotificationEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCurrentAccountProfile($profileEdit: AccountProfileEditInput!) {\n    currentAccountProfile(profileEdit: $profileEdit) {\n      ...AccountProfileEditor\n    }\n  }\n  \n"): (typeof documents)["\n  mutation updateCurrentAccountProfile($profileEdit: AccountProfileEditInput!) {\n    currentAccountProfile(profileEdit: $profileEdit) {\n      ...AccountProfileEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteUser($id: String!) {\n    deleteUser(id: $id)\n  }\n"): (typeof documents)["\n  mutation deleteUser($id: String!) {\n    deleteUser(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uploadCurrentProfileImage($file: Upload!) {\n    uploadCurrentProfileImage(file: $file)\n  }\n"): (typeof documents)["\n  mutation uploadCurrentProfileImage($file: Upload!) {\n    uploadCurrentProfileImage(file: $file)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query currentAccountNotifications {\n    currentAccountNotifications {\n      ...AccountNotificationEditor\n    }\n  }\n  \n"): (typeof documents)["\n  query currentAccountNotifications {\n    currentAccountNotifications {\n      ...AccountNotificationEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query currentAccountProfile {\n    currentAccountProfile {\n      ...AccountProfileEditor\n    }\n    currentAccountProfileImage\n  }\n  \n"): (typeof documents)["\n  query currentAccountProfile {\n    currentAccountProfile {\n      ...AccountProfileEditor\n    }\n    currentAccountProfileImage\n  }\n  \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;