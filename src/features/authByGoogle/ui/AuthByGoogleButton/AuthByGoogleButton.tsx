import { AppIcon, Button } from '@/shared/ui';
import { callAuthByGoogle } from '../../lib/callAuthByGoogle/callAuthByGoogle';
import GoogleIcon from '@/shared/assets/icons/Google.svg?react';
import styles from './AuthByGoogleButton.module.scss';

export const AuthByGoogleButton = () => {
  return (
    <Button
      fullWidth
      theme='secondary'
      onClick={callAuthByGoogle}
      className={styles.button}
    >
      <AppIcon Icon={GoogleIcon} className={styles.googleIcon} />
      Continue with Google
    </Button>
  );
};
