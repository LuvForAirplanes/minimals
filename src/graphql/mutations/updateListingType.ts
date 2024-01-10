import { gql } from '@apollo/client';

import { listingTypeFragment } from '../fragments/listingType';

export const updateListingTypeMutation = gql`
  mutation updateListingType($type: ListingTypeInput!) {
    updateListingType(type: $type) {
      ...ListingType
    }
  }
  ${listingTypeFragment}
`;
