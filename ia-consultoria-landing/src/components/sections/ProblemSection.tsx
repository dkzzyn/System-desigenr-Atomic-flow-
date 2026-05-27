import { useSiteContent } from "../../hooks/useSiteContent";
import { useInView } from "../../hooks/useInView";
import { ScheduleConversationButton } from "../lead/ScheduleConversationButton";

export function ProblemSection() {
  const { problem } = useSiteContent();
  const [ref, isVisible] = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="problema"
      className={`section problem-section problem-section--ia ia-glow-section${isVisible ? " is-visible" : ""}`}
    >
      <div className="container">
        <p className="kicker reveal reveal--up">{problem.kicker}</p>
        <div className="problem-split">
          <div className="problem-split__copy reveal reveal--from-left">
            <h2 className="h2">
              Sua <em>{problem.titleEmphasis}</em>
              {problem.titleRest}
            </h2>
            <p className="lead lead--problem">{problem.lead}</p>
          </div>
          <figure className="problem-split__figure reveal reveal--from-right">
            <img
              className="problem-split__img"
              src="/aiFirst.png"
              alt={problem.imageAlt}
              width={700}
              height={700}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <p className="problem-section-cta reveal reveal--up">
          <ScheduleConversationButton className="link-cta" showArrow>
            {problem.cta}
          </ScheduleConversationButton>
        </p>
        <p className="micro reveal reveal--up">
          Agende um <strong>{problem.microStrong}</strong> para alinhar expectativas.
        </p>
      </div>
    </section>
  );
}
