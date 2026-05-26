import { useSiteContent } from "../../hooks/useSiteContent";
import { useInView } from "../../hooks/useInView";
import { useSiteMode } from "../../context/SiteModeContext";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  const { services } = useSiteContent();
  const { mode } = useSiteMode();
  const isMarketing = mode === "marketing";
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [gridRef, gridVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      id="servicos"
      className={`services-section${isMarketing ? " services-section--mkt" : " bg-[#050509]"} py-[clamp(3rem,9vw,7.5rem)]`}
    >
      <div className="container">
        <div
          ref={headerRef}
          className="mb-8 flex flex-col items-center text-center md:mb-12"
        >
          <p
            className={`mb-5 w-full text-center text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-zinc-500 transition-all duration-700 ${
              headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {services.kicker}
          </p>
          <h2
            className={`mb-5 w-full max-w-3xl text-center text-[clamp(1.75rem,3.8vw,2.65rem)] font-semibold leading-tight tracking-tight text-white transition-all duration-700 delay-100 ${
              headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {services.titleBefore}
            <span className="text-gradient">{services.titleEmphasis}</span>
          </h2>
          <p
            className={`mx-auto max-w-[40rem] text-center text-[clamp(1.02rem,1.2vw,1.125rem)] leading-relaxed text-zinc-400 transition-all duration-700 delay-200 ${
              headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {services.lead}
          </p>
        </div>

        <div
          ref={gridRef}
          className={
            isMarketing
              ? "services-mkt-bento"
              : "grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
          }
        >
          {services.items.map((service, index) => (
            <div
              key={service.title}
              className={`${isMarketing ? "services-mkt-bento__item" : ""} transition-all duration-700 ${
                gridVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: gridVisible ? `${index * 80}ms` : "0ms" }}
            >
              <ServiceCard
                company="atomicflow.ai"
                title={service.title}
                description={service.description}
                tags={service.tags}
                href={service.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
