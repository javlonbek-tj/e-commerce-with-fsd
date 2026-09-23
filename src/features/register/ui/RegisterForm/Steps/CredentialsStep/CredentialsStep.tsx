import { useTranslation } from 'react-i18next';
import styles from './CredentialsStep.module.scss';
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

export const CredentialsStep = () => {
  const { t } = useTranslation('auth');
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

  const handleSubmit = () => {
    dispatch(registerActions.setStep(FormSteps.PASSWORD));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Tabs defaultValue={AuthMethod.EMAIL} onChange={handleMethodChange}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethod.EMAIL}>
            <AppIcon Icon={MailIcon} />
            {t('register.credentials.email')}
          </Tabs.Trigger>
          <Tabs.Trigger value={AuthMethod.PHONE}>
            <AppIcon Icon={PhoneIcon} />
            {t('register.credentials.phone')}
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={AuthMethod.EMAIL}>
          <Input
            name='email'
            label={t('register.credentials.email')}
            value={email}
            error={!!error}
            onChange={handleEmailChange}
            placeholder={t('register.credentials.enterEmail')}
          />
        </Tabs.Content>
        <Tabs.Content value={AuthMethod.PHONE}>
          <PhoneInput
            name='phone'
            value={phone}
            onChange={handlePhoneChange}
            error={!!error}
            label={t('register.credentials.phone')}
          />
        </Tabs.Content>
      </Tabs>

      {!!error && <div className={styles.error}>{error}</div>}

      <Button fullWidth className={styles.button} isLoading={isLoading}>
        {t('register.continueButton')}
        <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  );
};
