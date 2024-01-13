import { Helmet } from 'react-helmet-async';

import { ListingShopView } from 'src/sections/listing/view';

// ----------------------------------------------------------------------

export default function ShopPage() {
  return (
    <>
      <Helmet>
        <title> Listing: Shop</title>
      </Helmet>

      <ListingShopView />
    </>
  );
}
