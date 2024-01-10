import { Helmet } from 'react-helmet-async';

import ListingCategoriesView from 'src/sections/listing-categories/view';

// ----------------------------------------------------------------------

export default function ListingCategoriesPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard: Listing Categories</title>
      </Helmet>

      <ListingCategoriesView />
    </>
  );
}
