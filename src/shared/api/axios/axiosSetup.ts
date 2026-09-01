import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { apiClient, authClient } from './axiosInstance';
import { tokenStorage } from '@/shared/lib';

interface RefreshEndpointResponse {
  user: unknown;
  tokens: { accessToken: string };
}

export interface RefreshState {
  isRefreshing: boolean;
  failedQueue: Array<{
    resolve: (token: string) => void;
    reject: (error: unknown) => void;
  }>;
}

export interface AxiosConfigWithRetry extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const refreshState: RefreshState = {
  isRefreshing: false,
  failedQueue: [],
};

const handleRefreshFailure = (): void => {
  tokenStorage.clearAccessToken();
  window.location.href = '/login';
};

interface RefreshError extends Error {
  isRefreshedError: true;
  originalError: AxiosError;
}

const createRefreshError = (originalError: AxiosError): RefreshError => {
  const refreshError = new Error('token refresh failed') as RefreshError;
  refreshError.isRefreshedError = true;
  refreshError.originalError = originalError;
  return refreshError;
};

/**
 * Process the queue of failed requests after a successful token refresh.
 */
const processQueue = (error: unknown, token: string | null = null): void => {
  refreshState.failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      prom.resolve(token);
    }
  });

  refreshState.failedQueue = [];
};

const REFRESH_TIMEOUT = 15000;

const logError = (context: string, error: unknown) => {
  if (import.meta.env.DEV) {
    console.error(`API_CLIENT ${context}:`, error);
  }
};

/**
 * Setup interceptors for the API client.
 * - Request interceptor: Attaches access token to Authorization header
 * - Response interceptor: Handles 401 errors and initiates token refresh
 */
// Request Interceptor: Attach access token
apiClient.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle 401 and refresh flow
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: unknown) => {
    const axiosError = error as AxiosError;
    const originalConfig = axiosError.config as AxiosConfigWithRetry;

    // Handle 401 Unauthorized
    if (axiosError.response?.status === 401 && originalConfig) {
      // Prevent infinite retry loop: only retry once
      if (originalConfig._retry) {
        handleRefreshFailure();
        return Promise.reject(axiosError);
      }

      // If already refreshing, queue this request
      if (refreshState.isRefreshing) {
        return new Promise((resolve, reject) => {
          refreshState.failedQueue.push({
            resolve: (token: string) => {
              originalConfig.headers.Authorization = `Bearer ${token}`;
              resolve(apiClient(originalConfig));
            },
            reject: (err: unknown) => {
              reject(err);
            },
          });
        });
      }

      // Start refresh process
      originalConfig._retry = true;
      refreshState.isRefreshing = true;

      try {
        const response = await authClient.post<RefreshEndpointResponse>(
          '/auth/refresh',
          {},
          { timeout: REFRESH_TIMEOUT }
        );

        const {
          tokens: { accessToken },
        } = response.data;

        tokenStorage.setAccessToken(accessToken);
        // Update the failed request's auth header
        originalConfig.headers.Authorization = `Bearer ${accessToken}`;

        // Process queued requests with new token
        processQueue(null, accessToken);

        // Retry the original request
        return apiClient(originalConfig);
      } catch (refreshError) {
        logError('token_refresh_error', refreshError);
        handleRefreshFailure();
        processQueue(refreshError);
        return Promise.reject(createRefreshError(axiosError));
      } finally {
        refreshState.isRefreshing = false;
      }
    }

    return Promise.reject(axiosError);
  }
);

authClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      tokenStorage.clearAccessToken();
    }
    return Promise.reject(error);
  }
);

export const isRefreshError = (error: unknown): error is RefreshError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'isRefreshError' in error &&
    error.isRefreshError === true
  );
};
