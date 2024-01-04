import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { GuestGuard } from 'src/auth/guard';
import CompactLayout from 'src/layouts/compact';
import AuthClassicLayout from 'src/layouts/auth/classic';

import { SplashScreen } from 'src/components/loading-screen';

const SupabaseLoginPage = lazy(() => import('src/pages/auth/supabase/login'));
const SupabaseVerifyPage = lazy(() => import('src/pages/auth/supabase/verify'));
const SupabaseRegisterPage = lazy(() => import('src/pages/auth/supabase/register'));
const SupabaseNewPasswordPage = lazy(() => import('src/pages/auth/supabase/new-password'));
const SupabaseForgotPasswordPage = lazy(() => import('src/pages/auth/supabase/forgot-password'));

export const authRoutes = [
  {
    path: 'auth',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <AuthClassicLayout>
              <SupabaseLoginPage />
            </AuthClassicLayout>
          </GuestGuard>
        ),
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <AuthClassicLayout title="Manage the job more effectively with Minimal">
              <SupabaseRegisterPage />
            </AuthClassicLayout>
          </GuestGuard>
        ),
      },
      {
        element: (
          <CompactLayout>
            <Outlet />
          </CompactLayout>
        ),
        children: [
          { path: 'verify', element: <SupabaseVerifyPage /> },
          {
            path: 'forgot-password',
            element: <SupabaseForgotPasswordPage />,
          },
          { path: 'new-password', element: <SupabaseNewPasswordPage /> },
        ],
      },
    ],
  },
];
