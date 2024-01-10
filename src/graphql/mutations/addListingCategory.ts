import { gql } from '@apollo/client';

import { listingCategoryEditFragment } from '../fragments/listingCategoryEdit';

export const addListingCategoryMutation = gql`
  mutation addListingCategory($category: ListingCategoryEditInput!) {
    addListingCategory(category: $category) {
      ...ListingCategoryEdit
    }
  }
  ${listingCategoryEditFragment}
`;
