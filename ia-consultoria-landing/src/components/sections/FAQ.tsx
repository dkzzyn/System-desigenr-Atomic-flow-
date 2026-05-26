import { useInView } from "../../hooks/useInView";

export function FAQ() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [listRef, listVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="faq" className="section container">
      <div
        ref={headerRef}
        className={`reveal-stagger${headerVisible ? " is-visible" : ""}`}
      >
        <p className="kicker reveal reveal--up">Perguntas frequentes</p>
        <h2 className="h2 reveal reveal--up">Antes de toda grande parceria</h2>
      </div>
      <div
        ref={listRef}
        className={`faq reveal-stagger${listVisible ? " is-visible" : ""}`}
      >
        <div className="faq-item reveal reveal--up">
          <h3>Quem é a Atomic Flow?</h3>
          <p>
            Somos consultores de transformação digital com foco em IA: estratégia, implementação e capacitação.
            O objetivo é fazer a IA sair do slide e entrar no fluxo de trabalho — com governança e métricas.
          </p>
        </div>
        <div className="faq-item reveal reveal--up">
          <h3>O que exatamente vocês entregam?</h3>
          <p>
            Diagnóstico e roadmap, treinamentos, escolha de stack, integrações (APIs, RAG, automações), agentes
            sob medida e acompanhamento pós-go-live. O escopo é definido junto com você em fases.
          </p>
        </div>
      </div>
    </section>
  );
}
