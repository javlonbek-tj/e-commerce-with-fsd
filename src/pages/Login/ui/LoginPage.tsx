import { LoginForm } from '@/features/login';

import styles from './LoginPage.module.scss';
const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1>Sign in</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
