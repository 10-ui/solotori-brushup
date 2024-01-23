import type { Metadata } from 'next';
import { notoSans } from '@/app/lib/fonts';
import Favicon from '@/public/images/favicon.ico';
import '@/app/styles/globals.scss';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';

export const metadata: Metadata = {
  title: 'ソロトリ利用者増加促進サイト',
  description: 'ソロトリの利用者増加に向けたサイトです。',
  icons: [
    { rel: 'icon', url: Favicon.src, sizes: '16x16' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="w-390 bg-main box-content pb-160 pt-25 ">
        <div className="w-350 mx-5">{children}</div>
      </main>
    </>
  );
}
