import styles from '../RegisterForm.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { AuthMethod, type AuthMethodType } from '@/shared/config';
import { AppIcon, Input, PhoneInput, Tabs, Button } from '@/shared/ui';
import MailIcon from '@/shared/assets/icons/Mail.svg?react';
import PhoneIcon from '@/shared/assets/icons/Phone.svg?react';
import ArrowRight from '@/shared/assets/icons/ArrowRight.svg?react';
import {
  registerActions,
  selectRegisterEmail,
  selectRegisterError,
  selectRegisterIsLoading,
  selectRegisterPhone,
} from '@/features/register';
import { FormSteps } from '@/features/register/model/types/RegisterFormSchema';

export const PasswordCreateStep = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectRegisterEmail);
  const phone = useAppSelector(selectRegisterPhone);
  const error = useAppSelector(selectRegisterError);
  const isLoading = useAppSelector(selectRegisterIsLoading);

  const handleEmailChange = (value: string) => {
    dispatch(registerActions.setEmail(value));
  };

  const handlePhoneChange = (value: string) => {
    dispatch(registerActions.setPhone(value));
  };

  const handleMethodChange = (tab: string) => {
    dispatch(registerActions.setMethod(tab as AuthMethodType));
    dispatch(registerActions.resetForm());
  };

  const handleNextStep = () => {
    dispatch(registerActions.setStep(FormSteps.PASSWORD));
  };

  return (
    <form className={styles.form} onSubmit={handleNextStep}>
      {!!error && <div className={styles.error}>{error}</div>}

      <Button fullWidth className={styles.button} isLoading={isLoading}>
        Continue
        <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  );
};
