import { Helmet } from 'react-helmet-async';

import { ListingShopDetailsView } from 'src/sections/listing/view';

// ----------------------------------------------------------------------

export default function ListingShopDetailsPage() {
  return (
    <>
      <Helmet>
        <title> Listing: Details</title>
      </Helmet>

      <ListingShopDetailsView />
    </>
  );
}
