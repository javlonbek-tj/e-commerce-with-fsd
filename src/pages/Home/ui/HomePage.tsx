import { Header } from '@/widgets/Header';
import styles from './HomePage.module.scss';
import { Tabs } from '@/shared/ui';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className='container'>
          <Tabs defaultValue='1'>
            <Tabs.List>
              <Tabs.Trigger value='1'>1</Tabs.Trigger>
              <Tabs.Trigger value='2'>2</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value='1'>1</Tabs.Content>
            <Tabs.Content value='2'>2</Tabs.Content>
          </Tabs>
        </div>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default HomePage;
