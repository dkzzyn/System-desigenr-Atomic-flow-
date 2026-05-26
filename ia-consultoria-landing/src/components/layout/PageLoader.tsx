import { useEffect, useState } from "react";
import { IconAtom } from "../icons/IconAtom";

const MIN_SPLASH_MS = 2000;
const EXIT_MS = 400;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function waitForFullLoad(): Promise<void> {
  const pageReady =
    document.readyState === "complete"
      ? Promise.resolve()
      : new Promise<void>((resolve) => {
          window.addEventListener("load", () => resolve(), { once: true });
        });

  const fontsReady = document.fonts?.ready ?? Promise.resolve();

  return Promise.all([pageReady, fontsReady]).then(() => undefined);
}

export function waitForSplashComplete(): Promise<void> {
  return Promise.all([waitForFullLoad(), delay(MIN_SPLASH_MS)]).then(() => undefined);
}

export function PageLoader() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  useEffect(() => {
    let exitTimer: number | undefined;
    let cancelled = false;

    waitForSplashComplete().then(() => {
      if (cancelled) return;

      requestAnimationFrame(() => {
        if (cancelled) return;
        setPhase("exiting");
        exitTimer = window.setTimeout(() => {
          if (!cancelled) setPhase("done");
        }, EXIT_MS);
      });
    });

    return () => {
      cancelled = true;
      if (exitTimer !== undefined) window.clearTimeout(exitTimer);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-page-loading", phase !== "done");
    return () => document.body.classList.remove("is-page-loading");
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`page-loader${phase === "exiting" ? " page-loader--exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="A carregar o site"
    >
      <div className="page-loader__inner">
        <IconAtom className="page-loader__atom" size={72} />
      </div>
    </div>
  );
}

export function usePageReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let exitTimer: number | undefined;
    let cancelled = false;

    waitForSplashComplete().then(() => {
      if (cancelled) return;

      requestAnimationFrame(() => {
        if (cancelled) return;
        exitTimer = window.setTimeout(() => {
          if (!cancelled) setReady(true);
        }, EXIT_MS);
      });
    });

    return () => {
      cancelled = true;
      if (exitTimer !== undefined) window.clearTimeout(exitTimer);
    };
  }, []);

  return ready;
}
