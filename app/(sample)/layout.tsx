// import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Sidebar from './components/Sidebar';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'teddies VS monsters',
  description: 'Super Great Board Game',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex w-11/12 text-center justify-center">{children}</div>
    </div>
  );
}
