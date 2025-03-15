import { createBrowserRouter } from 'react-router-dom';

import { Routes } from '../../shared/config/index';
import { PageLayout } from '../../shared/ui/page-layout/page-layout';
import { RoutesGroup } from './components/routes-group';
import { UnauthPage } from '../../pages/unauth';

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <PageLayout />,
    children: [
      {
        element: <RoutesGroup onlyUnauthorized />,
        children: [{ index: true, element: <UnauthPage /> }],
      },
    ],
  },
]);
