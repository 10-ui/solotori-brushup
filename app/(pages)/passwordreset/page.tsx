'use client';
import { supabase } from '../../../utils/supabase';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Block,
  Input,
  Label,
} from '@/app/ui/formComonents';
import { useForm, SubmitHandler } from 'react-hook-form';
import { passwordResetData } from '@/app/lib/types';

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<passwordResetData>({ mode: 'onChange' });
  const passwordConf = watch('passwordConf', '');

  const onSubmit: SubmitHandler<passwordResetData> = async (
    data: passwordResetData
  ) => {
    try {
      const { error: passwordResetError } =
        await supabase.auth.updateUser({
          password: data.password,
        });
      if (passwordResetError) {
        throw passwordResetError;
      }
      await router.push('/');
      alert('パスワード変更が完了しました');
    } catch (error) {
      alert('エラーが発生しました');
    }
  };

  return (
    <>
      <main className="w-350 mx-auto mt-100 mb-160 text-bases">
        <h1 className="text-4xl font-bold text-left mb-8">
          リセットフォーム
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Block>
            <Label
              htmlFor="passwordConf"
              text="パスワード(確認)"
            />
            {errors.password?.message && (
              <p className="my-1 font-semibold text-xs text-error">
                {errors.password?.message}
              </p>
            )}
            <Input
              type="password"
              id="password"
              placeholder="パスワード(確認)"
              complete="new-password"
              {...register('passwordConf', {
                required: 'パスワードを入力してください',
                minLength: {
                  value: 5,
                  message:
                    'パスワードは5文字以上で入力してください',
                },
              })}
            />
          </Block>
          <div>
            <button
              className="bg-accent w-full font-bold text-base py-3 px-4 rounded-42"
              type="submit">
              パスワード変更
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
