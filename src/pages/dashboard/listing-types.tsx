import { Helmet } from 'react-helmet-async';

import ListingTypesView from 'src/sections/listing-types/view';

// ----------------------------------------------------------------------

export default function ListingTypesPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard: Listing Types</title>
      </Helmet>

      <ListingTypesView />
    </>
  );
}
