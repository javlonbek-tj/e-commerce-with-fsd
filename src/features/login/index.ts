import { loginActions, loginReducer } from './model/slice/loginSlice';
import type { LoginFormSchema } from './model/types/LoginFormSchema';
import { selectLoginEmail } from './model/selectors/selectLoginEmail/selectLoginEmail';
import { selectLoginPhone } from './model/selectors/selectLoginPhone/selectLoginPhone';
import { selectLoginPassword } from './model/selectors/selectLoginPassword/selectLoginPassword';
import { selectLoginIsLoading } from './model/selectors/selectLoginIsLoading/selectLoginIsLoading';
import { selectLoginError } from './model/selectors/selectLoginError/selectLoginError';
import { selectLoginMethod } from './model/selectors/selectLoginMethod/selectLoginMethod';

export { loginActions, loginReducer };
export type { LoginFormSchema };
export {
  selectLoginEmail,
  selectLoginPhone,
  selectLoginPassword,
  selectLoginIsLoading,
  selectLoginError,
  selectLoginMethod,
};
