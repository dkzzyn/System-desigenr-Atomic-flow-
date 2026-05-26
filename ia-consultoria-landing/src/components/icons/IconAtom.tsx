import { useId } from "react";

type IconAtomProps = {
  className?: string;
  size?: number;
  gradient?: boolean;
};

export function IconAtom({ className, size = 24, gradient = false }: IconAtomProps) {
  const rawId = useId();
  const gradId = `atom-grad-${rawId.replace(/:/g, "")}`;
  const paint = gradient ? `url(#${gradId})` : "currentColor";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      {gradient ? (
        <defs>
          <linearGradient id={gradId} x1="18%" y1="8%" x2="82%" y2="92%">
            <stop offset="0%" stopColor="var(--accent-soft)" />
            <stop offset="100%" stopColor="var(--accent-deep)" />
          </linearGradient>
        </defs>
      ) : null}
      <circle cx="16" cy="16" r="2.75" fill={paint} />
      <ellipse
        cx="16"
        cy="16"
        rx="11.5"
        ry="4.25"
        stroke={paint}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="11.5"
        ry="4.25"
        stroke={paint}
        strokeWidth="2"
        strokeLinecap="round"
        transform="rotate(60 16 16)"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="11.5"
        ry="4.25"
        stroke={paint}
        strokeWidth="2"
        strokeLinecap="round"
        transform="rotate(120 16 16)"
      />
    </svg>
  );
}
