import { useSiteMode } from "../context/SiteModeContext";
import { siteContentByMode } from "../data/siteContent";

export function useSiteContent() {
  const { mode } = useSiteMode();
  return siteContentByMode[mode];
}
