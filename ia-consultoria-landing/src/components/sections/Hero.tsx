import { HERO_VIDEO_SRC, LINK_CONTACT } from "../../constants/links";
import { heroPills } from "../../data/sectors";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="hero-video-overlay" aria-hidden="true" />
      <div className="hero-bottom-fade" aria-hidden="true" />
      <div className="container hero-inner">
        <h1 className="hero-title">
          Fazemos <em className="hero-em">inteligência artificial</em> trabalhar por você
        </h1>
        <p className="hero-lead">
          Transformamos empresas tradicionais em organizações <strong>AI-first</strong>: do diagnóstico e
          letramento à implementação de agentes, automações e integrações sob medida.
        </p>
        <div className="hero-actions">
          <a className="hero-btn-primary" href="#metodo">
            Entender como funciona <span className="arrow">→</span>
          </a>
          <a className="hero-btn-secondary" href={LINK_CONTACT}>
            Agendar conversa
          </a>
        </div>
        <p className="hero-trust-line" aria-hidden="true">
          Estratégia <span>·</span> Implementação <span>·</span> Resultados mensuráveis
        </p>
        <p className="micro">
          Agende uma <strong>conversa rápida</strong> para alinhar expectativas e prioridades.
        </p>
        <p className="hero-pills-label">Onde costumamos atuar</p>
        <div className="hero-pills" aria-label="Setores">
          {heroPills.map((s) => (
            <span key={s} className="hero-pill">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
