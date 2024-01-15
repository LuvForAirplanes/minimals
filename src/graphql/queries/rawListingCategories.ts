import { gql } from '@apollo/client';

export const rawListingCategoriesQuery = gql`
  query rawListingCategories {
    rawListingCategories {
      id
      name
    }
  }
`;
