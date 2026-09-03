import { useAppSelector } from '@/shared/lib';
import { FormSteps } from '../../model/types/RegisterFormSchema';
import { selectRegisterStep } from '../../model/selectors/selectRegisterStep/selectRegisterStep';
import { CredentialsStep } from './Steps/CredentialsStep/CredentialsStep';
import { PasswordCreateStep } from './Steps/PasswordCreateStep/PasswordCreateStep';

export const RegisterForm = () => {
  const registerStep = useAppSelector(selectRegisterStep);

  let content;
  if (registerStep === FormSteps.CREDENTIALS) {
    content = <CredentialsStep />;
  } else if (registerStep === FormSteps.PASSWORD) {
    content = <PasswordCreateStep />;
  }

  return content;
};
