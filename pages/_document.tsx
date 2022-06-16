import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <meta name='theme-color' content='#fafafa' />
      <body className='bg-white font-sans text-black antialiased  dark:bg-neutral-900 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
