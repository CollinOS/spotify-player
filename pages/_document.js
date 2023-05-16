import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="../styles/fonts/GraphikRegular.woff2"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
