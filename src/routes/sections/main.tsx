import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import MainLayout from 'src/layouts/main';
import { client } from 'src/graphql/config';
import ShopAllPage from 'src/pages/shop-all';
import SimpleLayout from 'src/layouts/simple';
import CompactLayout from 'src/layouts/compact';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
const Page500 = lazy(() => import('src/pages/500'));
const Page403 = lazy(() => import('src/pages/403'));
const Page404 = lazy(() => import('src/pages/404'));
const FaqsPage = lazy(() => import('src/pages/faqs'));
const AboutPage = lazy(() => import('src/pages/about-us'));
const ContactPage = lazy(() => import('src/pages/contact-us'));
const PricingPage = lazy(() => import('src/pages/pricing'));
const PaymentPage = lazy(() => import('src/pages/payment'));
const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));
const MaintenancePage = lazy(() => import('src/pages/maintenance'));
// LISTING
const ListingListPage = lazy(() => import('src/pages/listing/list'));
const ListingDetailsPage = lazy(() => import('src/pages/listing/details'));
const ListingCheckoutPage = lazy(() => import('src/pages/listing/checkout'));
// BLOG
const PostListPage = lazy(() => import('src/pages/post/list'));
const PostDetailsPage = lazy(() => import('src/pages/post/details'));

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <MainLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      { path: 'about-us', element: <AboutPage /> },
      { path: 'contact-us', element: <ContactPage /> },
      { path: 'faqs', element: <FaqsPage /> },
      {
        path: 'listing',
        element: (
          <ApolloProvider client={client}>
            <Outlet />
          </ApolloProvider>
        ),
        children: [
          { element: <ListingListPage />, index: true },
          { path: 'list', element: <ListingListPage /> },
          { path: ':id', element: <ListingDetailsPage /> },
          { path: 'checkout', element: <ListingCheckoutPage /> },
        ],
      },
      { path: 'shop-all', element: <ShopAllPage /> },
      {
        path: 'post',
        children: [
          { element: <PostListPage />, index: true },
          { path: 'list', element: <PostListPage /> },
          { path: ':title', element: <PostDetailsPage /> },
        ],
      },
    ],
  },
  {
    element: (
      <SimpleLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </SimpleLayout>
    ),
    children: [
      { path: 'pricing', element: <PricingPage /> },
      { path: 'payment', element: <PaymentPage /> },
    ],
  },
  {
    element: (
      <CompactLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </CompactLayout>
    ),
    children: [
      { path: 'coming-soon', element: <ComingSoonPage /> },
      { path: 'maintenance', element: <MaintenancePage /> },
      { path: '500', element: <Page500 /> },
      { path: '404', element: <Page404 /> },
      { path: '403', element: <Page403 /> },
    ],
  },
];
