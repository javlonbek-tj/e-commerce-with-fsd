import { RegisterForm } from '@/features/register';

import styles from './RegisterPage.module.scss';
const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>Sign up</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
