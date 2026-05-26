import { useState } from "react";

const TAPE_COPIES = 8;

function TapePhrase() {
  return (
    <>
      Recupere o <em>tempo da sua equipe</em> com IA sob medida
    </>
  );
}

function TapeTrack({ direction }: { direction: "left" | "right" }) {
  return (
    <div className="cross-tape__viewport">
      <div className={`cross-tape__track cross-tape__track--${direction}`} aria-hidden="true">
        {Array.from({ length: TAPE_COPIES * 2 }, (_, index) => (
          <span key={index} className="cross-tape__item">
            <span className="cross-tape__text">
              <TapePhrase />
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

      <h2 className="sr-only">Recupere o tempo da sua equipe com IA sob medida</h2>
    </div>
  );
}
