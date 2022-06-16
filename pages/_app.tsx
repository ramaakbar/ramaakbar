import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='Ramaakbar'
        description='Rama akbar personal website portfolio'
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Rama, akbar,ramaakbar, akbar ramadhan, personal, website, portfolio',
          },
        ]}
        twitter={{
          handle: '@Ramaakbar',
          site: '@Ramaakbar',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
