import { Link } from 'react-router';
import styles from './LoginPage.module.scss';
import { LoginForm } from '@/features/login';

import { AppRoutes } from '@/shared/config';
import { AuthByGoogleButton } from '@/features/authByGoogle';

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>Sign in</h1>
        <LoginForm />

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
            <p>Do not have an account?</p>
            <Link className={styles.link} to={AppRoutes.REGISTER}>
              Sign up
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default LoginPage;
