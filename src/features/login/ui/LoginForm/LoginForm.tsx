import type { ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import { AppRoutes, AuthMethod, type AuthMethodType } from '@/shared/config';
import { AppIcon, Button, Input, PhoneInput, Tabs } from '@/shared/ui';
import Mail from '@/shared/assets/icons/Mail.svg?react';
import Phone from '@/shared/assets/icons/Phone.svg?react';
import ArrowRight from '@/shared/assets/icons/ArrowRight.svg?react';

import styles from './LoginForm.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { selectLoginEmail } from '../../model/selectors/selectLoginEmail/selectLoginEmail';
import { selectLoginPhone } from '../../model/selectors/selectLoginPhone/selectLoginPhone';
import { selectLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword';
import { selectLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading';
import { loginActions } from '../../model/slice/loginSlice';
import { login } from '../../model/services/login';
import { selectLoginError } from '../../model/selectors/selectLoginError/selectLoginError';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectLoginEmail);
  const phone = useAppSelector(selectLoginPhone);
  const password = useAppSelector(selectLoginPassword);
  const isLoading = useAppSelector(selectLoginIsLoading);
  const error = useAppSelector(selectLoginError);
  const navigate = useNavigate();

  const handleEmailChange = (value: string) => {
    dispatch(loginActions.setEmail(value));
  };

  const handlePhoneChange = (value: string) => {
    dispatch(loginActions.setPhone(value));
  };

  const handlePasswordChange = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const handleMethodChange = (tab: AuthMethodType) => {
    dispatch(loginActions.setMethod(tab));
    dispatch(loginActions.resetForm());
  };

  const handleLoginSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(login({ email, phone, password }));

    if (login.fulfilled.match(result)) {
      navigate(AppRoutes.HOME);
      dispatch(loginActions.resetForm());
    }
  };
  return (
    <form className={styles.form} onSubmit={handleLoginSubmit}>
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

      <Button fullWidth className={styles.button} isLoading={isLoading}>
        Login
        <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  );
};
