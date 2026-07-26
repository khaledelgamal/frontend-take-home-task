import { createBrowserRouter, redirect, type RouteObject } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout/AppLayout';
import ScrollToTop from './ScrollToTop';
import { routePaths } from '@/router/routePaths';
import BundleBuilderPage from '@/pages/BundleBuilderPage/BundleBuilderPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

const routes: RouteObject[] = [
  {
    element: (
      <ScrollToTop>
        <AppLayout />
      </ScrollToTop>
    ),
    children: [
      {
        path: routePaths.HOME,
        loader: () => redirect(routePaths.BUNDLE_BUILDER),
      },
      {
        path: routePaths.BUNDLE_BUILDER,
        handle: { breadcrumb: 'Bundle Builder' },
        element: <BundleBuilderPage />,
      },
      {
        path: '*',
        handle: { breadcrumb: 'Not Found' },
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
