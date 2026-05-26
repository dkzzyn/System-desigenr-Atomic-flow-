import { type ComponentType } from "react";
import { LINK_CONTACT } from "../../constants/links";
import { differentials, type DifferentialIconKey } from "../../data/differentials";
import { useInView } from "../../hooks/useInView";
import { IconShieldCheck, IconTrendUp, IconUsers } from "../icons";

const DIFF_ICONS: Record<DifferentialIconKey, ComponentType<{ className?: string }>> = {
  shield: IconShieldCheck,
  trend: IconTrendUp,
  users: IconUsers,
};

export function Differentials() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [gridRef, gridVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [ctaRef, ctaVisible] = useInView<HTMLDivElement>();

  return (
    <section className="section container differentials-section">
      <div
        ref={headerRef}
        className={`differentials-section__header reveal-stagger${headerVisible ? " is-visible" : ""}`}
      >
        <p className="kicker reveal reveal--up">Diferenciais</p>
        <h2 className="h2 reveal reveal--up">
          Por que <em>escolher</em> a Atomic Flow?
        </h2>
        <p className="lead reveal reveal--up">
          Não somos apenas uma equipe técnica vendendo buzzwords. Somos consultores que ligam processo, pessoas e
          tecnologia.
        </p>
      </div>
      <div
        ref={gridRef}
        className={`differentials-section__grid reveal-stagger${gridVisible ? " is-visible" : ""}`}
      >
        {differentials.map((d) => {
          const Icon = DIFF_ICONS[d.icon];
          return (
            <div key={d.title} className="diff reveal reveal--up">
              <span className="diff__icon" aria-hidden>
                <Icon />
              </span>
              <h4>{d.title}</h4>
              <p>{d.text}</p>
            </div>
          );
        })}
      </div>
      <div
        ref={ctaRef}
        className={`differentials-section__cta reveal-stagger${ctaVisible ? " is-visible" : ""}`}
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
