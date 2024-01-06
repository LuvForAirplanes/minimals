import { gql } from '@apollo/client';

export const registerUserMutation = gql`
  mutation registerUser($user: RegisterUserEditInput!) {
    registerUser(user: $user)
  }
`;
