import React from 'react';
import { HeadingH1Default } from '@/shared/headings/heading-h1-default/ heading-h1-default';
import { DefaultButton } from '@/shared/buttons/default-btn/default-btn';
import styles from './auth-form.module.scss';

interface IAuthFormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactElement;
  heading: string;
  buttonLabel: string;
  isValid: boolean;
  isLoading?: boolean;
}

export const AuthForm = ({
  children,
  heading,
  buttonLabel,
  isLoading = false,
  isValid,
  onSubmit,
}: IAuthFormProps) => (
  <div className={styles.wrapper}>
    <HeadingH1Default label={heading} />
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
      <DefaultButton
        type="submit"
        label={buttonLabel}
        disabled={!isValid}
        isLoading={isLoading}
      />
    </form>
  </div>
);
