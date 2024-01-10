import { gql } from '@apollo/client';

import { listingTypeFragment } from '../fragments/listingType';

export const addListingTypeMutation = gql`
  mutation addListingType($type: ListingTypeInput!) {
    addListingType(type: $type) {
      ...ListingType
    }
  }
  ${listingTypeFragment}
`;
