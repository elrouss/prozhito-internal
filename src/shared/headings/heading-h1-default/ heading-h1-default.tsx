import styles from './heading-h1-default.module.scss';

export const HeadingH1Default = ({ label }: { label: string }) => (
  <h1 className={styles.heading}>{label}</h1>
);
