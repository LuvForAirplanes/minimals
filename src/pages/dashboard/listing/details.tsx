import { Helmet } from 'react-helmet-async';

import { ListingDetailsView } from 'src/sections/listing/view';

export default function ListingDetailsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Listing Details</title>
      </Helmet>

      <ListingDetailsView />
    </>
  );
}
