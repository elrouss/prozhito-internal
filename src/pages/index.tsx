import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Header } from '@/shared/header/header';
import { HeadingH1Default } from '@/shared/headings/heading-h1-default/ heading-h1-default';
import { Footer } from '@/shared/footer/footer';
import styles from './index.module.scss';

const inter = Inter({ subsets: ['latin'] });

const HomePage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.wrapper}>
        <HeadingH1Default label="Привет!" />
      </div>
    </main>
    <Footer />
  </>
);

export default HomePage;
