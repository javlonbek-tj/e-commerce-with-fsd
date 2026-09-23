import { useTranslation } from 'react-i18next';

import styles from './PageError.module.scss';
import PageErrorIcon from '@/shared/assets/icons/PageError.svg?react';
import { Button } from '@/shared/ui';

interface PageErrorProps {
  error?: string;
}

export const PageError = ({ error }: PageErrorProps) => {
  const { t } = useTranslation();
  const handleReload = () => {
    location.reload();
  };

  const description = error ?? t('pageError.description');
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <PageErrorIcon className={styles.icon} />
        <h3 className={styles.title}>{t('pageError.title')}</h3>
        <p className={styles.description}>{description}</p>
        <Button onClick={handleReload} form='rounded' className={styles.button}>
          {t('pageError.reload')}
        </Button>
      </div>
    </div>
  );
};
