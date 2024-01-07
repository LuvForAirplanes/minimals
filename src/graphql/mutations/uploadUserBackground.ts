import { gql } from '@apollo/client';

export const uploadUserBackgroundMutation = gql`
  mutation uploadUserBackgroundImage($id: String!, $file: Upload!) {
    uploadUserBackgroundImage(id: $id, file: $file)
  }
`;
