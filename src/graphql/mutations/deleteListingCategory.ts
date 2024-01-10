import { gql } from '@apollo/client';

export const deleteListingCategoryMutation = gql`
  mutation deleteListingCategory($id: String!) {
    deleteListingCategory(id: $id)
  }
`;
