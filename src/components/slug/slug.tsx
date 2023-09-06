import { HeadingH1Default } from '@/shared/headings/heading-h1-default/ heading-h1-default';
import styles from './slug.module.scss';

interface ISlugProps {
  category: string;
  page?: string;
}

// eslint-disable-next-line react/require-default-props
export const Slug = ({ category, page }: ISlugProps) => (
  <main>
    <div className={styles.wrapper}>
      <HeadingH1Default
        label={`Категория: ${category}${page ? `, страница: ${page}` : ''}`}
      />
    </div>
  </main>
);
