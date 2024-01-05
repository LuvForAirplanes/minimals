import { gql } from '@apollo/client';

export const changeAccountPasswordMutation = gql`
  mutation changeAccountPassword($existingPassword: String!, $newPassword: String!) {
    changeAccountPassword(existingPassword: $existingPassword, newPassword: $newPassword)
  }
`;
