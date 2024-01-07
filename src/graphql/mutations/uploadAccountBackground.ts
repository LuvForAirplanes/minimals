import { gql } from '@apollo/client';

export const uploadBackgroundMutation = gql`
  mutation uploadCurrentBackgroundImage($file: Upload!) {
    uploadCurrentBackgroundImage(file: $file)
  }
`;
