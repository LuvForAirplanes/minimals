import { gql } from '@apollo/client';

export const uploadProfileMutation = gql`
  mutation uploadCurrentProfileImage($file: Upload!) {
    uploadCurrentProfileImage(file: $file)
  }
`;
