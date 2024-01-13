import { Helmet } from 'react-helmet-async';

import { ListingCreateView } from 'src/sections/listing/view';

// ----------------------------------------------------------------------

export default function ListingCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new listing</title>
      </Helmet>

      <ListingCreateView />
    </>
  );
}
