import Box, { BoxProps } from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { IListingItem } from 'src/types/listing';

import ListingItem from './listing-item';
import { ListingItemSkeleton } from './listing-skeleton';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  listings: IListingItem[];
  loading?: boolean;
};

export default function ListingList({ listings, loading, ...other }: Props) {
  const renderSkeleton = (
    <>
      {[...Array(16)].map((_, index) => (
        <ListingItemSkeleton key={index} />
      ))}
    </>
  );

  const renderList = (
    <>
      {listings.map((listing) => (
        <ListingItem key={listing.id} listing={listing} />
      ))}
    </>
  );

  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        {...other}
      >
        {loading ? renderSkeleton : renderList}
      </Box>

      {listings.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: 8,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )}
    </>
  );
}
