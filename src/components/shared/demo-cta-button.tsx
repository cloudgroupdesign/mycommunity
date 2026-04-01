"use client";

import { useDemoModal } from "./modal-context";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function DemoCTAButton({ children, ...props }: Props) {
  const { open } = useDemoModal();
  return (
    <button {...props} onClick={open}>
      {children}
    </button>
  );
}
