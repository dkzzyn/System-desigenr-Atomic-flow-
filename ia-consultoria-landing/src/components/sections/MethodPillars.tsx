import { LINK_CONTACT } from "../../constants/links";
import { pillars } from "../../data/pillars";
import { useInView } from "../../hooks/useInView";

export function MethodPillars() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [pillarsRef, pillarsVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [ctaRef, ctaVisible] = useInView<HTMLDivElement>();

  return (
    <section id="metodo" className="section container method-pillars-section">
      <div
        ref={headerRef}
        className={`method-pillars-section__header reveal-stagger${headerVisible ? " is-visible" : ""}`}
      >
        <p className="kicker reveal reveal--from-left">Transformação AI-first</p>
        <h2 className="h2 reveal reveal--from-left">
          Os <em>4 pilares</em> do método
        </h2>
        <p className="lead reveal reveal--from-left">
          Colocar IA no centro do negócio exige método: validar, educar, construir e escalar. É assim que geramos
          resultados sustentáveis.
        </p>
      </div>

      <div
        ref={pillarsRef}
        className={`method-pillars-section__grid reveal-stagger${pillarsVisible ? " is-visible" : ""}`}
      >
        {pillars.map((p) => (
          <article key={p.step} className="method-pillar reveal reveal--up">
            <span className="method-pillar__step" aria-label={`Pilar ${p.step}`}>
              {String(p.step).padStart(2, "0")}
            </span>
            <h4 className="method-pillar__title">{p.title}</h4>
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
            Entender como funciona <span className="arrow">→</span>
          </a>
        </p>
        <p className="micro reveal reveal--up">
          Agende uma <strong>conversa rápida</strong> para alinhar expectativas.
        </p>
      </div>
    </section>
  );
}
