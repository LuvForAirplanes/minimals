import { gql } from '@apollo/client';

import { listingEditFragment } from '../fragments/listingEdit';

export const getListingEditQuery = gql`
  query listingEdit($id: UUID!) {
    listingEdit(id: $id) {
      ...ListingEdit
    }
  }
  ${listingEditFragment}
`;
