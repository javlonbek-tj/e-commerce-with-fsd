import { useAppSelector } from '@/shared/lib';
import { FormSteps } from '../../model/types/RegisterFormSchema';
import { CredentialsStep } from './CredentialsStep/CredentialsStep';
import { selectRegisterStep } from '../../model/selectors/selectRegisterStep/selectRegisterStep';

export const RegisterForm = () => {
  const registerStep = useAppSelector(selectRegisterStep);

  return registerStep === FormSteps.CREDENTIALS ? <CredentialsStep /> : null;
};
