import { gql } from '@apollo/client';

export const listingCategoryEditFragment = gql`
  fragment ListingCategoryEdit on ListingCategoryEdit {
    id
    name
    parentId
    listable
  }
`;
