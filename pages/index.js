import { useEffect } from 'react';
import Head from 'next/head';

import Intro from './Intro';


export default function Home() {
  useEffect(() => {
    if (window.console) {

      console.log(
      );
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Happy Puppy</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}


        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Intro />
    </div>
  );
}
