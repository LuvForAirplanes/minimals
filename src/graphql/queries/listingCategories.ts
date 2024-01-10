import { gql } from '@apollo/client';

export const listingCategoriesQuery = gql`
  query listingCategories(
    $first: Int = 50
    $after: String
    $order: [ListingCategorySortInput!]
    $where: ListingCategoryFilterInput
  ) {
    data: listingCategories(first: $first, after: $after, order: $order, where: $where) {
      count: totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        name
        parentId
        listable
      }
    }
  }
`;
