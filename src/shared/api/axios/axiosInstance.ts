import { API_URL } from '@/shared/config';
import type { AxiosInstance } from 'axios';
import axios from 'axios';

/**
 * API Client: Used for regular API requests
 * Interceptors will attach access token automatically
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 10000,
});

/**
 * Auth Client: Used specifically for authentication endpoints.
 * Used for refresh-token requests and login/logout.
 * Does NOT attach the access token to prevent sending expired token to refresh endpoint.
 */
export const authClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 10000,
});
