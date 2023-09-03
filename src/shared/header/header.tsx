import Link from 'next/link';
import { nanoid } from 'nanoid';
import { navLinks } from './data';
import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          {navLinks.map(({ name, href }) => (
            <li key={nanoid()}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);
