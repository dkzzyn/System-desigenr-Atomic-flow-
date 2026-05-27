import { CONTACT_EMAIL } from "../../constants/links";
import { useSiteContent } from "../../hooks/useSiteContent";
import { useInView } from "../../hooks/useInView";
import { useSiteMode } from "../../context/SiteModeContext";
import { ScheduleConversationButton } from "../lead/ScheduleConversationButton";
import { IconAtom } from "../icons/IconAtom";

export function FinalCTA() {
  const { finalCta } = useSiteContent();
  const { mode } = useSiteMode();
  const isConsultoria = mode === "consultoria";
  const [ref, isVisible] = useInView<HTMLElement>({ threshold: 0.25 });

  return (
    <section
      ref={ref}
      id="contato"
      className={`cta-band reveal-stagger${
        isConsultoria ? " cta-band--ia ia-glow-section ia-section-grid--visible" : " mkt-glow-section"
      }${isVisible ? " is-visible" : ""}`}
    >
      <div
        className={`cta-band__atom${isConsultoria ? "" : " cta-band__atom--left"}`}
        aria-hidden
      >
        <IconAtom className="cta-band__atom-svg" size={400} gradient />
      </div>

      <div className="container cta-band__inner">
        <h2 className="h2 reveal reveal--scale">
          {finalCta.titleBefore}
          <em>{finalCta.titleEmphasis}</em>
          {finalCta.titleAfter}
        </h2>
        <p className="lead reveal reveal--up">{finalCta.lead}</p>
        <p className="reveal reveal--up" style={{ marginBottom: 0 }}>
          <ScheduleConversationButton
            className={`link-cta${isConsultoria ? " cta-band__btn" : ""}`}
            showArrow
          >
            {finalCta.cta}
          </ScheduleConversationButton>
        </p>
        <p className="micro cta-band__micro reveal reveal--up">
          Ou escreva para <strong>{CONTACT_EMAIL}</strong> com o contexto do seu projeto.
        </p>
      </div>
    </section>
  );
}
