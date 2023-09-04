import { HeadingH1Default } from '@/shared/headings/heading-h1-default/ heading-h1-default';
import styles from './index.module.scss';

const ForbiddenError = () => (
  <main>
    <div className={styles.wrapper}>
      <HeadingH1Default label="Ошибка 403" />
    </div>
  </main>
);

export default ForbiddenError;
