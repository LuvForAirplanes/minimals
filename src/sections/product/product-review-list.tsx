import { Box } from '@mui/material';

import { ListingReviewFragment } from 'src/graphql/types/graphql';

import ProductReviewItem from './product-review-item';

type Props = {
  reviews: ListingReviewFragment[];
};

export default function ProductReviewList({ reviews }: Props) {
  return (
    <Box mb={5}>
      {reviews.map((review) => (
        <ProductReviewItem key={review.id} review={review} />
      ))}
    </Box>
  );
}
