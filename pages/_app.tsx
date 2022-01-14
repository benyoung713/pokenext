import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>The Poke-Next app</title>
        <meta name="description" content="App to search pokemons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>);
}

export default MyApp
