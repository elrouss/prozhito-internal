import { useSession } from 'next-auth/react';
import { HeadingH1Default } from '@/shared/headings/heading-h1-default/ heading-h1-default';
import ForbiddenError from '@/shared/errors/403';
import styles from './index.module.scss';

const InternalOnlyPage = () => {
  const { data } = useSession();

  return data ? (
    <main>
      <div className={styles.wrapper}>
        <HeadingH1Default label="Эта страница доступна только авторизованным пользователям" />
      </div>
    </main>
  ) : (
    <ForbiddenError />
  );
};

export default InternalOnlyPage;
