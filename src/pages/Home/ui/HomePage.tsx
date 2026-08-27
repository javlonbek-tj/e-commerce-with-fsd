import { Header } from '@/widgets/Header';
import styles from './HomePage.module.scss';
import { Spinner } from '@/shared/ui';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className='container'>
          <Spinner />
        </div>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default HomePage;
