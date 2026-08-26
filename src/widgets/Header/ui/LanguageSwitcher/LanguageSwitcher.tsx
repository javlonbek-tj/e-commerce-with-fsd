import { languageIconList } from '@/shared/config';
import { AppIcon, Button } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };
  return (
    <Button theme='ghost' onClick={toggleLanguage}>
      <AppIcon Icon={languageIconList[i18n.language]} />
    </Button>
  );
};
