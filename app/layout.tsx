import type { Metadata } from 'next';
import { notoSans } from '@/app/lib/fonts';
import Favicon from '@/public/images/favicon.ico';
import '@/styles/globals.scss';
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
    <html lang="ja">
      <body
        className={`${notoSans.className} bg-desktop text-white grid justify-center`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
