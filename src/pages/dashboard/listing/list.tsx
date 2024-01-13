import { Helmet } from 'react-helmet-async';

import { ListingListView } from 'src/sections/listing/view';

// ----------------------------------------------------------------------

export default function ListingListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Listing List</title>
      </Helmet>

      <ListingListView />
    </>
  );
}
