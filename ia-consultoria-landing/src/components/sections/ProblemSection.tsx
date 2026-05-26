import { LINK_CONTACT } from "../../constants/links";
import { useInView } from "../../hooks/useInView";

export function ProblemSection() {
  const [ref, isVisible] = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="problema"
      className={`section container problem-section${isVisible ? " is-visible" : ""}`}
    >
      <p className="kicker reveal reveal--up">Para equipes sem IA, o problema é esse</p>
      <div className="problem-split">
        <div className="problem-split__copy reveal reveal--from-left">
          <h2 className="h2">
            Sua <em>equipe</em> está no limite?
          </h2>
          <p className="lead lead--problem">
            O time está sobrecarregado porque o negócio não foi estruturado com mentalidade AI-first. O tempo não
            aumenta — mas a produtividade pode multiplicar com processos e agentes bem desenhados.
          </p>
        </div>
        <figure className="problem-split__figure reveal reveal--from-right">
          <img
            className="problem-split__img"
            src="/aiFirst.png"
            alt="Pressão pelo tempo e prazos — equipes no limite antes de uma operação AI-first"
            width={700}
            height={700}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
      <p className="problem-section-cta reveal reveal--up">
        <a className="link-cta" href={LINK_CONTACT}>
          Entender como funciona <span className="arrow">→</span>
        </a>
      </p>
      <p className="micro reveal reveal--up">
        Agende uma <strong>conversa rápida</strong> para alinhar expectativas.
      </p>
    </section>
  );
}
