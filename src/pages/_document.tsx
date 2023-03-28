import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          defer
          data-domain="ramaakbar.xyz"
          src="https://analytics.ramaakbar.xyz/js/script.js"
        ></script>
      </Head>
      <body className="bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
