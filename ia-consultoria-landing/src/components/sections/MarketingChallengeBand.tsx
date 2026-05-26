import { LINK_CONTACT } from "../../constants/links";
import { useSiteContent } from "../../hooks/useSiteContent";
import { useInView } from "../../hooks/useInView";

export function MarketingChallengeBand() {
  const { problem, hero } = useSiteContent();
  const [ref, isVisible] = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="problema"
      className={`mkt-challenge mkt-challenge--solid${isVisible ? " is-visible" : ""}`}
      aria-labelledby="mkt-challenge-title"
    >
      <div className="container mkt-challenge__inner">
        <p className="kicker mkt-challenge__kicker reveal reveal--up">{problem.kicker}</p>
        <h2 id="mkt-challenge-title" className="h2 mkt-challenge__title reveal reveal--up">
          Sua <em>{problem.titleEmphasis}</em>
          {problem.titleRest}
        </h2>
        <p className="lead mkt-challenge__lead reveal reveal--up">{problem.lead}</p>

        <ul
          className={`mkt-challenge__stats reveal-stagger${isVisible ? " is-visible" : ""}`}
          aria-label="Focos de atuação"
        >
          {hero.trustLine.map((label) => (
            <li key={label} className="mkt-challenge__stat reveal reveal--up">
              {label}
            </li>
          ))}
        </ul>

        <p className="mkt-challenge__cta reveal reveal--up">
          <a className="link-cta" href={LINK_CONTACT}>
            {problem.cta} <span className="arrow">→</span>
          </a>
        </p>
      </div>
    </section>
  );
}
