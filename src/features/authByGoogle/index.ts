import { selectAuthByGoogleError } from './model/selectors/selectAuthByGoogleError/selectAuthByGoogleError';
import { selectAuthByGoogleIsLoading } from './model/selectors/selectAuthByGoogleIsLoading/selectAuthByGoogleIsLoading';
import { exchangeCode } from './model/services/exchangeCode/exchangeCode';
import { authbyGoogleReducer } from './model/slice/authByGoogleSlice';
import type { AuthByGoogleSchema } from './model/types/authByGoogle';
import { AuthByGoogleButton } from './ui/AuthByGoogleButton/AuthByGoogleButton';

export {
  authbyGoogleReducer,
  AuthByGoogleButton,
  selectAuthByGoogleError,
  selectAuthByGoogleIsLoading,
  exchangeCode,
};
export type { AuthByGoogleSchema };
