import '@/assets/styles/globals.scss';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
