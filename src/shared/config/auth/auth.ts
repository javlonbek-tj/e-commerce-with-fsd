export const AuthProviders = {
  GOOGLE: 'GOOGLE',
  LOCALE: 'LOCALE',
};

export type AuthProvidersType =
  (typeof AuthProviders)[keyof typeof AuthProviders];

export const AuthMethod = {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
} as const;

export type AuthMethodType = (typeof AuthMethod)[keyof typeof AuthMethod];
