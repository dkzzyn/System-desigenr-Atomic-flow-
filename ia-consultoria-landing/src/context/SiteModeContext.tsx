import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  isSiteMode,
  SITE_MODE_STORAGE_KEY,
  type SiteMode,
} from "../constants/siteMode";
import { siteContentByMode } from "../data/siteContent";

type SiteModeContextValue = {
  mode: SiteMode;
  setMode: (mode: SiteMode) => void;
};

const SiteModeContext = createContext<SiteModeContextValue | null>(null);

function readStoredMode(): SiteMode {
  if (typeof window === "undefined") return "consultoria";
  const stored = localStorage.getItem(SITE_MODE_STORAGE_KEY);
  return isSiteMode(stored) ? stored : "consultoria";
}

function applyModeToDocument(mode: SiteMode) {
  document.documentElement.dataset.siteMode = mode;
  const { title, description } = siteContentByMode[mode].meta;
  document.title = title;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", description);
}

export function SiteModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<SiteMode>(readStoredMode);

  useEffect(() => {
    applyModeToDocument(mode);
    localStorage.setItem(SITE_MODE_STORAGE_KEY, mode);
  }, [mode]);

  const setMode = useCallback((next: SiteMode) => {
    setModeState((current) => {
      if (current === next) return current;
      applyModeToDocument(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return next;
    });
  }, []);

  const value = useMemo(() => ({ mode, setMode }), [mode, setMode]);

  return <SiteModeContext.Provider value={value}>{children}</SiteModeContext.Provider>;
}

export function useSiteMode() {
  const context = useContext(SiteModeContext);
  if (!context) {
    throw new Error("useSiteMode must be used within SiteModeProvider");
  }
  return context;
}
