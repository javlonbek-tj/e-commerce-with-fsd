export const AuthProviders = {
  GOOGLE: 'GOOGLE',
  LOCALE: 'LOCALE',
};

export type AuthProvidersType =
  (typeof AuthProviders)[keyof typeof AuthProviders];
