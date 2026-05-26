import { type ComponentType } from "react";
import { type SectorItem } from "../../data/siteContent";
import { useSiteContent } from "../../hooks/useSiteContent";
import { useInView } from "../../hooks/useInView";
import { useSiteMode } from "../../context/SiteModeContext";
import {
  IconBarChart,
  IconChat,
  IconDollar,
  IconEdit,
  IconGear,
  IconTruck,
} from "../icons";

const SECTOR_ICONS: Record<SectorItem["icon"], ComponentType<{ className?: string }>> = {
  gear: IconGear,
  chat: IconChat,
  truck: IconTruck,
  edit: IconEdit,
  chart: IconBarChart,
  dollar: IconDollar,
};

export function SectorsBlock() {
  const { sectors } = useSiteContent();
  const { mode } = useSiteMode();
  const isMarketing = mode === "marketing";
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [listRef, listVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="setores" className={`section container sectors-block${isMarketing ? " sectors-block--mkt mkt-glow-section" : ""}`}>
      <div
        ref={headerRef}
        className={`sectors-block__header reveal-stagger${headerVisible ? " is-visible" : ""}`}
      >
        <p className="kicker reveal reveal--up">{sectors.kicker}</p>
        <h2 className="h2 reveal reveal--up">
          {sectors.titleBefore}
          <em>{sectors.titleEmphasis}</em>
          {sectors.titleAfter}
        </h2>
        <p className="lead reveal reveal--up">{sectors.lead}</p>
      </div>

      <div
        ref={listRef}
        className={`sectors-list${isMarketing ? " sectors-list--mkt-cards" : ""} reveal-stagger${listVisible ? " is-visible" : ""}`}
        role="list"
        aria-label="Áreas de atuação"
      >
        {sectors.items.map((x) => {
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
