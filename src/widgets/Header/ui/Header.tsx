import { useTranslation } from 'react-i18next';

import LogoIcon from '@/shared/assets/icons/Logo.svg?react';
import Search from '@/shared/assets/icons/Search.svg?react';
import MapPin from '@/shared/assets/icons/MapPin.svg?react';
import ShoppingCart from '@/shared/assets/icons/ShoppingCart.svg?react';
import Users from '@/shared/assets/icons/Users.svg?react';
import English from '@/shared/assets/icons/English.svg?react';
import German from '@/shared/assets/icons/German.svg?react';
import Circle from '@/shared/assets/icons/Circle.svg?react';
import { AppIcon, Button, Input } from '@/shared/ui';
import styles from './Header.module.scss';
import { useTheme } from '@/shared/config';

export const Header = () => {
  const { i18n } = useTranslation();
  const { toggleTheme } = useTheme();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <LogoIcon className={styles.header__logo} />
          <Button className={styles.header__address} theme='ghost'>
            <AppIcon Icon={MapPin} />
            <span>10115 New York</span>
          </Button>
        </div>

        <Input
          placeholder='Search by'
          rounded
          Icon={<AppIcon Icon={Search} size={18} theme='background' />}
          className={styles.header__search}
        />

        <div className={styles.header__right}>
          <Button className={styles.header__cart} theme='tertiary' size='xs'>
            <div className={styles['header__cart-icon']}>
              <AppIcon Icon={ShoppingCart} theme='background' />
              <span className={styles['header__cart-count']}>14</span>
            </div>
            <span>Cart</span>
          </Button>

          <Button theme='outline'>
            <AppIcon Icon={Users} />
            <span>Login</span>
          </Button>

          <Button theme='ghost' onClick={toggleTheme}>
            <AppIcon Icon={Circle} filled />
          </Button>

          <Button theme='ghost' onClick={toggleLanguage}>
            {i18n.language === 'en' ? (
              <AppIcon Icon={English} />
            ) : (
              <AppIcon Icon={German} />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
