import { useEffect, useState } from "react";
import { useSiteMode } from "../../context/SiteModeContext";
import { LoaderAtomBurst } from "./LoaderAtomBurst";

const MIN_SPLASH_MS = 1000;
const EXPLOSION_MS = 930;

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
  const { mode } = useSiteMode();
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  useEffect(() => {
    setPhase("loading");
    let exitTimer: number | undefined;
    let cancelled = false;

    waitForSplashComplete().then(() => {
      if (cancelled) return;

      requestAnimationFrame(() => {
        if (cancelled) return;
        setPhase("exiting");
        exitTimer = window.setTimeout(() => {
          if (!cancelled) setPhase("done");
        }, EXPLOSION_MS);
      });
    });

    return () => {
      cancelled = true;
      if (exitTimer !== undefined) window.clearTimeout(exitTimer);
    };
  }, [mode]);

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
        <LoaderAtomBurst exploding={phase === "exiting"} />
      </div>
    </div>
  );
}

export function usePageReady() {
  const { mode } = useSiteMode();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
    let exitTimer: number | undefined;
    let cancelled = false;

    waitForSplashComplete().then(() => {
      if (cancelled) return;

      requestAnimationFrame(() => {
        if (cancelled) return;
        exitTimer = window.setTimeout(() => {
          if (!cancelled) setReady(true);
        }, EXPLOSION_MS);
      });
    });

    return () => {
      cancelled = true;
      if (exitTimer !== undefined) window.clearTimeout(exitTimer);
    };
  }, [mode]);

  return ready;
}
