import { selectRegisterEmail } from '@/features/register/model/selectors/selectRegisterEmail/selectRegisterEmail';
import { selectRegisterError } from '@/features/register/model/selectors/selectRegisterError/selectRegisterError';
import { selectRegisterIsLoading } from '@/features/register/model/selectors/selectRegisterIsLoading/selectRegisterIsLoading';
import { selectRegisterPhone } from '@/features/register/model/selectors/selectRegisterPhone/selectRegisterPhone';
import { useAppSelector } from '@/shared/lib';

import styles from './VerificationStep.module.scss';
import { Button, Input, Spinner } from '@/shared/ui';

export const VerificationStep = () => {
  const email = useAppSelector(selectRegisterEmail);
  const phone = useAppSelector(selectRegisterPhone);
  const error = useAppSelector(selectRegisterError);
  const isLoading = useAppSelector(selectRegisterIsLoading);

  const handleResend = () => {
    // TODO:
  };

  return (
    <>
      <form>
        <div className={styles.title}>
          Sent to <br /> <span>{email || phone}</span>
        </div>
        <Input />
        {!!error && <div className={styles.error}>{error}</div>}
        {isLoading && (
          <div className={styles.wrapper}>
            <Spinner size="md" />
          </div>
        )}
      </form>
      <div className={styles.resendCodeText}>
        <span>Do not receive the code?</span>
        <Button onClick={handleResend} disabled={isLoading} theme="ghost">
          Resend code
        </Button>
      </div>
    </>
  );
};
