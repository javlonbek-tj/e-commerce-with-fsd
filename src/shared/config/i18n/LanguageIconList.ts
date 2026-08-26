import EnglishIcon from '@/shared/assets/icons/English.svg?react';
import RussianIcon from '@/shared/assets/icons/Russian.svg?react';
import { type FunctionComponent, type SVGProps } from 'react';

type LanguageIconLIstType = Record<
  string,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const languageIconList: LanguageIconLIstType = {
  en: EnglishIcon,
  ru: RussianIcon,
};
