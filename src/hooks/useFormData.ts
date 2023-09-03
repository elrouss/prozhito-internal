import React, { useState } from 'react';

export const useFormData = () => {
  const [data, setData] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleData = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value,
    });
  };

  return { data, setData, handleData, isFormValid, setIsFormValid };
};
