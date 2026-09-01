import type { ChangeEvent } from 'react';
import { AuthMethod, type AuthMethodType } from '@/shared/config';
import { AppIcon, Button, Input, PhoneInput, Tabs } from '@/shared/ui';
import Mail from '@/shared/assets/icons/Mail.svg?react';
import Phone from '@/shared/assets/icons/Phone.svg?react';
import ArrowRight from '@/shared/assets/icons/ArrowRight.svg?react';

import styles from './RegisterForm.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { selectRegisterEmail } from '../../model/selectors/selectRegisterEmail/selectRegisterEmail';
import { selectRegisterPhone } from '../../model/selectors/selectRegisterPhone/selectRegisterPhone';
import { selectRegisterPassword } from '../../model/selectors/selectRegisterPassword/selectRegisterPassword';
import { selectRegisterIsLoading } from '../../model/selectors/selectRegisterIsLoading/selectRegisterIsLoading';
import { selectRegisterError } from '../../model/selectors/selectRegisterError/selectRegisterError';
import { selectRegisterStep } from '../../model/selectors/selectRegisterStep/selectRegisterStep';
import { registerActions } from '../../model/slice/registerSlice';
import { register } from '../../model/services/register';
import { FormSteps } from '../../model/types/RegisterFormSchema';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectRegisterEmail);
  const phone = useAppSelector(selectRegisterPhone);
  const password = useAppSelector(selectRegisterPassword);
  const isLoading = useAppSelector(selectRegisterIsLoading);
  const error = useAppSelector(selectRegisterError);
  const step = useAppSelector(selectRegisterStep);

  const isSubmitted = step !== FormSteps.CREDENTIALS;

  const handleEmailChange = (value: string) => {
    dispatch(registerActions.setEmail(value));
  };

  const handlePhoneChange = (value: string) => {
    dispatch(registerActions.setPhone(value));
  };

  const handlePasswordChange = (value: string) => {
    dispatch(registerActions.setPassword(value));
  };

  const handleMethodChange = (tab: AuthMethodType) => {
    dispatch(registerActions.setMethod(tab));
    dispatch(registerActions.resetForm());
  };

  const handleRegisterSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(register({ email, phone, password }));
  };

  return (
    <form className={styles.form} onSubmit={handleRegisterSubmit}>
      <Tabs defaultValue={AuthMethod.EMAIL} onChange={handleMethodChange}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethod.EMAIL}>
            <AppIcon Icon={Mail} />
            {AuthMethod.EMAIL}
          </Tabs.Trigger>
          <Tabs.Trigger value={AuthMethod.PHONE}>
            <AppIcon Icon={Phone} />
            {AuthMethod.PHONE}
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={AuthMethod.EMAIL}>
          <Input
            name="email"
            label="Email"
            value={email}
            error={!!error}
            onChange={handleEmailChange}
          />
        </Tabs.Content>
        <Tabs.Content value={AuthMethod.PHONE}>
          <PhoneInput
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            error={!!error}
            label="Phone"
          />
        </Tabs.Content>
      </Tabs>
      <div>
        <Input
          type="password"
          name="password"
          label="Password"
          value={password}
          error={!!error}
          onChange={handlePasswordChange}
        />
      </div>

      {!!error && <div className={styles.error}>{error}</div>}
      {isSubmitted && (
        <div className={styles.hint}>Registration request sent.</div>
      )}

      <Button
        fullWidth
        className={styles.button}
        isLoading={isLoading}
        disabled={isSubmitted}
      >
        Register
        <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  );
};
