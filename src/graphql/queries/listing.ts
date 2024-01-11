import { gql } from '@apollo/client';

import { ListingDetailsFragment } from '../fragments/listingDetails';

export const getListingQuery = gql`
  query listingDetails($id: UUID!) {
    listings(first: 1, where: { id: { eq: $id } }) {
      nodes {
        ...ListingDetails
      }
    }
  }
  ${ListingDetailsFragment}
`;
