import { useState, type InputHTMLAttributes, type ReactNode } from 'react';
import 'react-international-phone/style.css';

import { cn } from '@/shared/lib';
import styles from '../Input.module.scss';
import { PhoneInput as ReactPhoneInput } from 'react-international-phone';

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

export const PhoneInput = (props: InputProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const {
    className,
    value,
    onChange,
    rounded = false,
    disabled = false,
    label,
    name,
    error = false,
    ...rest
  } = props;

  const handleOnChange = (phone: string) => {
    onChange?.(phone);
  };

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
      <ReactPhoneInput
        inputProps={{ ...rest, id: name }}
        value={value}
        defaultCountry="uz"
        forceDialCode
        disableCountryGuess
        disabled={disabled}
        onChange={handleOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        inputClassName={styles.input}
        className={cn(styles.inputContainer, className, {
          [styles.rounded]: rounded,
          [styles.disabled]: disabled,
          [styles.focus]: focus,
          [styles.error]: error,
        })}
      />
    </div>
  );
};
