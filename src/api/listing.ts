import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios';

import { IListingItem } from 'src/types/listing';

// ----------------------------------------------------------------------

export function useGetListings() {
  const URL = endpoints.listing.list;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      listings: (data?.products as IListingItem[]) || [],
      listingsLoading: isLoading,
      listingsError: error,
      listingsValidating: isValidating,
      listingsEmpty: !isLoading && !data?.products.length,
    }),
    [data?.products, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetListing(listingId: string) {
  const URL = listingId ? [endpoints.listing.details, { params: { listingId } }] : '';

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      listing: data?.listing as IListingItem,
      listingLoading: isLoading,
      listingError: error,
      listingValidating: isValidating,
    }),
    [data?.listing, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useSearchListings(query: string) {
  const URL = query ? [endpoints.listing.search, { params: { query } }] : '';

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher, {
    keepPreviousData: true,
  });

  const memoizedValue = useMemo(
    () => ({
      searchResults: (data?.results as IListingItem[]) || [],
      searchLoading: isLoading,
      searchError: error,
      searchValidating: isValidating,
      searchEmpty: !isLoading && !data?.results.length,
    }),
    [data?.results, error, isLoading, isValidating]
  );

  return memoizedValue;
}
