import { selectRegisterEmail } from '@/features/register/model/selectors/selectRegisterEmail/selectRegisterEmail';
import { selectRegisterError } from '@/features/register/model/selectors/selectRegisterError/selectRegisterError';
import { selectRegisterIsLoading } from '@/features/register/model/selectors/selectRegisterIsLoading/selectRegisterIsLoading';
import { selectRegisterPhone } from '@/features/register/model/selectors/selectRegisterPhone/selectRegisterPhone';
import { useAppDispatch, useAppSelector } from '@/shared/lib';

import styles from './VerificationStep.module.scss';
import { Button, OTPInput, Spinner } from '@/shared/ui';

import { verifyCode } from '@/features/register/model/services/verifyCode';
import { resendCode } from '@/features/register/model/services/resendCode';
import { useNavigate } from 'react-router';
import { AppRoutes } from '@/shared/config';

export const VerificationStep = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectRegisterEmail);
  const phone = useAppSelector(selectRegisterPhone);
  const error = useAppSelector(selectRegisterError);
  const isLoading = useAppSelector(selectRegisterIsLoading);
  const navigate = useNavigate();

  const handleSubmit = async (code: string) => {
    const result = await dispatch(verifyCode({ email, phone, code }));
    if (verifyCode.fulfilled.match(result)) {
      navigate(AppRoutes.HOME);
    }
  };

  const handleResend = async () => {
    if (isLoading) return;

    await dispatch(resendCode({ email, phone }));
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.title}>
          Verification code sent to <br /> <span>{email || phone}</span>
        </div>
        <OTPInput
          disabled={isLoading}
          onComplete={handleSubmit}
          error={!!error}
        />
        {!!error && <div className={styles.error}>{error}</div>}
        {isLoading && (
          <div className={styles.spinner}>
            <Spinner size='md' />
          </div>
        )}
      </form>
      <div className={styles.resendCodeText}>
        <span>Code not received?</span>
        <Button
          onClick={handleResend}
          disabled={isLoading}
          theme='ghost'
          size='md'
          className={styles.resendButton}
        >
          Resend
        </Button>
      </div>
    </div>
  );
};
