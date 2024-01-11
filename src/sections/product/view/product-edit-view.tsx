import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { getListingEditQuery } from 'src/graphql/queries/listingEdit';
import {
  ListingEditQuery,
  ListingEditFragment,
  ListingEditQueryVariables,
} from 'src/graphql/types/graphql';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ProductNewEditForm from '../product-new-edit-form';

export default function ProductEditView() {
  const settings = useSettingsContext();
  const params = useParams<{ id: string }>();
  const { data } = useQuery<ListingEditQuery, ListingEditQueryVariables>(getListingEditQuery, {
    variables: {
      id: params.id,
    },
    skip: params.id === undefined,
  });
  const listing = data?.listingEdit as ListingEditFragment | undefined;

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          {
            name: 'Product',
            href: paths.dashboard.product.root,
          },
          { name: listing?.title },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      {listing && <ProductNewEditForm product={listing} />}
    </Container>
  );
}
