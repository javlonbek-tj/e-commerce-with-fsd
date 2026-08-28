import { AppRoutes } from './router/routerPaths';
import {
  ThemeContext,
  Theme,
  LOCAL_STORAGE_THEME_KEY,
  type ThemeType,
} from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { supportedLngs } from './i18n/i18n';
import { languageIconList } from './i18n/LanguageIconList';
import {
  AuthMethod,
  AuthProviders,
  type AuthProvidersType,
  type AuthMethodType,
  LOCAL_STORAGE_USER_KEY,
} from './auth/auth';

export {
  AppRoutes,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  useTheme,
  supportedLngs,
  languageIconList,
  AuthProviders,
  AuthMethod,
  LOCAL_STORAGE_USER_KEY,
  type AuthProvidersType,
  type ThemeType,
  type AuthMethodType,
};
