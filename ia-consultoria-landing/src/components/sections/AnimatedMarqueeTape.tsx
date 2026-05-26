import { useState } from "react";
import { useSiteContent } from "../../hooks/useSiteContent";

const TAPE_COPIES = 8;

function TapeTrack({ direction }: { direction: "left" | "right" }) {
  const { marquee } = useSiteContent();

  return (
    <div className="cross-tape__viewport">
      <div className={`cross-tape__track cross-tape__track--${direction}`} aria-hidden="true">
        {Array.from({ length: TAPE_COPIES * 2 }, (_, index) => (
          <span key={index} className="cross-tape__item">
            <span className="cross-tape__text">
              {marquee.phraseBefore}
              <em>{marquee.phraseEmphasis}</em>
              {marquee.phraseAfter}
            </span>
            <span className="cross-tape__sep" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function AnimatedMarqueeTape() {
  const { marquee } = useSiteContent();
  const [isPaused, setIsPaused] = useState(false);

  const pauseProps = {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    onFocusCapture: () => setIsPaused(true),
    onBlurCapture: () => setIsPaused(false),
  };

  return (
    <div className={`cross-tape${isPaused ? " cross-tape--paused" : ""}`}>
      <div className="cross-tape__ribbon cross-tape__ribbon--left" {...pauseProps}>
        <TapeTrack direction="left" />
      </div>

      <div className="cross-tape__ribbon cross-tape__ribbon--right" {...pauseProps}>
        <TapeTrack direction="right" />
      </div>

      <h2 className="sr-only">{marquee.srOnly}</h2>
    </div>
  );
}
