import { useInView } from "../../hooks/useInView";

export function SolutionLead() {
  const [ref, isVisible] = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`section container solution-lead reveal-stagger${isVisible ? " is-visible" : ""}`}
    >
      <div className="solution-split">
        <figure className="solution-split__figure reveal reveal--from-left">
          <img
            className="solution-split__img"
            src="/relogio-hero.png"
            alt="Relógio simbolizando tempo recuperado — IA sob medida para liberar horas da sua equipe"
            width={560}
            height={560}
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="solution-split__copy">
          <p className="kicker reveal reveal--from-right">É assim que resolvemos</p>
          <h2 className="h2 solution-lead__title reveal reveal--from-right">
            Recupere o <em>tempo da sua equipe</em> com IA sob medida
          </h2>
          <p className="lead solution-lead__lead reveal reveal--from-right">
            Da criação de conteúdo à venda. Do backoffice à análise de dados. Ajudamos sua empresa a inovar com
            inteligência artificial com governança, ROI claro e entregas em fases.
          </p>
        </div>
      </div>
    </section>
  );
}
