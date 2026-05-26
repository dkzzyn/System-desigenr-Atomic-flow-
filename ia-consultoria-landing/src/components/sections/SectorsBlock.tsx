import { type ComponentType } from "react";
import { sectors, type SectorIconKey } from "../../data/sectors";
import { useInView } from "../../hooks/useInView";
import {
  IconBarChart,
  IconChat,
  IconDollar,
  IconEdit,
  IconGear,
  IconTruck,
} from "../icons";

const SECTOR_ICONS: Record<SectorIconKey, ComponentType<{ className?: string }>> = {
  gear: IconGear,
  chat: IconChat,
  truck: IconTruck,
  edit: IconEdit,
  chart: IconBarChart,
  dollar: IconDollar,
};

export function SectorsBlock() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [listRef, listVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="setores" className="section container">
      <div
        ref={headerRef}
        className={`sectors-block__header reveal-stagger${headerVisible ? " is-visible" : ""}`}
      >
        <p className="kicker reveal reveal--up">O que a IA faz por você</p>
        <h2 className="h2 reveal reveal--up">
          É <em>muito mais</em> que automação
        </h2>
        <p className="lead reveal reveal--up">
          Inteligência estratégica para cada área do negócio — sempre com foco em impacto mensurável.
        </p>
      </div>

      <div
        ref={listRef}
        className={`sectors-list reveal-stagger${listVisible ? " is-visible" : ""}`}
        role="list"
        aria-label="Setores que atendemos"
      >
        {sectors.map((x) => {
          const Icon = SECTOR_ICONS[x.icon];
          return (
            <article key={x.title} className="sector-row reveal reveal--up" role="listitem">
              <span className="sector-row__icon" aria-hidden>
                <Icon />
              </span>
              <div className="sector-row__body">
                <h4>{x.title}</h4>
                <p>{x.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
