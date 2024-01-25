'use client';
import { supabase } from '../../../utils/supabase';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input, Label } from '@/app/ui/formComonents';
import { useForm, SubmitHandler } from 'react-hook-form';
import { userLoginData } from '@/app/lib/types';
import Forgot from './forgot/page';

export default function Login() {
  const router = useRouter();
  const [reset, setReset] = useState(false);
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
      await router.push('/bingo');
    }
  };

  // HeaderコンポーネントがレンダリングされたときにgetCurrentUser関数が実行される
  useEffect(() => {
    getCurrentUser();
  }, []);

  function toggleReset() {
    if (reset) {
      setReset(false);
    } else {
      setReset(true);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userLoginData>({ mode: 'onChange' });

  const onLogin: SubmitHandler<userLoginData> = async (
    data: userLoginData
  ) => {
    try {
      const { error: signInError } =
        await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });
      if (signInError) {
        throw signInError;
      }
      await router.push('/');
    } catch {
      alert('エラーが発生しました');
    }
  };

  return (
    <>
      <section
        className={`${reset ? 'hidden' : ''}`}
        id="login">
        <h1 className="text-4xl font-bold text-left mb-8">
          ログイン
        </h1>
        <form
          className="mb-8"
          onSubmit={handleSubmit(onLogin)}>
          <div>
            <Label
              htmlFor="email"
              text="メールアドレス"></Label>
            {errors.email?.message && (
              <p className="my-1 font-semibold text-xs text-error">
                {errors.email?.message}
              </p>
            )}
            <Input
              type="email"
              id="email"
              placeholder="メールアドレス"
              complete="email"
              {...register('email', {
                required:
                  'メールアドレスを入力してください',
                pattern: {
                  value: /[\w\-\._]+@[\w\-\._]+\.[A-Za-z]+/,
                  message: `'@'、'.'が必要です`,
                },
              })}
            />
          </div>
          <div>
            <Label htmlFor="password" text="パスワード" />
            {errors.password?.message && (
              <p className="my-1 font-semibold text-xs text-error">
                {errors.password?.message}
              </p>
            )}
            <Input
              type="password"
              id="password"
              placeholder="パスワード"
              complete="new-password"
              {...register('password', {
                required: 'パスワードを入力してください',
                minLength: {
                  value: 5,
                  message:
                    'パスワードは5文字以上で入力してください',
                },
              })}
            />
          </div>
          <Link
            href="#forgot"
            className="mb-8 underline"
            onClick={toggleReset}>
            パスワードをお忘れですか？
          </Link>
          <button
            className="border-bases border-4 w-full font-bold text-base py-3 px-4 rounded-full flex justify-end items-center"
            type="submit">
            ログインする
            <img
              src="./images/Arrow.svg"
              alt="矢印"
              className="pl-[79px]"
            />
          </button>
        </form>
      </section>
      <hr className={`my-8 ${reset ? 'hidden' : ''}`} />
      <section
        className={`${reset ? 'hidden' : ''}`}
        id="signup">
        <h2 className="text-4xl font-bold text-left mb-4">
          新規登録
        </h2>
        <p className="text-sm text-bases mb-8">
          会員登録で「旅ビンゴ」を利用できます。
          <br />
          旅の記録や思い出をビンゴにして豪華景品をGET！！
        </p>
        <Link
          href="/signup"
          className="bg-accent text-center w-full font-bold text-base py-3 px-4 rounded-full flex justify-end items-center">
          新規会員登録をする
          <img
            src="./images/Arrow.svg"
            alt="矢印"
            className="pl-[59px]"
          />
        </Link>
      </section>

      <section
        className={`mt-100 mb-160 ${reset ? '' : 'hidden'}`}
        id="forgot">
        <Forgot onClick={toggleReset}/>
      </section>
    </>
  );
}
