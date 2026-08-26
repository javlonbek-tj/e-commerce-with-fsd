import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import LogoIcon from '@/shared/assets/icons/Logo.svg?react';
import SearchIcon from '@/shared/assets/icons/Search.svg?react';
import MapPinIcon from '@/shared/assets/icons/MapPin.svg?react';
import ShoppingCartIcon from '@/shared/assets/icons/ShoppingCart.svg?react';
import UsersIcon from '@/shared/assets/icons/Users.svg?react';

import { AppIcon, Button, Input } from '@/shared/ui';
import styles from './Header.module.scss';
import { LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';
import { ThemeSwithcer } from './ThemeSwitcher/ThemeSwithcer';
import { AppRoutes } from '@/shared/config';

export const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLoginClick = () => {
    navigate(AppRoutes.LOGIN);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <LogoIcon className={styles.header__logo} />
          <Button className={styles.header__address} theme='ghost'>
            <AppIcon Icon={MapPinIcon} />
            <span>10115 New York</span>
          </Button>
        </div>

        <Input
          placeholder={t('header.searchPlaceholder')}
          rounded
          Icon={<AppIcon Icon={SearchIcon} size={18} theme='background' />}
          className={styles.header__search}
        />

        <div className={styles.header__right}>
          <Button className={styles.header__cart} theme='tertiary' size='xs'>
            <div className={styles['header__cart-icon']}>
              <AppIcon Icon={ShoppingCartIcon} theme='background' />
              <span className={styles['header__cart-count']}>14</span>
            </div>
            <span>{t('header.cart')}</span>
          </Button>

          <Button theme='outline' onClick={handleLoginClick}>
            <AppIcon Icon={UsersIcon} />
            <span>{t('header.login')}</span>
          </Button>

          <ThemeSwithcer />

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
