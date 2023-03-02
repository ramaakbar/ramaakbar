import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#171717"
        />
      </Head>
      <body className="bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
