import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { ListingShopDetailsView } from 'src/sections/listing/view';

// ----------------------------------------------------------------------

export default function ListingShopDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Listing: Details</title>
      </Helmet>

      <ListingShopDetailsView id={`${id}`} />
    </>
  );
}
