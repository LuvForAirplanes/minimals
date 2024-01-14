import { useQuery } from '@apollo/client';

import { currentUserQuery } from 'src/graphql/queries/currentUser';
import {
  ApplicationUser,
  CurrentUserQuery,
  CurrentUserQueryVariables,
} from 'src/graphql/types/graphql';

export function useUser() {
  // const { user } = useAuthContext();
  const { data } = useQuery<CurrentUserQuery, CurrentUserQueryVariables>(currentUserQuery);
  return data?.currentUser as ApplicationUser | null;
}
