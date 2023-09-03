import React from 'react';
import { nanoid } from 'nanoid';
import styles from './input.module.scss';

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  type?: 'email' | 'password' | 'text';
  name: string;
  value: string;
  autoComplete?: 'on' | 'off';
}

export const Input = ({
  label,
  type = 'text',
  name,
  value,
  autoComplete = 'off',
  onChange,
}: IInputProps) => {
  const id = nanoid();

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        name={name}
        value={value || ''}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </div>
  );
};
