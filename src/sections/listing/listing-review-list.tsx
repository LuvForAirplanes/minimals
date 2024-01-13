import { Box } from '@mui/material';

import { ListingReviewFragment } from 'src/graphql/types/graphql';

import ListingReviewItem from './listing-review-item';

type Props = {
  reviews: ListingReviewFragment[];
};

export default function ListingReviewList({ reviews }: Props) {
  return (
    <Box mb={5}>
      {reviews.map((review) => (
        <ListingReviewItem key={review.id} review={review} />
      ))}
    </Box>
  );
}
