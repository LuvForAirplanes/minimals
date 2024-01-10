import { gql } from '@apollo/client';

import { listingCategoryEditFragment } from '../fragments/listingCategoryEdit';

export const updateListingCategoryMutation = gql`
  mutation updateListingCategory($category: ListingCategoryEditInput!) {
    updateListingCategory(category: $category) {
      ...ListingCategoryEdit
    }
  }
  ${listingCategoryEditFragment}
`;
