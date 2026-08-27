import { lazy } from 'react';

export const HomePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./HomePage'));
      }, 2000);
    }),
);
