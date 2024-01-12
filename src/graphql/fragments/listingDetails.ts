import { gql } from '@apollo/client';

import { ListingReviewFragment } from './listingReview';
import { listingRatingFragment } from './listingRating';

export const ListingDetailsFragment = gql`
  fragment ListingDetails on Listing {
    __typename
    id
    title
    price
    mainImageId
    acceptsOffers
    quantity
    msrp
    partNumber
    isPublished
    added
    updated
    content
    images {
      id
    }
    category {
      id
      name
    }
    reviews {
      ...ListingReview
    }
    ratings {
      ...ListingRating
    }
  }
  ${ListingReviewFragment}
  ${listingRatingFragment}
`;
