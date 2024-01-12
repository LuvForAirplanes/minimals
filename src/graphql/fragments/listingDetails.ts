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
    watched
    images {
      id
    }
    usersWatching {
      userId
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
