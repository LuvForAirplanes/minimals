import { gql } from '@apollo/client';

import { listingEditFragment } from '../fragments/listingEdit';

export const updateListingMutation = gql`
  mutation updateListing($listing: ListingEditInput!) {
    listing(listing: $listing) {
      ...ListingEdit
    }
  }
  ${listingEditFragment}
`;
