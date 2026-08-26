import { AppIcon, Button } from '@/shared/ui';
import Circle from '@/shared/assets/icons/Circle.svg?react';
import { useTheme } from '@/shared/config';

export const ThemeSwithcer = () => {
  const { toggleTheme } = useTheme();
  return (
    <Button theme='ghost' onClick={toggleTheme}>
      <AppIcon Icon={Circle} filled />
    </Button>
  );
};
