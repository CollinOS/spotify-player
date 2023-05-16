import Head from 'next/head';
import Player from '../components/Player';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sporify Player</title>
        <meta name="description" content="Portfolio site for Collin Osborne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Player />

    </>
  );
}
