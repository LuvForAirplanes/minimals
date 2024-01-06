import { gql } from '@apollo/client';

const UserFragment = gql`
  fragment SocialUser on ApplicationUser {
    __typename
    id
    fullName
    location
    telegramUsername
    email
    phoneNumber
    following
    followers
    listings
    userName
  }
`;

export const getSocialUsersQuery = gql`
  query socialUsers($skip: Int = 0, $take: Int = 21) {
    totalUsers
    offsetUsers(skip: $skip, take: $take) {
      items {
        ...SocialUser
      }
    }
  }
  ${UserFragment}
`;
