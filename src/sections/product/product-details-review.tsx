import sumBy from 'lodash/sumBy';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { useBoolean } from 'src/hooks/use-boolean';

import { fShortenNumber } from 'src/utils/format-number';

import { ListingRatingFragment, ListingReviewFragment } from 'src/graphql/types/graphql';

import Iconify from 'src/components/iconify';

import ProductReviewList from './product-review-list';
import ProductReviewNewForm from './product-review-new-form';

// ----------------------------------------------------------------------

type Props = {
  ratings: ListingRatingFragment[];
  reviews: ListingReviewFragment[];
  listingId: string;
};

export default function ProductDetailsReview({ ratings, reviews, listingId }: Props) {
  const review = useBoolean();
  const rr = ratings.map((r) => r.value);
  const totalRatings = rr.length === 0 ? 0 : rr.reduce((a, b) => a + b) / rr.length;
  const total = sumBy(ratings, (star) => star.count);

  const renderSummary = (
    <Stack spacing={1} alignItems="center" justifyContent="center" sx={{ mt: 3, mb: 3 }}>
      <Typography variant="subtitle2">Average rating</Typography>

      <Typography variant="h2">{totalRatings}/5</Typography>

      <Rating readOnly value={totalRatings} precision={0.1} />

      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        ({reviews.length === 0 ? '0' : fShortenNumber(reviews.length)} review
        {reviews.length === 1 ? '' : 's'})
      </Typography>
    </Stack>
  );

  const renderProgress = (
    <Stack
      spacing={1.5}
      sx={{
        py: 5,
        px: { xs: 3, md: 5 },
        borderLeft: (theme) => ({
          md: `dashed 1px ${theme.palette.divider}`,
        }),
        borderRight: (theme) => ({
          md: `dashed 1px ${theme.palette.divider}`,
        }),
      }}
    >
      {ratings
        .slice(0)
        .reverse()
        .map((rating) => (
          <Stack key={rating.star} direction="row" alignItems="center">
            <Typography variant="subtitle2" component="span" sx={{ width: 42 }}>
              {rating.star} Star
            </Typography>

            <LinearProgress
              color="inherit"
              variant="determinate"
              value={(rating.count / total) * 100}
              sx={{
                mx: 2,
                flexGrow: 1,
              }}
            />

            <Typography
              variant="body2"
              component="span"
              sx={{
                minWidth: 48,
                color: 'text.secondary',
              }}
            >
              {fShortenNumber(rating.value)}
            </Typography>
          </Stack>
        ))}
    </Stack>
  );

  const renderReviewButton = (
    <Stack alignItems="center" justifyContent="center">
      <Button
        size="large"
        variant="soft"
        color="inherit"
        onClick={review.onTrue}
        startIcon={<Iconify icon="solar:pen-bold" />}
      >
        Write your review
      </Button>
    </Stack>
  );

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        sx={{
          py: { xs: 5, md: 0 },
        }}
      >
        {renderSummary}

        {renderProgress}

        {renderReviewButton}
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <ProductReviewList reviews={reviews} />

      <ProductReviewNewForm open={review.value} listingId={listingId} onClose={review.onFalse} />
    </>
  );
}
