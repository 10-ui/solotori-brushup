import {
  labelProps,
  inputComponentProps,
} from '@/app/lib/types';
import { forwardRef } from 'react';

export const Input = forwardRef<
  HTMLInputElement,
  inputComponentProps
>(
  (
    {
      type,
      name,
      id,
      placeholder,
      complete,
      ...inputComponentProps
    },
    ref
  ) => {
    return (
      <input
        {...inputComponentProps}
        type={type}
        name={name}
        className="w-full rounded-sm py-3 px-4 mb-4 text-base text-input"
        id={id}
        placeholder={placeholder}
        ref={ref}
        autoComplete={complete}
      />
    );
  }
);

export function Block({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mb-8">{children}</div>;
}

export function Label(props: labelProps) {
  return (
    <label
      className="w-full text-base mb-3 font-bold"
      htmlFor={props.htmlFor}>
      {props.text}
    </label>
  );
}
