'use client';
import { supabase } from '@/utils/supabase';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Block,
  Label,
  Input,
} from '@/app/ui/formComonents';
import { signUpUserData } from '@/app/lib/types';

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<signUpUserData>({ mode: 'onChange' });
  const password = watch('password');

  const onSubmit: SubmitHandler<signUpUserData> = async (
    data: signUpUserData
  ) => {
    console.log(data);


    try {
      const { error: signUpError } =
        await supabase.auth.signUp({
          email: data.email,
          password: data.password,
        });
      if (signUpError) {
        throw signUpError;
      }
      alert('登録完了メールを確認してください。');
    } catch (error) {
      alert('An error occurred');
    }
  };

  // const onSignUp = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const { error: signUpError } =
  //       await supabase.auth.signUp({
  //         email: email,
  //         password: password,
  //       });
  //     if (signUpError) {
  //       throw signUpError;
  //     }
  //     alert('登録完了メールを確認してください。');
  //   } catch (error) {
  //     alert('An error occurred');
  //   }
  // };

  return (
    <>
      <h1 className="text-4xl font-bold text-left mb-8">
        新規登録
      </h1>
      <form
        className="w-full"
        onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="nickname" text="ニックネーム" />
          {errors.nickname?.message && (
            <p className="my-1 font-semibold text-xs text-error">
              {errors.nickname?.message}
            </p>
          )}
          <Input
            type="text"
            id="nickname"
            placeholder="ニックネーム"
            complete="nickname"
            {...register('nickname', {
              required: true,
              minLength: {
                value: 2,
                message:
                  'ニックネームは2文字以上で入力してください',
              },
              maxLength: {
                value: 15,
                message:
                  'ニックネームは15文字以下で入力してください',
              },
            })}
          />
        </div>
        <div>
          <Label htmlFor="email" text="メールアドレス" />
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
              required: true,
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
            placeholder="パスワード(5文字以上)"
            complete="new-password"
            {...register('password', {
              required: true,
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
            text="パスワード(再入力)"
          />
          {errors.passwordConf?.message && (
            <p className="my-1 font-semibold text-xs text-error">
              {errors.passwordConf?.message}
            </p>
          )}
          <Input
            type="password"
            id="passwordConf"
            placeholder="パスワード(再入力)"
            complete="new-password"
            {...register('passwordConf', {
              required: true,
              minLength: {
                value: 5,
                message:
                  'パスワードは5文字以上で入力してください',
              },
              validate: (value) =>
                value === password ||
                'パスワードが一致しません',
            })}
          />
        </Block>
        <div>
          <button
            className="bg-accent w-full font-bold text-base py-3 px-4 rounded-full"
            type="submit">
            新規登録する
          </button>
        </div>
      </form>
    </>
  );
}
