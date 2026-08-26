import { Header } from '@/widgets/Header';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>Main</div>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default HomePage;
