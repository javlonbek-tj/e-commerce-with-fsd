import { useEffect, useState } from 'react';

import {
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  type ThemeType,
  Theme,
} from '@/shared/config';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || Theme.PINK;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === Theme.PINK ? Theme.BLUE : Theme.PINK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
