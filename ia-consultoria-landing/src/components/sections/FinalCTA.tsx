import { CONTACT_EMAIL, CONTACT_MAILTO } from "../../constants/links";
import { useSiteContent } from "../../hooks/useSiteContent";
import { useInView } from "../../hooks/useInView";
import { useSiteMode } from "../../context/SiteModeContext";

export function FinalCTA() {
  const { finalCta } = useSiteContent();
  const { mode } = useSiteMode();
  const [ref, isVisible] = useInView<HTMLElement>({ threshold: 0.25 });

  return (
    <section
      ref={ref}
      id="contato"
      className={`cta-band reveal-stagger${mode === "marketing" ? " mkt-glow-section" : ""}${isVisible ? " is-visible" : ""}`}
    >
      <div className="container">
        <h2 className="h2 reveal reveal--scale">
          {finalCta.titleBefore}
          <em>{finalCta.titleEmphasis}</em>
          {finalCta.titleAfter}
        </h2>
        <p className="lead reveal reveal--up">{finalCta.lead}</p>
        <p className="reveal reveal--up" style={{ marginBottom: 0 }}>
          <a className="link-cta" href={CONTACT_MAILTO}>
            {finalCta.cta} <span className="arrow">→</span>
          </a>
        </p>
        <p
          className="micro reveal reveal--up"
          style={{ marginTop: "1.25rem", marginLeft: "auto", marginRight: "auto" }}
        >
          Ou escreva para <strong>{CONTACT_EMAIL}</strong> com o contexto do seu projeto.
        </p>
      </div>
    </section>
  );
}
