import { gql } from '@apollo/client';

import { quickListingEditFragment } from '../fragments/quickListingEdit';

export const updateQuickListingMutation = gql`
  mutation updateQuickListing($listing: QuickListingEditInput!) {
    quickListing(listing: $listing) {
      ...QuickListingEdit
    }
  }
  ${quickListingEditFragment}
`;
