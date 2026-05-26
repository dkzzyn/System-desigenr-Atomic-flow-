import { IconAtom } from "../icons/IconAtom";

type ServiceCardProps = {
  company?: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export function ServiceCard({
  company = "atomicflow.ai",
  title,
  description,
  tags,
  href,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-white/[0.06] bg-[#111117] p-4 transition-all duration-300 hover:border-[#EF4444]/20 sm:p-[1.15rem]">
      <header className="mb-3 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#EF4444]/10 transition-colors group-hover:bg-[#EF4444]/14">
          <IconAtom size={18} className="shrink-0 text-[#EF4444]" />
        </span>
        <span className="text-[0.6875rem] font-semibold uppercase tracking-wide text-[#EF4444]/85">
          {company}
        </span>
      </header>

      <h3 className="mb-2 text-base font-semibold tracking-tight text-white">{title}</h3>

      <p className="mb-3 flex-1 text-sm leading-relaxed text-zinc-400">{description}</p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#EF4444]/8 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-red-300/90"
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
