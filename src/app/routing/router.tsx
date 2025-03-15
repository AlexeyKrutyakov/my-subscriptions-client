import { createBrowserRouter } from 'react-router-dom';

import { Routes } from '../../shared/config/index';
import { RoutesGroup } from './components/routes-group';
import { UnauthPage } from '../../pages/unauth';
import Layout from '../../pages/layout/index';

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <Layout />,
    children: [
      {
        element: <RoutesGroup onlyUnauthorized />,
        children: [{ index: true, element: <UnauthPage /> }],
      },
    ],
  },
]);
