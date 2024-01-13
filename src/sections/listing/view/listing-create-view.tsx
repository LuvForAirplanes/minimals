import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ListingNewEditForm from '../listing-new-edit-form';

// ----------------------------------------------------------------------

export default function ListingCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new listing"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Listing',
            href: paths.dashboard.listing.root,
          },
          { name: 'New listing' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ListingNewEditForm />
    </Container>
  );
}
