import { useState, type InputHTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/shared/lib';
import HideIcon from '@/shared/assets/icons/Hide.svg?react';
import ShowIcon from '@/shared/assets/icons/Show.svg?react';
import { Button } from '../Button/Button';
import styles from './Input.module.scss';

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputType {
  className?: string;
  value?: string;
  disabled?: boolean;
  rounded?: boolean;
  Icon?: ReactNode;
  onChange?: (value: string) => void;
  label?: string;
  name?: string;
  error?: boolean;
}

export const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const {
    className,
    value,
    Icon,
    onChange,
    rounded = false,
    disabled = false,
    type = 'text',
    label,
    name,
    error = false,
    ...rest
  } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  return (
    <div className={styles.wrapper}>
      {label && (
        <label
          htmlFor={name}
          className={cn(styles.label, { [styles.error]: error })}
        >
          {label}
        </label>
      )}
      <div
        className={cn(styles.inputContainer, className, {
          [styles.rounded]: rounded,
          [styles.disabled]: disabled,
          [styles.focus]: focus,
          [styles.error]: error,
        })}
      >
        {Icon}
        <input
          {...rest}
          value={value}
          disabled={disabled}
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id={name}
          name={name}
          type={showPassword && type === 'password' ? 'text' : type}
          className={cn(styles.input, {
            [styles.disabled]: disabled,
            [styles.error]: error,
          })}
        />

        {type === 'password' && (
          <Button
            onClick={toggleShowPassword}
            type="button"
            theme="ghost"
            className={styles.toggleVisibility}
          >
            {showPassword ? <HideIcon /> : <ShowIcon />}
          </Button>
        )}
      </div>
    </div>
  );
};
