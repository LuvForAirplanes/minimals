import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { getListingQuery } from 'src/graphql/queries/listing';
import {
  ListingDetailsQuery,
  ListingReviewFragment,
  ListingRatingFragment,
  ListingDetailsFragment,
  ListingDetailsQueryVariables,
} from 'src/graphql/types/graphql';

import Iconify from 'src/components/iconify';
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { ListingDetailsSkeleton } from '../listing-skeleton';
import ListingDetailsReview from '../listing-details-review';
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

export default function ListingShopDetailsView() {
  const settings = useSettingsContext();

  const params = useParams<{ id: string }>();

  const [currentTab, setCurrentTab] = useState('description');

  const { data: listingR, loading } = useQuery<ListingDetailsQuery, ListingDetailsQueryVariables>(
    getListingQuery,
    {
      variables: {
        id: params.id,
      },
    }
  );

  const listing = listingR?.listings
    ? (listingR.listings.nodes![0] as ListingDetailsFragment)
    : null;

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const renderSkeleton = <ListingDetailsSkeleton />;

  const error = (listing === null || listing === undefined) && !loading;

  const renderError = (
    <EmptyContent
      filled
      title="Couldn't find that... sorry!"
      description={
        "We looked everywhere, but couldn't figure out what you were looking for. Sorry about that!"
      }
      action={
        <Button
          component={RouterLink}
          href={paths.listing.root}
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
      <CustomBreadcrumbs
        links={[
          { name: 'Home', href: '/' },
          {
            name: 'Listings',
            href: paths.listing.root,
          },
          { name: listing.title },
        ]}
        sx={{ mb: 5 }}
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
