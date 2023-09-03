/* eslint-disable react/button-has-type */
import React from 'react';
import clsx from 'clsx';
import styles from './default-btn.module.scss';

interface IDefaultButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
}

export const DefaultButton = ({
  label,
  type = 'button',
  disabled = false,
  isLoading = false,
  onClick,
}: IDefaultButtonProps) => (
  <button
    className={clsx(styles.button, { [styles.load]: isLoading })}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);
