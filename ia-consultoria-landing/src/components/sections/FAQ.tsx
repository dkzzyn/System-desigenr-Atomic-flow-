import { useSiteContent } from "../../hooks/useSiteContent";
import { useInView } from "../../hooks/useInView";

export function FAQ() {
  const { faq } = useSiteContent();
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [listRef, listVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="faq" className="section container">
      <div ref={headerRef} className={`reveal-stagger${headerVisible ? " is-visible" : ""}`}>
        <p className="kicker reveal reveal--up">{faq.kicker}</p>
        <h2 className="h2 reveal reveal--up">{faq.title}</h2>
      </div>
      <div ref={listRef} className={`faq reveal-stagger${listVisible ? " is-visible" : ""}`}>
        {faq.items.map((item) => (
          <div key={item.question} className="faq-item reveal reveal--up">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
