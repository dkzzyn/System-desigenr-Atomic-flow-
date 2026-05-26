type LoaderAtomBurstProps = {
  exploding: boolean;
};

export function LoaderAtomBurst({ exploding }: LoaderAtomBurstProps) {
  return (
    <div
      className={`page-loader__burst${exploding ? " is-exploding" : ""}`}
      aria-hidden
    >
      <div className="page-loader__luminance page-loader__luminance--outer" />
      <div className="page-loader__luminance" />
      <div className="page-loader__flash" />
      <svg
        className="page-loader__atom-svg"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="page-loader__orbit page-loader__orbit--1">
          <ellipse
            cx="16"
            cy="16"
            rx="11.5"
            ry="4.25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <g className="page-loader__orbit page-loader__orbit--2">
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
        </g>
        <g className="page-loader__orbit page-loader__orbit--3">
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
        </g>
        <circle className="page-loader__nucleus" cx="16" cy="16" r="2.75" fill="currentColor" />
      </svg>
    </div>
  );
}
