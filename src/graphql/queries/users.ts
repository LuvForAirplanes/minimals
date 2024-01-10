import { gql } from '@apollo/client';

import { UserFragment } from '../fragments/user';

export const getUsersQuery = gql`
  query users(
    $first: Int = 50
    $after: String
    $order: [ApplicationUserSortInput!]
    $where: ApplicationUserFilterInput
  ) {
    data: users(first: $first, after: $after, order: $order, where: $where) {
      count: totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...User
      }
    }
  }
  ${UserFragment}
`;
