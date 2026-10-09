import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}

export function ExternalLink({ href, children, className, label }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      {children}
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="ml-0.5 inline size-3 -translate-y-px opacity-60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M5 11 11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
