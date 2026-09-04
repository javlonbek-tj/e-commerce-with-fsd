import type { RegisterFormSchema } from './model/types/RegisterFormSchema';
import { registerActions, registerReducer } from './model/slice/registerSlice';
import { selectRegisterEmail } from './model/selectors/selectRegisterEmail/selectRegisterEmail';
import { selectRegisterPhone } from './model/selectors/selectRegisterPhone/selectRegisterPhone';
import { selectRegisterPassword } from './model/selectors/selectRegisterPassword/selectRegisterPassword';
import { selectRegisterIsLoading } from './model/selectors/selectRegisterIsLoading/selectRegisterIsLoading';
import { selectRegisterError } from './model/selectors/selectRegisterError/selectRegisterError';
import { selectRegisterMethod } from './model/selectors/selectRegisterMethod/selectRegisterMethod';
import { selectRegisterStep } from './model/selectors/selectRegisterStep/selectRegisterStep';
import { RegisterForm } from './ui/RegisterForm/RegisterForm';
import {
  FormSteps,
  type FormStepsType,
} from './model/types/RegisterFormSchema';

export {
  registerActions,
  registerReducer,
  selectRegisterEmail,
  selectRegisterPhone,
  selectRegisterPassword,
  selectRegisterIsLoading,
  selectRegisterError,
  selectRegisterMethod,
  selectRegisterStep,
  RegisterForm,
  FormSteps,
};
export type { RegisterFormSchema, FormStepsType };
