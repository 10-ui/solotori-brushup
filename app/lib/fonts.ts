import { Noto_Sans_JP } from 'next/font/google';
import { Baloo_Bhaijaan_2 } from 'next/font/google';
import { Yusei_Magic } from 'next/font/google';
import { Dela_Gothic_One } from 'next/font/google';

export const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const steps = Baloo_Bhaijaan_2({
  weight: '800',
  subsets: ['latin'],
  display: 'swap',
});
export const ttl = Yusei_Magic({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export const bingo = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
