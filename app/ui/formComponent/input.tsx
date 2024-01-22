import { inputProps } from '@/app/lib/types';
import { forwardRef } from 'react';
import type { FC, Ref, RefObject } from 'react';
const Child = (
  props: inputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <input
      type={props.type}
      // name={props.name}
      className="w-full rounded-sm py-3 px-4 mb-4 text-base text-input"
      id={props.id}
      placeholder={props.placeholder}
      ref={ref}
    />
  );
};
export const Input = forwardRef<
  HTMLInputElement,
  inputProps
>(Child);
