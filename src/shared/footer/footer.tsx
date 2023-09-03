import getCurrentDate from '@/utils/functions/get-current-date';
import styles from './footer.module.scss';

export const Footer = () => {
  const date = getCurrentDate();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <span className={styles.date}>{date}</span>
      </div>
    </footer>
  );
};
