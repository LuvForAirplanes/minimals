import { Helmet } from 'react-helmet-async';

import { ProductDetailsView } from 'src/sections/product/view';

export default function ProductDetailsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Product Details</title>
      </Helmet>

      <ProductDetailsView />
    </>
  );
}
