import type { RouteProps } from 'react-router';

import { HomePage } from '@/pages/Home';
import { AppRoutes } from '@/shared/config';
import { LoginPage } from '@/pages/Login';
import { RegisterPage } from '@/pages/Register';
import { NotFound } from '@/pages/NotFound';
import { AuthCallbackPage } from '@/pages/AuthCallback';

export const routeConfig: RouteProps[] = [
  {
    path: AppRoutes.HOME,
    element: <HomePage />,
  },

  {
    path: AppRoutes.LOGIN,
    element: <LoginPage />,
  },

  {
    path: AppRoutes.REGISTER,
    element: <RegisterPage />,
  },

  {
    path: AppRoutes.AUTH_CALLBACK,
    element: <AuthCallbackPage />,
  },

  {
    path: AppRoutes.NOT_FOUND,
    element: <NotFound />,
  },
];
