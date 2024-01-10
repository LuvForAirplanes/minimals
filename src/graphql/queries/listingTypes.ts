import { gql } from '@apollo/client';

import { listingTypeFragment } from '../fragments/listingType';

export const listingTypesQuery = gql`
  query listingTypes(
    $first: Int = 50
    $after: String
    $order: [ListingTypeSortInput!]
    $where: ListingTypeFilterInput
  ) {
    data: listingTypes(first: $first, after: $after, order: $order, where: $where) {
      count: totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...ListingType
      }
    }
  }
  ${listingTypeFragment}
`;
