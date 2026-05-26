type IconProps = {
  className?: string;
};

const SVG_BASE_PROPS = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Análise estratégica — alvo + roadmap */
export function IconStrategy({ className }: IconProps) {
  return (
    <svg className={className} {...SVG_BASE_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </svg>
  );
}

/** Letramento em IA — livro + cérebro/educação */
export function IconLiteracy({ className }: IconProps) {
  return (
    <svg className={className} {...SVG_BASE_PROPS}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8M8 11h6" />
      <path d="M12 14.5c1.2 0 2.2-.6 2.7-1.5" />
    </svg>
  );
}

/** Consultoria em Gen AI — chip + sparkles */
export function IconGenAI({ className }: IconProps) {
  return (
    <svg className={className} {...SVG_BASE_PROPS}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

/** Agentes e sistemas — bot + rede de nós */
export function IconAgents({ className }: IconProps) {
  return (
    <svg className={className} {...SVG_BASE_PROPS}>
      <rect x="7" y="8" width="10" height="10" rx="2" />
      <path d="M12 2v4M9 6h6" />
      <circle cx="9.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
      <path d="M9.5 16h5" />
      <circle cx="3" cy="12" r="1.5" />
      <circle cx="21" cy="12" r="1.5" />
      <circle cx="12" cy="21" r="1.5" />
      <path d="M4.5 12H7M17 12h2.5M12 18v2.5" />
    </svg>
  );
}
