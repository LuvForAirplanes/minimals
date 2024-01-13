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

import { LISTING_PUBLISH_OPTIONS } from 'src/_mock';
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

import { ListingDetailsSkeleton } from '../listing-skeleton';
import ListingDetailsReview from '../listing-details-review';
import ListingDetailsToolbar from '../listing-details-toolbar';
import ListingDetailsSummary from '../listing-details-summary';
import ListingDetailsCarousel from '../listing-details-carousel';
import ListingDetailsDescription from '../listing-details-description';

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

export default function ListingDetailsView() {
  const settings = useSettingsContext();

  const { enqueueSnackbar } = useSnackbar();

  const params = useParams<{ id: string }>();

  const [currentTab, setCurrentTab] = useState('description');

  const [publish, setPublish] = useState('');

  const {
    data: listingR,
    loading,
    error,
  } = useQuery<ListingDetailsQuery, ListingDetailsQueryVariables>(getListingQuery, {
    variables: {
      id: params.id,
    },
  });
  const listing = listingR?.listings
    ? (listingR.listings.nodes![0] as ListingDetailsFragment)
    : null;

  useEffect(() => {
    if (listing) {
      setPublish(listing.isPublished ? 'published' : 'draft');
    }
  }, [listing]);

  const [toggleStatus] = useMutation<
    ToggleListingPublicityMutation,
    ToggleListingPublicityMutationVariables
  >(toggleListingPublicityMutation, {
    variables: {
      id: listing?.id,
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

  const renderSkeleton = <ListingDetailsSkeleton />;

  const renderError = (
    <EmptyContent
      filled
      title={`${error?.message}`}
      action={
        <Button
          component={RouterLink}
          href={paths.dashboard.listing.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
          sx={{ mt: 3 }}
        >
          Back to List
        </Button>
      }
      sx={{ py: 10 }}
    />
  );

  const renderListing = listing && (
    <>
      <ListingDetailsToolbar
        backLink={paths.dashboard.listing.root}
        editLink={paths.dashboard.listing.edit(`${listing?.id}`)}
        liveLink={paths.listing.details(`${listing?.id}`)}
        publish={publish || ''}
        onChangePublish={handleChangePublish}
        publishOptions={LISTING_PUBLISH_OPTIONS}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          <ListingDetailsCarousel listing={listing} />
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <ListingDetailsSummary disabledActions listing={listing} />
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
              label: `Reviews (${listing.reviews.length})`,
            },
          ].map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {currentTab === 'description' && (
          <ListingDetailsDescription description={listing?.content} />
        )}

        {currentTab === 'reviews' && (
          <ListingDetailsReview
            listingId={listing.id}
            ratings={listing!.ratings! as ListingRatingFragment[]}
            reviews={listing!.reviews! as ListingReviewFragment[]}
          />
        )}
      </Card>
    </>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      {loading && renderSkeleton}

      {error && renderError}

      {listing && renderListing}
    </Container>
  );
}
