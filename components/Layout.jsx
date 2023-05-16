import React from 'react';
import { useRouter } from 'next/router';
import Player from './Player';

function Layout({ children }) {
  const router = useRouter();
  return (
    <main>
      <Player />
    </main>
  );
}

export default Layout;
