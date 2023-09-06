import Link from 'next/link';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
import routes from '@/utils/routes';
import styles from './list-routes.module.scss';

interface IListRoutesProps {
  extraClass: string;
  links: { name: string; link: string }[];
}

export const ListRoutes = ({ extraClass, links }: IListRoutesProps) => (
  <nav className={clsx(styles.nav, extraClass)}>
    <ul className={styles.list}>
      {links.map(({ name, link }) => (
        <li key={nanoid()}>
          <Link href={`${routes.base}${link}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
