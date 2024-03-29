import type { Metadata } from 'next';
import Favicon from '@/public/images/favicon.ico';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'ソロトリ利用者増加促進サイト',
  description: 'ソロトリの利用者増加に向けたサイトです。',
  icons: [
    { rel: 'icon', url: Favicon.src, sizes: '16x16' },
  ],
};

export default function PagesLayout({
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
