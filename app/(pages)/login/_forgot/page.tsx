'use client';
import {
  handleChange,
  userResetData,
} from '@/app/lib/types';
import { supabase } from '../../../../utils/supabase';
import { Input, Label } from '@/app/ui/formComonents';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';

export default function Page(props: handleChange) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userResetData>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<userResetData> = async (
    data: userResetData
  ) => {
    console.log(data);
    try {
      const { error: sendEmailError } =
        await supabase.auth.resetPasswordForEmail(
          data.email,
          {
            redirectTo:
              'http://sen-solotrip.vercel.app/passwordreset/',
          }
        );
      if (sendEmailError) {
        throw sendEmailError;
      }
      alert('パスワード設定メールを確認してください');
    } catch (error) {
      alert('エラーが発生しました');
    }
  };
  return (
    <>
      <h3 className="text-4xl font-bold text-left mb-4">
        パスワードリセット
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-sm text-bases mb-8">
          ご登録のメールアドレスを入力してください。
          <br />
          パスワードの再設定をメールでご案内いたします。
        </p>
        <hr className="my-8" />
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
              required: 'メールアドレスを入力してください',
              pattern: {
                value: /[\w\-\._]+@[\w\-\._]+\.[A-Za-z]+/,
                message: `'@'、'.'が必要です`,
              },
            })}
          />
        </div>
        <button
          type="submit"
          className="bg-accent text-center w-full font-bold text-base py-4 px-4 mt-8 rounded-full">
          送信
        </button>
        <Link
          href="#login"
          className="mt-4 text-center underline"
          onClick={props.onClick}>
          ログインへ戻る
        </Link>
      </form>
    </>
  );
}
