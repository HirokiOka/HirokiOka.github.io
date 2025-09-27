import Head from 'next/head';
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "./Header";

const notoSansJapanese = Noto_Sans_JP({
  weight: '400',
  preload: false,
});

export const name = 'Hiroki Oka';
export const siteTitle = 'HirokiOka Web';

function Layout({ children, home }) {
  return (
    <main className={notoSansJapanese.className}>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="This is Hiroki Oka's website."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
    <Header />

      <div className='py-12'>{children}</div>
        <footer className='text-center text-xl w-full py-2'>Copyright @ Hiroki Oka All Rights Reserved</footer> 
    </main>
  )
}

export default Layout;
