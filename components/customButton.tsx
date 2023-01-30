import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string;
}

export default function CustomButton(props: Props) {
  const { customClass, children } = props;
  return (
    <button
      {...props}
      className={
        "px-5 py-2 bg-green-600 text-white rounded-lg font-[600px] mt-5 " +
        customClass
      }
    >
      {children}
    </button>
  );
}
