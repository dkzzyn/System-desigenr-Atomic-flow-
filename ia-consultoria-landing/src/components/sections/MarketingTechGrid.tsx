import { marketingTechCategories } from "../../data/marketingTech";
import { useInView } from "../../hooks/useInView";

export function MarketingTechGrid() {
  const [gridRef, gridVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={gridRef}
      className={`mkt-tech-grid reveal-stagger${gridVisible ? " is-visible" : ""}`}
      aria-label="Stack de ferramentas de marketing"
    >
      {marketingTechCategories.map((category) => (
        <div key={category.id} className="mkt-tech-grid__group reveal reveal--up">
          <p className="mkt-tech-grid__label">{category.label}</p>
          <ul className="mkt-tech-grid__tools">
            {category.tools.map((tool) => (
              <li key={tool.name}>
                <article className="mkt-tech-card" title={tool.name}>
                  <figure className="mkt-tech-card__logo-wrap">
                    <img
                      className="mkt-tech-card__img"
                      src={tool.logo}
                      alt=""
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <div className="mkt-tech-card__body">
                    <span className="mkt-tech-card__name">{tool.name}</span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
