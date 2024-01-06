import { gql } from '@apollo/client';

export const changeUserPasswordMutation = gql`
  mutation changeUserPassword($id: String!, $existingPassword: String!, $newPassword: String!) {
    changeUserPassword(id: $id, existingPassword: $existingPassword, newPassword: $newPassword)
  }
`;
