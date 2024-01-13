import { Helmet } from 'react-helmet-async';

import { ListingEditView } from 'src/sections/listing/view';

// ----------------------------------------------------------------------

export default function ListingEditPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Listing Edit</title>
      </Helmet>

      <ListingEditView />
    </>
  );
}
