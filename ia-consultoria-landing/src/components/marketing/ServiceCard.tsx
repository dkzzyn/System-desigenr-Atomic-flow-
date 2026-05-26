type ServiceCardProps = {
  company?: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

function AtomicFlowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0 text-[#EF4444]"
    >
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(120 12 12)"
      />
      <path
        d="M15 5l2-3M17 5l-2 3M17 5h-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceCard({
  company = "atomicflow.ai",
  title,
  description,
  tags,
  href,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-[#EF4444]/20 bg-[#111117] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#EF4444]/50 hover:shadow-[0_20px_50px_-28px_rgba(239,68,68,0.35)] sm:p-6">
      <header className="mb-5 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#EF4444]/25 bg-[#EF4444]/10 transition-colors group-hover:border-[#EF4444]/45 group-hover:bg-[#EF4444]/15">
          <AtomicFlowIcon />
        </span>
        <span className="text-xs font-semibold tracking-wide text-[#EF4444]/90">{company}</span>
      </header>

      <h3 className="mb-3 text-base font-semibold tracking-tight text-white sm:text-lg">{title}</h3>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">{description}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#EF4444]/25 bg-[#EF4444]/10 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-red-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={href}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-[#EF4444]"
      >
        Saiba mais <span className="text-[#EF4444] transition-transform group-hover:translate-x-1">→</span>
      </a>
    </article>
  );
}
