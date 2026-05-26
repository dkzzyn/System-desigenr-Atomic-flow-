import { useMemo, useState } from "react";
import { tech } from "../../data/tech";
import { useInView } from "../../hooks/useInView";

export function TechStrip() {
  const [copyRef, copyVisible] = useInView<HTMLDivElement>();
  const [carouselRef, carouselVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [isPaused, setIsPaused] = useState(false);

  const marqueeItems = useMemo(() => [...tech, ...tech], []);

  return (
    <section className="tech-strip-section section section--tight">
      <div className="container">
        <div
          ref={copyRef}
          className={`tech-strip__header reveal-stagger${copyVisible ? " is-visible" : ""}`}
        >
          <p className="kicker reveal reveal--up">Tecnologias</p>
          <h2 className="h2 reveal reveal--up">
            Stack & <em>ecossistema</em>
          </h2>
          <p className="lead reveal reveal--up" style={{ marginBottom: 0 }}>
            Tecnologias que usamos para gerar <strong>crescimento com IA</strong> — escolhidas conforme seu
            contexto.
          </p>
        </div>
      </div>

      <div
        ref={carouselRef}
        className={`tech-carousel tech-carousel--fullwidth reveal reveal--fade${
          carouselVisible ? " is-visible" : ""
        }${isPaused ? " tech-carousel--paused" : ""}`}
        aria-label="Tecnologias do ecossistema"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div className="tech-carousel__fade tech-carousel__fade--left" aria-hidden />
        <div className="tech-carousel__fade tech-carousel__fade--right" aria-hidden />

        <div className="tech-carousel__viewport">
          <div className="tech-carousel__track">
            {marqueeItems.map((t, index) => (
              <article key={`${t.icon}-${index}`} className="tech-carousel__item" title={t.name}>
                <span className="tech-carousel__icon">
                  <img
                    className="tech-carousel__img"
                    src={t.logo}
                    alt={`Logo ${t.name}`}
                    width={44}
                    height={44}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </span>
                <span className="tech-carousel__name">{t.name}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
