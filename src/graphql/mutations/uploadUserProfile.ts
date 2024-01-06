import { gql } from '@apollo/client';

export const uploadProfileMutation = gql`
  mutation uploadUserProfileImage($id: String!, $file: Upload!) {
    uploadUserProfileImage(id: $id, file: $file)
  }
`;
