import { gql } from '@apollo/client';

export const getCurrentUserQuery = gql`
  query currentUser {
    currentUser {
      userName
      fullName
      about
    }
  }
`;
