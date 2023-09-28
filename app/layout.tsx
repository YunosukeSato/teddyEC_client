"use client"

import './globals.css';
import { Inter } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import NavBar from './(landingpage)/components/NavBar';
import Footer from './(landingpage)/components/Footer';
import { metadata } from './metadata';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from './store/store';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <Provider store={store}>
          <div className="flex justify-center items-center">
            <div className="w-full md:max-w-[1440px] min-h-screen m-0 p-0">
              <NavBar />
              {children}
              <Footer />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
