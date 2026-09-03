import { RegisterForm } from '@/features/register';

import styles from './RegisterPage.module.scss';
const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
