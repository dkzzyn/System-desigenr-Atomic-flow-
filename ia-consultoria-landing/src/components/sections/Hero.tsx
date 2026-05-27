import { HERO_VIDEO_SRC } from "../../constants/links";
import { useSiteContent } from "../../hooks/useSiteContent";
import { ScheduleConversationButton } from "../lead/ScheduleConversationButton";
import { SiteModeSwitch } from "../layout/SiteModeSwitch";

export function Hero() {
  const { hero } = useSiteContent();

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
        <SiteModeSwitch variant="hero" />

        <h1 className="hero-title">
          {hero.titleBefore}
          <em className="hero-em">{hero.titleEmphasis}</em>
          {hero.titleAfter}
        </h1>
        <p className="hero-lead">{hero.lead}</p>
        <div className="hero-actions">
          <a className="hero-btn-primary" href="#metodo">
            {hero.primaryCta} <span className="arrow">→</span>
          </a>
          <ScheduleConversationButton className="hero-btn-secondary">
            {hero.secondaryCta}
          </ScheduleConversationButton>
        </div>
        <p className="hero-trust-line" aria-hidden="true">
          {hero.trustLine[0]} <span>·</span> {hero.trustLine[1]} <span>·</span> {hero.trustLine[2]}
        </p>
        <p className="micro">
          Agende um <strong>{hero.microStrong}</strong> para alinhar expectativas e prioridades.
        </p>
        <p className="hero-pills-label">{hero.pillsLabel}</p>
        <div className="hero-pills" aria-label="Áreas de atuação">
          {hero.heroPills.map((s) => (
            <span key={s} className="hero-pill">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
