import { Helmet } from 'react-helmet-async';

import ShopAllView from 'src/sections/shop-all/view';

// ----------------------------------------------------------------------

export default function ShopAllPage() {
  return (
    <>
      <Helmet>
        <title>Shop All</title>
      </Helmet>

      <ShopAllView />
    </>
  );
}
