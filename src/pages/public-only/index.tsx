import { useSession } from 'next-auth/react';
import { HeadingH1Default } from '@/shared/headings/heading-h1-default/ heading-h1-default';
import ForbiddenError from '@/shared/errors/403';
import styles from './index.module.scss';

const PublicOnlyPage = () => {
  const { data } = useSession();

  return data ? (
    <ForbiddenError />
  ) : (
    <main>
      <div className={styles.wrapper}>
        <HeadingH1Default label="Эта страница доступна только неавторизованным пользователям" />
      </div>
    </main>
  );
};

export default PublicOnlyPage;
