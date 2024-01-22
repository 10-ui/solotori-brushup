'use client';
import useSWR from 'swr';
import { useState, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { handbookUserData } from '@/app/lib/types';
import {
  Input,
  Block,
  Label,
} from '@/app/ui/formComonents';
import Link from 'next/link';
import clsx from 'clsx';

export default function Page() {
  const [zipcode, setZipcode] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isChecked, setIsChecked] =
    useState<boolean>(false);
  const fetcher = (url: string | URL | Request) =>
    fetch(url).then((res) => res.json());
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<handbookUserData>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<handbookUserData> = (
    data: handbookUserData
  ) => console.log(data);
  const { data, error, isLoading } = useSWR(
    zipcode
      ? `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`
      : null,
    fetcher
  );
  const setCode = (e: ChangeEvent<HTMLInputElement>) => {
    setZipcode(e.target.value);
    setErrorMsg('');
  };
  const handleCheck = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setIsChecked(e.target.checked);
  };
  const searchAddress = () => {
    if (data?.results === null) {
      if (data?.message) {
        setErrorMsg(`${data.message}`);
      } else setErrorMsg('存在しないか、値が不正です。');
    } else if (data && data.results) {
      setErrorMsg('');
      setValue('pref', data.results[0].address1);
      setValue('city', data.results[0].address2);
      setValue('town', data.results[0].address3);
    }
    console.log(data);
  };
  return (
    <>
      <h1 className="text-4xl font-bold text-left mb-2">
        旅のハンドブック
      </h1>
      <p className="text-base font-bold">依頼フォーム</p>
      <hr className="my-8" />
      <p className="text-sm">
        旅先のお困りごとを解決できちゃう！？
        <br />
        ひとり旅の先輩方が作成した
        <br />
        旅のハンドブックをお配りしております。
        <br />
        費用はかかりませんのでお気軽にお申し込みください。
      </p>
      <hr className="my-8" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Block>
          <Label htmlFor="sei" text="氏名" />
          {errors.sei?.message && (
            <p className="my-1 font-semibold text-xs text-error">
              {errors.sei?.message}
            </p>
          )}
          <Input
            type="text"
            id="sei"
            placeholder="姓"
            complete="family-name"
            {...register('sei', {
              required: '姓を入力してください',
            })}
          />
          {errors.mei?.message && (
            <p className="my-1 font-semibold text-xs text-error">
              {errors.mei?.message}
            </p>
          )}
          <Input
            type="text"
            id="mei"
            placeholder="名"
            complete="given-name"
            {...register('mei', {
              required: '名を入力してください',
            })}
          />
        </Block>
        <Block>
          <Label htmlFor="email" text="メールアドレス" />
          {errors.email?.message && (
            <p className="my-1 font-semibold text-xs text-error">
              {errors.email?.message}
            </p>
          )}
          <Input
            type="text"
            id="email"
            placeholder="contact@solotori.jp"
            complete="email"
            {...register('email', {
              required: true,
              pattern: {
                value: /[\w\-\._]+@[\w\-\._]+\.[A-Za-z]+/,
                message: `'@'、'.'が必要です`,
              },
            })}
          />
        </Block>
        <Block>
          <Label htmlFor="postcode" text="ご住所" />
          <div className="mb-3">
            {errors.postcode?.message && (
              <p className="my-1 font-semibold text-xs text-error">
                {errors.postcode?.message}
              </p>
            )}
            {errorMsg && (
              <p className="my-1 font-semibold text-xs text-error">
                {errorMsg}
              </p>
            )}
            <input
              type="text"
              className="float-left w-30 rounded-sm py-3 px-4 text-base text-input"
              id="postcode"
              placeholder="1234567"
              autoComplete="postal-code"
              {...register('postcode', {
                required: true,
                pattern: {
                  value: /^\d{7}$/,
                  message:
                    '郵便番号をハイフン無しの7ケタで入力してください',
                },
              })}
              onChange={setCode}
            />
            <button
              className="border-bases h-12 box-border border w-50 text-base ml-3 py-3 px-4 rounded-full"
              onClick={searchAddress}
              type="button">
              郵便番号から自動入力
            </button>
          </div>
          {errors.pref?.message && (
            <p className="my-1 font-semibold text-xs text-error">
              {errors.pref?.message}
            </p>
          )}
          <Input
            type="text"
            id="pref"
            placeholder="都道府県"
            complete="address-level1"
            {...register('pref', {
              required: '都道府県名を入力してください',
            })}
          />
          {errors.city?.message && (
            <p className="my-1 font-semibold text-xs text-error">
              {errors.city?.message}
            </p>
          )}
          <Input
            type="text"
            id="city"
            placeholder="市区町村"
            complete="address-level2"
            {...register('city', {
              required: '市区町村名を入力してください',
            })}
          />
          {errors.town?.message && (
            <p className="my-1 font-semibold text-xs text-error">
              {errors.town?.message}
            </p>
          )}
          <Input
            type="text"
            id="town"
            placeholder="町名・番地"
            complete="address-level3"
            {...register('town', {
              required: '町名・番地を入力してください',
            })}
          />
          {errors.buildingName?.message && (
            <p className="my-1 font-semibold text-xs text-error">
              {errors.buildingName?.message}
            </p>
          )}
          <Input
            type="text"
            id="buildingName"
            placeholder="建物名・部屋番号(戸建て)"
            complete="address-level3"
            {...register('buildingName', {
              required:
                '建物名、もしくは「戸建て」と入力してください',
            })}
          />
        </Block>
        <hr className="my-8" />
        <div className="flex justify-center items-center">
          <input
            className="bg-transparent"
            type="checkbox"
            name="conf"
            id="conf"
            checked={isChecked}
            onChange={handleCheck}
          />
          <p>
            <Link
              href="/policy"
              className="ml-3 inline underline">
              プライバシーポリシー
            </Link>
            に同意します。
          </p>
        </div>
        <button
          type="submit"
          className={`${clsx(
            !isChecked ? 'bg-accent/50' : 'bg-accent'
          )} text-center w-full font-bold text-base py-4 px-4 mt-8 rounded-full`}
          disabled={!isChecked}>
          申し込みを確定する
        </button>
      </form>
    </>
  );
}
