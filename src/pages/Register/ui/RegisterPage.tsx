import { Link } from 'react-router';
import {
  FormSteps,
  registerActions,
  RegisterForm,
  selectRegisterStep,
  type FormStepsType,
} from '@/features/register';
import ArrowLeftIcon from '@/shared/assets/icons/ArrowLeft.svg?react';

import styles from './RegisterPage.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppIcon, Button } from '@/shared/ui';
import { AppRoutes } from '@/shared/config';
import { AuthByGoogleButton } from '@/features/authByGoogle';

const STEP_TITLES: Record<FormStepsType, string> = {
  [FormSteps.CREDENTIALS]: 'Sign up',
  [FormSteps.PASSWORD]: 'Create a password',
  [FormSteps.VERIFICATION]: 'Verification',
} as const;

const RegisterPage = () => {
  const step = useAppSelector(selectRegisterStep);
  const dispatch = useAppDispatch();

  const isCredentialsStep = step === FormSteps.CREDENTIALS;

  const handleGoBack = () => {
    if (!isCredentialsStep) {
      dispatch(registerActions.setStep(FormSteps.CREDENTIALS));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {!isCredentialsStep && (
          <Button
            theme='tertiary'
            size='md'
            form='circle'
            onClick={handleGoBack}
          >
            <AppIcon Icon={ArrowLeftIcon} />
          </Button>
        )}
        <h1 className={styles.title}>{STEP_TITLES[step]}</h1>
        <RegisterForm />

        {isCredentialsStep && (
          <>
            <div className={styles.divider}>
              <span className={styles.line}></span>
              <span className={styles.dividerText}>or</span>
              <span className={styles.line}></span>
            </div>

            <div className={styles.authServices}>
              <AuthByGoogleButton />
            </div>

            <div className={styles.footer}>
              <p>Already have an account?</p>
              <Link className={styles.link} to={AppRoutes.LOGIN}>
                Sign in
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
