'use client';
import Image from 'next/image';
import Logo from '@/app/ui/logo';
import Clogo from '@/public/images/solotori.svg';
import Ilogo from '@/public/images/Instagram.svg';
import Alogo from '@/public/images/account.svg';
import Link from 'next/link';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let nowPos = 0;
  const toggleVisibility = () => {
    window.scrollY > nowPos
      ? setIsVisible(true)
      : setIsVisible(false);
    nowPos = window.scrollY;
  };

  const Logout = async () => {
    toggleMenu();
    try {
      const { error: logoutError } =
        await supabase.auth.signOut();
      if (logoutError) {
        throw logoutError;
      }
      await router.push('/');
    } catch {
      alert('エラーが発生しました');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () =>
      window.removeEventListener(
        'scroll',
        toggleVisibility
      );
  }, []);
  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }
  return (
    <>
      <header>
        <div
          className={clsx(
            'fades flex z-20 fixed top-0 left-0 px-6 items-center justify-between h-16 w-390 bg-bases border-b border-input',
            isVisible && 'hide'
          )}>
          <h1>
            <Link href="/">
              <Logo />
            </Link>
          </h1>
          <div className="hbg-menu" onClick={toggleMenu}>
            <div
              className={clsx(
                'menu relative w-6 h-0.5 rounded-sm  before:absolute before:w-6 before:h-0.5 before:bg-input before:rounded-sm after:absolute after:w-6 after:h-0.5 after:bg-input after:rounded-sm',
                {
                  'bg-input before:-top-2 after:top-2':
                    !isMenuOpen,
                },
                {
                  'bg-transparent before:top-0 before:rotate-45 after:top-0 after:-rotate-45':
                    isMenuOpen,
                }
              )}></div>
          </div>
        </div>
        <nav
          className={clsx(
            'fixed z-10 w-390 h-screen bg-bases transition-all ease-in duration-300 top-0 pt-20 px-6',
            { '-right-full': !isMenuOpen },
            { 'right-0': isMenuOpen }
          )}>
          <ul className="flex">
            <li className="mr-1">
              <Link href="https://www.instagram.com/solotori_official/">
                <Image
                  src={Ilogo}
                  alt="ソロトリインスタ"></Image>
              </Link>
            </li>
            <li className="mr-1">
              <Link href="https://solotori.jp/">
                <Image src={Clogo} alt="ソロトリHP"></Image>
              </Link>
            </li>
            <li>
              <Link href="/login" onClick={toggleMenu}>
                <Image
                  src={Alogo}
                  alt="loginフォーム"></Image>
              </Link>
            </li>
          </ul>
          <ul className="mt-48 text-center">
            <li
              className="py-2 rounded-sm border-y-2 text-xl font-bold text-main"
              onClick={toggleMenu}>
              <Link href="/">TOP</Link>
            </li>
            <li
              className="py-2 rounded-sm border-b-2 text-xl font-bold text-main"
              onClick={toggleMenu}>
              <Link href="/tripmind">旅マインド</Link>
            </li>
            <li
              className="py-2 rounded-sm border-b-2 text-xl font-bold text-main"
              onClick={toggleMenu}>
              <Link href="/bingo">旅ビンゴ</Link>
            </li>
            <li
              className="py-2 rounded-sm border-b-2 text-xl font-bold text-main"
              onClick={toggleMenu}>
              <Link href="/handbook">旅のハンドブック</Link>
            </li>
            <li
              className={`py-2 rounded-sm border-b-2 text-xl font-bold text-main`}
              onClick={Logout}>
              <Link href="/handbook">ログアウト</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
