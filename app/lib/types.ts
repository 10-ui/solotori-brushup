import { ComponentPropsWithRef } from 'react';

export type labelProps = {
  htmlFor: string;
  text: string;
};

export type handbookUserData = {
  sei: string;
  mei: string;
  email: string;
  postcode: number;
  pref: string;
  city: string;
  town: string;
  buildingName: string;
  submit: any;
};
export type handleChange = {
  onClick: () => void;
};
export type passwordResetData = {
  password: string;
  passwordConf: string;
};

export type userLoginData = {
  email: string;
  password: string;
};
export type userResetData = {
  email: string;
};

export type signUpUserData = {
  nickname: string;
  email: string;
  password: string;
  passwordConf: string;
};

type inputProps = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  complete: string;
};

export type inputComponentProps =
  ComponentPropsWithRef<'input'> & inputProps;

export const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());
