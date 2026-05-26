import { LINK_CONTACT } from "../../constants/links";
import { useSiteContent } from "../../hooks/useSiteContent";
import { useInView } from "../../hooks/useInView";
import { useSiteMode } from "../../context/SiteModeContext";

export function MethodPillars() {
  const { method } = useSiteContent();
  const { mode } = useSiteMode();
  const isMarketing = mode === "marketing";
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [pillarsRef, pillarsVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [ctaRef, ctaVisible] = useInView<HTMLDivElement>();

  return (
    <section
      id="metodo"
      className={`section container method-pillars-section method-pillars-section--mkt-timeline${
        isMarketing
          ? " mkt-glow-section mkt-section-grid"
          : " method-pillars-section--ia ia-glow-section ia-section-grid--visible"
      }`}
    >
      <div
        ref={headerRef}
        className={`method-pillars-section__header reveal-stagger${headerVisible ? " is-visible" : ""}`}
      >
        <p className="kicker reveal reveal--from-left">{method.kicker}</p>
        <h2 className="h2 reveal reveal--from-left">
          {method.titleBefore}
          <em>{method.titleEmphasis}</em>
          {method.titleAfter}
        </h2>
        <p className="lead reveal reveal--from-left">{method.lead}</p>
      </div>

      <div
        ref={pillarsRef}
        className={`method-pillars-section__grid reveal-stagger${pillarsVisible ? " is-visible" : ""}`}
      >
        {method.pillars.map((p) => (
          <article key={p.step} className="method-pillar reveal reveal--up">
            <h4 className="method-pillar__title">{p.title}</h4>
            <span className="method-pillar__step" aria-label={`Pilar ${p.step}`}>
              {String(p.step).padStart(2, "0")}
            </span>
            <p className="method-pillar__text">{p.text}</p>
          </article>
        ))}
      </div>

      <div
        ref={ctaRef}
        className={`method-pillars-section__cta reveal-stagger${ctaVisible ? " is-visible" : ""}`}
      >
        <p className="reveal reveal--up">
          <a className="link-cta" href={LINK_CONTACT}>
            {method.cta} <span className="arrow">→</span>
          </a>
        </p>
        <p className="micro reveal reveal--up">
          Agende um <strong>{method.microStrong}</strong> para alinhar expectativas.
        </p>
      </div>
    </section>
  );
}
