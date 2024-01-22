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

type inputProps = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  complete: string;
};

export type inputComponentProps =
  ComponentPropsWithRef<'input'> & inputProps;
