'use client';

import { signIn } from 'next-auth/react';
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

  // eslint-disable-next-line consistent-return
  const onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (!res!.ok) {
        throw new Error(`Упс! Произошла ошибка ${res!.status} :(`);
      }

      return res;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthForm
      heading="Авторизация"
      buttonLabel="Войти"
      isValid={isFormValid}
      onSubmit={onSubmit}
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
