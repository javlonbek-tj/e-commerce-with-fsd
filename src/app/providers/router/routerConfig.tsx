import type { RouteProps } from 'react-router';

import { HomePage } from '@/pages/Home';
import { AppRoutes } from '@/shared/config';

export const routeConfig: RouteProps[] = [
  {
    path: AppRoutes.HOME,
    element: <HomePage />,
  },
];
