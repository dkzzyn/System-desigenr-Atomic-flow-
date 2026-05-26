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
    <article className="group flex h-full flex-col rounded-xl border border-[#EF4444]/20 bg-[#111117] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#EF4444]/50 hover:shadow-[0_20px_50px_-28px_rgba(239,68,68,0.35)] sm:p-6">
      <header className="mb-5 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#EF4444]/25 bg-[#EF4444]/10 transition-colors group-hover:border-[#EF4444]/45 group-hover:bg-[#EF4444]/15">
          <IconAtom size={20} className="shrink-0 text-[#EF4444]" />
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
