import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Routes } from '../../shared/config/index';
import { RoutesGroup } from './components/routes-group';
import { UnauthPage } from '../../pages/unauth';
import Layout from '../../pages/layout';
import { ProfilePage } from '../../pages/profile';

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <Layout />,
    children: [
      {
        element: <RoutesGroup onlyUnauthorized />,
        children: [{ index: true, element: <UnauthPage /> }],
      },
      {
        element: <RoutesGroup allowed={{ Client: true, Admin: true }} />,
        children: [{ path: Routes.PROFILE, element: <ProfilePage /> }],
      },
    ],
  },
  { path: Routes.NOT_FOUND, element: <>Not found</> },
]);
