type IconAtomProps = {
  className?: string;
  size?: number;
};

export function IconAtom({ className, size = 24 }: IconAtomProps) {
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
      <circle cx="16" cy="16" r="2.75" fill="currentColor" />
      <ellipse
        cx="16"
        cy="16"
        rx="11.5"
        ry="4.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="11.5"
        ry="4.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        transform="rotate(60 16 16)"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="11.5"
        ry="4.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        transform="rotate(120 16 16)"
      />
    </svg>
  );
}
