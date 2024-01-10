import { gql } from '@apollo/client';

import { listingListEditFragment } from '../fragments/listingListEdit';

export const updateListingListMutation = gql`
  mutation listingList($listing: ListingListEditInput!) {
    listingList(listing: $listing) {
      ...ListingListEdit
    }
  }
  ${listingListEditFragment}
`;
