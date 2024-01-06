import { gql } from '@apollo/client';

const UserFragment = gql`
  fragment User on ApplicationUser {
    __typename
    id
    firstName
    lastName
    email
    userName
    businessName
    approved
    sellerApproved
    phoneNumber
    location
    approved
    sellerApproved
  }
`;

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
