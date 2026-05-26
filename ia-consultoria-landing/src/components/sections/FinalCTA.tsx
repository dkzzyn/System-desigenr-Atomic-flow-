import { CONTACT_EMAIL, CONTACT_MAILTO } from "../../constants/links";
import { useInView } from "../../hooks/useInView";

export function FinalCTA() {
  const [ref, isVisible] = useInView<HTMLElement>({ threshold: 0.25 });

  return (
    <section
      ref={ref}
      id="contato"
      className={`cta-band reveal-stagger${isVisible ? " is-visible" : ""}`}
    >
      <div className="container">
        <h2 className="h2 reveal reveal--scale">
          Faça a <em>IA</em> trabalhar por você
        </h2>
        <p className="lead reveal reveal--up">
          Empresas que adotam IA com método costumam acelerar resultados de forma desproporcional.
        </p>
        <p className="reveal reveal--up" style={{ marginBottom: 0 }}>
          <a className="link-cta" href={CONTACT_MAILTO}>
            Agendar conversa <span className="arrow">→</span>
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
