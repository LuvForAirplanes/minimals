import orderBy from 'lodash/orderBy';
import isEqual from 'lodash/isEqual';
import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';
import { useDebounce } from 'src/hooks/use-debounce';

import { useGetListings, useSearchListings } from 'src/api/listing';
import {
  LISTING_SORT_OPTIONS,
  LISTING_COLOR_OPTIONS,
  LISTING_GENDER_OPTIONS,
  LISTING_RATING_OPTIONS,
  LISTING_CATEGORY_OPTIONS,
} from 'src/_mock';

import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';

import { IListingItem, IListingFilters, IListingFilterValue } from 'src/types/listing';

import ListingList from '../listing-list';
import ListingSort from '../listing-sort';
import ListingSearch from '../listing-search';
import ListingFilters from '../listing-filters';
import ListingFiltersResult from '../listing-filters-result';

// ----------------------------------------------------------------------

const defaultFilters: IListingFilters = {
  gender: [],
  colors: [],
  rating: '',
  category: 'all',
  priceRange: [0, 200],
};

// ----------------------------------------------------------------------

export default function ListingShopView() {
  const settings = useSettingsContext();

  // const checkout = useCheckoutContext();

  const openFilters = useBoolean();

  const [sortBy, setSortBy] = useState('featured');

  const [searchQuery, setSearchQuery] = useState('');

  const debouncedQuery = useDebounce(searchQuery);

  const [filters, setFilters] = useState(defaultFilters);

  const { listings, listingsLoading, listingsEmpty } = useGetListings();

  const { searchResults, searchLoading } = useSearchListings(debouncedQuery);

  const handleFilters = useCallback((name: string, value: IListingFilterValue) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const dataFiltered = applyFilter({
    inputData: listings,
    filters,
    sortBy,
  });

  const canReset = !isEqual(defaultFilters, filters);

  const notFound = !dataFiltered.length && canReset;

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback((inputValue: string) => {
    setSearchQuery(inputValue);
  }, []);

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <ListingSearch
        query={debouncedQuery}
        results={searchResults}
        onSearch={handleSearch}
        loading={searchLoading}
        hrefItem={(id: string) => paths.listing.details(id)}
      />

      <Stack direction="row" spacing={1} flexShrink={0}>
        <ListingFilters
          open={openFilters.value}
          onOpen={openFilters.onTrue}
          onClose={openFilters.onFalse}
          //
          filters={filters}
          onFilters={handleFilters}
          //
          canReset={canReset}
          onResetFilters={handleResetFilters}
          //
          colorOptions={LISTING_COLOR_OPTIONS}
          ratingOptions={LISTING_RATING_OPTIONS}
          genderOptions={LISTING_GENDER_OPTIONS}
          categoryOptions={['all', ...LISTING_CATEGORY_OPTIONS]}
        />

        <ListingSort sort={sortBy} onSort={handleSortBy} sortOptions={LISTING_SORT_OPTIONS} />
      </Stack>
    </Stack>
  );

  const renderResults = (
    <ListingFiltersResult
      filters={filters}
      onFilters={handleFilters}
      //
      canReset={canReset}
      onResetFilters={handleResetFilters}
      //
      results={dataFiltered.length}
    />
  );

  const renderNotFound = <EmptyContent filled title="No Data" sx={{ py: 10 }} />;

  return (
    <Container
      maxWidth={settings.themeStretch ? false : 'lg'}
      sx={{
        mb: 15,
      }}
    >
      {/* <CartIcon totalItems={checkout.totalItems} /> */}

      <Typography
        variant="h4"
        sx={{
          my: { xs: 3, md: 5 },
        }}
      >
        Shop
      </Typography>

      <Stack
        spacing={2.5}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        {renderFilters}

        {canReset && renderResults}
      </Stack>

      {(notFound || listingsEmpty) && renderNotFound}

      <ListingList listings={dataFiltered} loading={listingsLoading} />
    </Container>
  );
}

// ----------------------------------------------------------------------

function applyFilter({
  inputData,
  filters,
  sortBy,
}: {
  inputData: IListingItem[];
  filters: IListingFilters;
  sortBy: string;
}) {
  const { gender, category, colors, priceRange, rating } = filters;

  const min = priceRange[0];

  const max = priceRange[1];

  // SORT BY
  if (sortBy === 'featured') {
    inputData = orderBy(inputData, ['totalSold'], ['desc']);
  }

  if (sortBy === 'newest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'priceDesc') {
    inputData = orderBy(inputData, ['price'], ['desc']);
  }

  if (sortBy === 'priceAsc') {
    inputData = orderBy(inputData, ['price'], ['asc']);
  }

  // FILTERS
  if (gender.length) {
    inputData = inputData.filter((listing) => gender.includes(listing.gender));
  }

  if (category !== 'all') {
    inputData = inputData.filter((listing) => listing.category === category);
  }

  if (colors.length) {
    inputData = inputData.filter((listing) =>
      listing.colors.some((color) => colors.includes(color))
    );
  }

  if (min !== 0 || max !== 200) {
    inputData = inputData.filter((listing) => listing.price >= min && listing.price <= max);
  }

  if (rating) {
    inputData = inputData.filter((listing) => {
      const convertRating = (value: string) => {
        if (value === 'up4Star') return 4;
        if (value === 'up3Star') return 3;
        if (value === 'up2Star') return 2;
        return 1;
      };
      return listing.totalRatings > convertRating(rating);
    });
  }

  return inputData;
}
