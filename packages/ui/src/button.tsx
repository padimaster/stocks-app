"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full cursor-default ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
