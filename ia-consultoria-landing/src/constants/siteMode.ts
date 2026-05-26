export type SiteMode = "consultoria" | "marketing";

export const SITE_MODE_STORAGE_KEY = "atomicflow-site-mode";

export const SITE_MODES: { id: SiteMode; label: string; shortLabel: string }[] = [
  { id: "consultoria", label: "Consultoria", shortLabel: "IA" },
  { id: "marketing", label: "Marketing", shortLabel: "Mkt" },
];

export function isSiteMode(value: string | null): value is SiteMode {
  return value === "consultoria" || value === "marketing";
}
