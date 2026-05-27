import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  isSiteMode,
  SITE_MODE_STORAGE_KEY,
  type SiteMode,
} from "../constants/siteMode";
import { SITE_NAME, SITE_URL } from "../constants/site";
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

function setMetaContent(selector: string, content: string) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", content);
}

function applyModeToDocument(mode: SiteMode) {
  document.documentElement.dataset.siteMode = mode;
  const { title, description } = siteContentByMode[mode].meta;
  document.title = title;

  setMetaContent('meta[name="description"]', description);
  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[name="twitter:title"]', title);
  setMetaContent('meta[property="og:url"]', `${SITE_URL}/`);
  setMetaContent('meta[property="og:site_name"]', SITE_NAME);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", `${SITE_URL}/`);
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
