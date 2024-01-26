'use client';
import { supabase } from '../../../utils/supabase';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { bingo } from '@/app/lib/fonts';

export default function Page() {
  const router = useRouter();
  const [currentUser, setcurrentUser] = useState('');

  // 現在ログインしているユーザーを取得する処理
  const getCurrentUser = async () => {
    const { data } = await supabase.auth.getSession();
    console.log(data); // デバッグ：セッションデータをログに出力

    if (data && data.session !== null) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user); // デバッグ：ユーザーデータをログに出力

      if (user) {
        setcurrentUser(user.email || '');
      }
    }
  };

  // HeaderコンポーネントがレンダリングされたときにgetCurrentUser関数が実行される
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <>
      <section>
        <h2 className="text-4xl font-bold">旅ビンゴ</h2>
        <hr className="my-8" />
        <p className="text-base">
          旅でやりたいことや今までの旅でできたこと！
          <br />
          思い出を書き出して、
          <br />
          新しい体験に向けてビンゴしませんか？
        </p>
        <hr className="my-8" />
        <div className="w-350 px-[50px] relative">
          <div
            className={`grid items-center ${
              currentUser ? 'hidden' : ''
            } w-350 h-[363px] bg-zabuton absolute -top-8 left-0`}>
            <div>
              <p className="mx-auto text-center">
                旅ビンゴの利用には
                <br />
                ログインが必要です。
              </p>
              <Link
                href="/login"
                className="w-[175px] bg-accent block px-4 my-16 py-3 mx-auto text-center rounded">
                ログイン
              </Link>
              <p className="block text-center">
                まだ登録をされていませんか？
                <Link
                  href="/signup"
                  className="inline underline">
                  新規登録
                </Link>
              </p>
            </div>
          </div>
          <p
            className={`${bingo.className} text-2xl w-250 text-center py-2 bg-bh tracking-widest`}>
            ★ BINGO! ★
          </p>
          <div className="card grid bg-bb h-250 w-250 items-center justify-items-center">
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
          </div>
        </div>
        <hr className="my-8" />
        <div className={`${currentUser ? '' : 'hidden'}`}>
          <div className="flex w-350 items-center justify-around">
            <p className="text-base font-bold">
              できたことリスト
            </p>
            <button className="text-base font-bold py-[6px] px-2 bg-accent rounded mb-4">
              追加
            </button>
          </div>
          <form className="inp w-350">
            <input
              type="text"
              name="task1"
              id="task1"
              className="w-350 mb-2 px-2 py-[6px] rounded-sm text-base text-input"
            />
            <input
              type="text"
              name="task2"
              id="task2"
              className="w-350 mb-2 px-2 py-[6px] rounded-sm text-base text-input"
            />
            <input
              type="text"
              name="task3"
              id="task3"
              className="w-350 mb-2 px-2 py-[6px] rounded-sm text-base text-input"
            />
            <input
              type="text"
              name="task4"
              id="task4"
              className="w-350 mb-8 px-2 py-[6px] rounded-sm text-base text-input"
            />
            <button
              type="submit"
              className="block w-350 bg-accent px-4 py-3 rounded-full">
              ビンゴを作成する！
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
