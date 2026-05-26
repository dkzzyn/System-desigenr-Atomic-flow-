import { type ComponentType } from "react";
import { LINK_CONTACT } from "../../constants/links";
import { type DifferentialItem } from "../../data/siteContent";
import { useSiteContent } from "../../hooks/useSiteContent";
import { useInView } from "../../hooks/useInView";
import { useSiteMode } from "../../context/SiteModeContext";
import { IconShieldCheck, IconTrendUp, IconUsers } from "../icons";

const DIFF_ICONS: Record<DifferentialItem["icon"], ComponentType<{ className?: string }>> = {
  shield: IconShieldCheck,
  trend: IconTrendUp,
  users: IconUsers,
};

export function Differentials() {
  const { differentials } = useSiteContent();
  const { mode } = useSiteMode();
  const isMarketing = mode === "marketing";
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [gridRef, gridVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [ctaRef, ctaVisible] = useInView<HTMLDivElement>();

  return (
    <section
      className={`section container differentials-section${
        isMarketing ? " differentials-section--mkt mkt-glow-section" : " differentials-section--ia ia-glow-section"
      }`}
    >
      <div
        ref={headerRef}
        className={`differentials-section__header reveal-stagger${headerVisible ? " is-visible" : ""}`}
      >
        <p className="kicker reveal reveal--up">{differentials.kicker}</p>
        <h2 className="h2 reveal reveal--up">
          {differentials.titleBefore}
          <em>{differentials.titleEmphasis}</em>
          {differentials.titleAfter}
        </h2>
        <p className="lead reveal reveal--up">{differentials.lead}</p>
      </div>
      <div
        ref={gridRef}
        className={`differentials-section__grid reveal-stagger${gridVisible ? " is-visible" : ""}`}
      >
        {differentials.items.map((d) => {
          const Icon = DIFF_ICONS[d.icon];
          return (
            <div key={d.title} className="diff reveal reveal--up">
              <span className="diff__icon" aria-hidden>
                <Icon />
              </span>
              <h4>{d.title}</h4>
              <p>{d.text}</p>
            </div>
          );
        })}
      </div>
      <div
        ref={ctaRef}
        className={`differentials-section__cta reveal-stagger${ctaVisible ? " is-visible" : ""}`}
      >
        <p className="reveal reveal--up">
          <a className="link-cta" href={LINK_CONTACT}>
            {differentials.cta} <span className="arrow">→</span>
          </a>
        </p>
        <p className="micro reveal reveal--up">
          Agende um <strong>{differentials.microStrong}</strong> para alinhar expectativas.
        </p>
      </div>
    </section>
  );
}
