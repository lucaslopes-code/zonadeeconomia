"use client";

import type { ReactNode } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function JoinGroupButton({ href, className, children }: Props) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("trackCustom", "EntrouNoGrupo");
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
