import { gql } from '@apollo/client';

import { quickListingEditFragment } from '../fragments/quickListingEdit';

export const getQuickListingQuery = gql`
  query quickListing($id: UUID!) {
    quickListing(id: $id) {
      ...QuickListingEdit
    }
  }
  ${quickListingEditFragment}
`;
