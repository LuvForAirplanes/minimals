import { gql } from '@apollo/client';

export const currentUserQuery = gql`
  query currentUser {
    currentUser {
      id
      firstName
      fullName
      middleName
      lastName
      businessName
      telegramUsername
      location
      phoneNumber
      userName
      following
      followers
    }
  }
`;
