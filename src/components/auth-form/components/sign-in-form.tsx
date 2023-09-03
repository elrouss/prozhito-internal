import React, { useEffect } from 'react';
import { AuthForm } from '../auth-form';
import { useFormData } from '@/hooks/useFormData';
import { Input } from '@/shared/input/input';
import { regexEmail, regexPassword } from '@/utils/regex';
import styles from './sign-in-form.module.scss';

export const SignInForm = () => {
  const { data, setData, handleData, isFormValid, setIsFormValid } =
    useFormData();

  useEffect(() => setData({ email: '', password: '' }), []);

  useEffect(() => {
    setIsFormValid(
      regexEmail.test(data.email) && regexPassword.test(data.password),
    );
  }, [data]);

  const onSignIn = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    console.log(data);
  };

  return (
    <AuthForm
      heading="Авторизация"
      buttonLabel="Войти"
      isValid={isFormValid}
      onSubmit={onSignIn}
    >
      <div className={styles.inputs}>
        <Input
          type="email"
          label="Email"
          name="email"
          value={data.email}
          autoComplete="on"
          onChange={handleData}
        />
        <Input
          type="password"
          name="password"
          value={data.password}
          label="Пароль"
          onChange={handleData}
        />
      </div>
    </AuthForm>
  );
};
