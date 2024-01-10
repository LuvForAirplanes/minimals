import { gql } from '@apollo/client';

export const deleteListingTypeMutation = gql`
  mutation deleteListingType($id: String!) {
    deleteListingType(id: $id)
  }
`;
