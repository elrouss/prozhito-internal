import { HeadingH1Default } from '@/shared/headings/heading-h1-default/ heading-h1-default';
import styles from './index.module.scss';

const PublicPage = () => (
  <main>
    <div className={styles.wrapper}>
      <HeadingH1Default label="Добро пожаловать! Это публичная страница" />
    </div>
  </main>
);

export default PublicPage;
