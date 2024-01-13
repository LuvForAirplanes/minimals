import { useSnackbar } from 'notistack';
import { useParams } from 'react-router';
import { useQuery, useMutation } from '@apollo/client';
import { useState, useEffect, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { PRODUCT_PUBLISH_OPTIONS } from 'src/_mock';
import { getListingQuery } from 'src/graphql/queries/listing';
import { toggleListingPublicityMutation } from 'src/graphql/mutations/toggleListingPublicity';
import {
  ListingDetailsQuery,
  ListingReviewFragment,
  ListingRatingFragment,
  ListingDetailsFragment,
  ListingDetailsQueryVariables,
  ToggleListingPublicityMutation,
  ToggleListingPublicityMutationVariables,
} from 'src/graphql/types/graphql';

import Iconify from 'src/components/iconify';
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';

import { ProductDetailsSkeleton } from '../product-skeleton';
import ProductDetailsReview from '../product-details-review';
import ProductDetailsToolbar from '../product-details-toolbar';
import ProductDetailsSummary from '../product-details-summary';
import ProductDetailsCarousel from '../product-details-carousel';
import ProductDetailsDescription from '../product-details-description';

// ----------------------------------------------------------------------

// const SUMMARY = [
//   {
//     title: '100% Original',
//     description: 'Chocolate bar candy canes ice cream toffee cookie halvah.',
//     icon: 'solar:verified-check-bold',
//   },
//   {
//     title: '10 Day Replacement',
//     description: 'Marshmallow biscuit donut dragée fruitcake wafer.',
//     icon: 'solar:clock-circle-bold',
//   },
//   {
//     title: 'Year Warranty',
//     description: 'Cotton candy gingerbread cake I love sugar sweet.',
//     icon: 'solar:shield-check-bold',
//   },
// ];

export default function ProductDetailsView() {
  const settings = useSettingsContext();

  const { enqueueSnackbar } = useSnackbar();

  const params = useParams<{ id: string }>();

  const [currentTab, setCurrentTab] = useState('description');

  const [publish, setPublish] = useState('');

  const {
    data: productR,
    loading,
    error,
  } = useQuery<ListingDetailsQuery, ListingDetailsQueryVariables>(getListingQuery, {
    variables: {
      id: params.id,
    },
  });
  const product = productR?.listings
    ? (productR.listings.nodes![0] as ListingDetailsFragment)
    : null;

  useEffect(() => {
    if (product) {
      setPublish(product.isPublished ? 'published' : 'draft');
    }
  }, [product]);

  const [toggleStatus] = useMutation<
    ToggleListingPublicityMutation,
    ToggleListingPublicityMutationVariables
  >(toggleListingPublicityMutation, {
    variables: {
      id: product?.id,
    },
    onCompleted: (d) => {
      if (d.toggleListingPublicity) {
        enqueueSnackbar('Listing published.', { variant: 'success' });
      } else {
        enqueueSnackbar('Listing drafted.', { variant: 'info' });
      }
    },
  });
  const handleChangePublish = useCallback(
    (newValue: string) => {
      setPublish(newValue);
      toggleStatus();
    },
    [toggleStatus]
  );

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const renderSkeleton = <ProductDetailsSkeleton />;

  const renderError = (
    <EmptyContent
      filled
      title={`${error?.message}`}
      action={
        <Button
          component={RouterLink}
          href={paths.dashboard.product.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
          sx={{ mt: 3 }}
        >
          Back to List
        </Button>
      }
      sx={{ py: 10 }}
    />
  );

  const renderProduct = product && (
    <>
      <ProductDetailsToolbar
        backLink={paths.dashboard.product.root}
        editLink={paths.dashboard.product.edit(`${product?.id}`)}
        liveLink={paths.product.details(`${product?.id}`)}
        publish={publish || ''}
        onChangePublish={handleChangePublish}
        publishOptions={PRODUCT_PUBLISH_OPTIONS}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          <ProductDetailsCarousel product={product} />
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <ProductDetailsSummary disabledActions product={product} />
        </Grid>
      </Grid>

      {/* <Box
        gap={5}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        sx={{ my: 10 }}
      >
        {SUMMARY.map((item) => (
          <Box key={item.title} sx={{ textAlign: 'center', px: 5 }}>
            <Iconify icon={item.icon} width={32} sx={{ color: 'primary.main' }} />

            <Typography variant="subtitle1" sx={{ mb: 1, mt: 2 }}>
              {item.title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box> */}

      <Card style={{ marginTop: 50 }}>
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            px: 3,
            boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {[
            {
              value: 'description',
              label: 'Description',
            },
            {
              value: 'reviews',
              label: `Reviews (${product.reviews.length})`,
            },
          ].map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {currentTab === 'description' && (
          <ProductDetailsDescription description={product?.content} />
        )}

        {currentTab === 'reviews' && (
          <ProductDetailsReview
            listingId={product.id}
            ratings={product!.ratings! as ListingRatingFragment[]}
            reviews={product!.reviews! as ListingReviewFragment[]}
          />
        )}
      </Card>
    </>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      {loading && renderSkeleton}

      {error && renderError}

      {product && renderProduct}
    </Container>
  );
}
