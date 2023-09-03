const getCurrentDate = () =>
  new Date().toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export default getCurrentDate;
