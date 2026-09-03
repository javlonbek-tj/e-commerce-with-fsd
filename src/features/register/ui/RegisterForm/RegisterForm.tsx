import { useAppSelector } from '@/shared/lib';
import { FormSteps } from '../../model/types/RegisterFormSchema';
import { selectRegisterStep } from '../../model/selectors/selectRegisterStep/selectRegisterStep';
import { CredentialsStep } from './Steps/CredentialsStep/CredentialsStep';
import { PasswordCreateStep } from './Steps/PasswordCreateStep/PasswordCreateStep';
import { VerificationStep } from './Steps/VerificationStep/VerificationStep';

export const RegisterForm = () => {
  const registerStep = useAppSelector(selectRegisterStep);

  return (
    <>
      {registerStep === FormSteps.CREDENTIALS && <CredentialsStep />}
      {registerStep === FormSteps.PASSWORD && <PasswordCreateStep />}
      {registerStep === FormSteps.VERIFICATION && <VerificationStep />}
    </>
  );
};
