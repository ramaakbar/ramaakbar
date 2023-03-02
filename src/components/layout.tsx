import Navbar from "@/components/navbar";
import Bottombar from "@/components/bottombar";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#171717"
        />
      </Head>
      <div className="flex min-h-screen flex-col">
        {/* <Navbar /> */}
        <main className="mt-6 flex-1 px-5 md:mt-12">{children}</main>
        <Bottombar />
      </div>
    </>
  );
}
