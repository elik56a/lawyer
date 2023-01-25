import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to website!</title>
      </Head>
      <NextUIProvider>
      <main className="app">
        <Component {...pageProps} />
      </main>
      </NextUIProvider>
    </>
  );
}

export default CustomApp;
