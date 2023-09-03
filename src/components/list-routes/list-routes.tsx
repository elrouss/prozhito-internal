import Link from 'next/link';
import clsx from 'clsx';
import routes from '@/utils/routes';
import styles from './list-routes.module.scss';

interface IListRoutesProps {
  extraClass: string;
}

export const ListRoutes = ({ extraClass }: IListRoutesProps) => (
  <nav className={clsx(styles.nav, extraClass)}>
    <ul className={styles.list}>
      <li>
        <Link href={`${routes.base}${routes.endpoints.public}`}>public</Link>
      </li>
      <li>
        <Link href={`${routes.base}${routes.endpoints.publicOnly}`}>
          public-only
        </Link>
      </li>
      <li>
        <Link href={`${routes.base}${routes.endpoints.internalOnly}`}>
          internal-only
        </Link>
      </li>
    </ul>
  </nav>
);
