import { gql } from '@apollo/client';

import { ListingFragment } from '../fragments/listing';

export const getListingsQuery = gql`
  query listings(
    $first: Int = 10
    $after: String
    $order: [ListingSortInput!]
    $where: ListingFilterInput
  ) {
    data: listings(first: $first, after: $after, order: $order, where: $where) {
      count: totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...Listing
      }
    }
  }
  ${ListingFragment}
`;
