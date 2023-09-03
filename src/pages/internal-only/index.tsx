import { HeadingH1Default } from '@/shared/headings/heading-h1-default/ heading-h1-default';
import styles from './index.module.scss';

const InternalOnlyPage = () => (
  <main>
    <div className={styles.wrapper}>
      <HeadingH1Default label="Эта страница доступна только авторизованным пользователям" />
    </div>
  </main>
);

export default InternalOnlyPage;
