import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect } from 'react';
import useTheme from '../src/hooks/useTheme';

export default function Document() {
  return (
    <Html>
      <Head />
      <meta name='theme-color' content='#fafafa' />
      <body className='  bg-white font-sans text-black antialiased transition-all duration-500 dark:bg-neutral-900 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
