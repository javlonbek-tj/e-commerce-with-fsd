import styles from './PasswordCreateStep.module.scss';
import { cn, useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppIcon, Input, Button } from '@/shared/ui';
import ArrowRight from '@/shared/assets/icons/ArrowRight.svg?react';
import CheckIcon from '@/shared/assets/icons/Check.svg?react';
import {
  registerActions,
  selectRegisterEmail,
  selectRegisterError,
  selectRegisterIsLoading,
  selectRegisterPassword,
  selectRegisterPhone,
} from '@/features/register';
import { FormSteps } from '@/features/register/model/types/RegisterFormSchema';
import { useState, type ChangeEvent } from 'react';
import { passwordRequirements } from '@/features/register/config/passwordRequirements';
import { register } from '@/features/register/model/services/register';

export const PasswordCreateStep = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectRegisterIsLoading);
  const password = useAppSelector(selectRegisterPassword);
  const email = useAppSelector(selectRegisterEmail);
  const phone = useAppSelector(selectRegisterPhone);
  const error = useAppSelector(selectRegisterError);
  const [validationError, setValidationError] = useState<boolean>(true);

  const handleChangePassword = (value: string) => {
    const isValid = passwordRequirements.every((requirement) =>
      requirement.test(value),
    );
    dispatch(registerActions.setPassword(value));

    if (!isValid) {
      setValidationError(true);
    } else {
      setValidationError(false);
    }
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validationError) {
      const result = await dispatch(register({ email, password, phone }));
      if (register.fulfilled.match(result)) {
        dispatch(registerActions.setStep(FormSteps.VERIFICATION));
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        disabled={isLoading}
        type='password'
        label='Create a password'
        placeholder='Enter your password'
        onChange={handleChangePassword}
        value={password}
      />

      <div className={styles.requirementList}>
        {passwordRequirements.map((requirement) => {
          const isMet = requirement.test(password);
          return (
            <div className={styles.requirement} key={requirement.key}>
              <AppIcon
                Icon={CheckIcon}
                size={16}
                className={cn(styles.requirementIcon, {
                  [styles.met]: isMet,
                })}
              />
              <span className={styles.requiremetnText}>{requirement.key}</span>
            </div>
          );
        })}
      </div>

      {!!error && <div className={styles.error}>{error}</div>}
      <Button
        fullWidth
        className={styles.button}
        isLoading={isLoading}
        disabled={validationError}
      >
        Continue
        <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  );
};
