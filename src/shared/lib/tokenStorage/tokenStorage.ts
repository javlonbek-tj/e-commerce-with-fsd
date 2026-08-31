/**
 * Access token is persisted in localStorage so it survives page reloads.
 * The refresh token is an httpOnly cookie set by the server (see `withCredentials`
 * on the axios instances) and is never read or written from JS.
 */
const LOCAL_STORAGE_ACCESS_TOKEN_KEY = 'accessToken';

const getAccessToken = (): string | null =>
  localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);

const setAccessToken = (token: string): void => {
  localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, token);
};

const clearAccessToken = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
};

export const tokenStorage = {
  getAccessToken,
  setAccessToken,
  clearAccessToken,
};
