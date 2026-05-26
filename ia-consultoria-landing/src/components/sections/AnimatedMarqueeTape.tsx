import { useMemo } from "react";
import { useSiteContent } from "../../hooks/useSiteContent";

const PHRASE_REPEAT = 6;

function PhraseItem({
  before,
  emphasis,
  after,
}: {
  before: string;
  emphasis: string;
  after: string;
}) {
  return (
    <span className="phrase-tape__item">
      <span className="phrase-tape__text">
        {before}
        <em>{emphasis}</em>
        {after}
      </span>
      <span className="phrase-tape__sep" aria-hidden>
        ✦
      </span>
    </span>
  );
}

export function AnimatedMarqueeTape() {
  const { marquee } = useSiteContent();

  const trackItems = useMemo(
    () => [
      ...Array.from({ length: PHRASE_REPEAT }, (_, index) => index),
      ...Array.from({ length: PHRASE_REPEAT }, (_, index) => index + PHRASE_REPEAT),
    ],
    [],
  );

  return (
    <div className="phrase-tape">
      <h2 className="sr-only">{marquee.srOnly}</h2>
      <div className="phrase-tape__ribbon" aria-hidden="true">
        <div className="phrase-tape__viewport">
          <div className="phrase-tape__track">
            {trackItems.map((index) => (
              <PhraseItem
                key={index}
                before={marquee.phraseBefore}
                emphasis={marquee.phraseEmphasis}
                after={marquee.phraseAfter}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
