import { labelProps } from '@/app/lib/types';
export default function Input(props: labelProps) {
  return (
    <label
      className="w-full text-base mb-3 font-bold"
      htmlFor={props.htmlFor}>
      {props.text}
    </label>
  );
}
