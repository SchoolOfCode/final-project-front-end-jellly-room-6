import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <UserProvider>

      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico"></link>
      </Head> 
      <Component {...pageProps} />

    </UserProvider>
  );
}


