import { IconAtom } from "../icons/IconAtom";
import { OpenLeadFormLink } from "../lead/OpenLeadFormLink";

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
  const isLeadLink = href === "#contato";

  return (
    <article className="service-card group flex h-full flex-col rounded-lg border border-white/[0.06] bg-[#111117] p-4 sm:p-[1.15rem]">
      <header className="mb-3 flex items-center gap-2">
        <span className="service-card__icon-wrap flex h-8 w-8 items-center justify-center rounded-md">
          <IconAtom size={18} className="service-card__icon shrink-0" />
        </span>
        <span className="service-card__brand text-[0.6875rem] font-semibold uppercase tracking-wide">
          {company}
        </span>
      </header>

      <h3 className="mb-2 text-base font-semibold tracking-tight text-white">{title}</h3>

      <p className="mb-3 flex-1 text-sm leading-relaxed text-zinc-400">{description}</p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="service-card__tag rounded-full px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      {isLeadLink ? (
        <OpenLeadFormLink className="service-card__link mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white">
          Saiba mais <span className="service-card__arrow transition-transform group-hover:translate-x-1">→</span>
        </OpenLeadFormLink>
      ) : (
        <a href={href} className="service-card__link mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white">
          Saiba mais <span className="service-card__arrow transition-transform group-hover:translate-x-1">→</span>
        </a>
      )}
    </article>
  );
}
