import { paths } from 'src/routes/paths';

import { PATH_AFTER_LOGIN } from 'src/config-global';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'Browse',
    icon: <Iconify icon="solar:notebook-bold-duotone" />,
    path: paths.shopAll,
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'About us', path: paths.about },
          { title: 'Contact us', path: paths.contact },
          { title: 'FAQs', path: paths.faqs },
          { title: 'Pricing', path: paths.pricing },
          { title: 'Payment', path: paths.payment },
          { title: 'Maintenance', path: paths.maintenance },
          { title: 'Coming Soon', path: paths.comingSoon },
        ],
      },
      {
        subheader: 'Concepts',
        items: [
          { title: 'Shop', path: paths.listing.root },
          { title: 'Listing', path: paths.listing.demo.details },
          { title: 'Checkout', path: paths.listing.checkout },
          { title: 'Posts', path: paths.post.root },
          { title: 'Post', path: paths.post.demo.details },
        ],
      },
      {
        subheader: 'Error',
        items: [
          { title: 'Page 403', path: paths.page403 },
          { title: 'Page 404', path: paths.page404 },
          { title: 'Page 500', path: paths.page500 },
        ],
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      },
    ],
  },
  {
    title: 'Shop',
    icon: <Iconify icon="solar:notebook-bold-duotone" />,
    path: paths.listing.root,
  },
];
