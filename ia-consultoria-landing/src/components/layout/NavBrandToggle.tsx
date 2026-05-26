import type { SiteMode } from "../../constants/siteMode";
import { useSiteMode } from "../../context/SiteModeContext";
import { navBrandLabel } from "../../data/siteContent";
import { IconAtom } from "../icons/IconAtom";

function nextMode(current: SiteMode): SiteMode {
  return current === "consultoria" ? "marketing" : "consultoria";
}

export function NavBrandToggle() {
  const { mode, setMode } = useSiteMode();
  const next = nextMode(mode);
  const nextLabel = navBrandLabel[next];

  return (
    <button
      type="button"
      className={`nav-logo-box nav-brand-toggle nav-brand-toggle--${mode}`}
      onClick={() => setMode(next)}
      aria-label={`Alternar para ${nextLabel}`}
      title={`Alternar para ${nextLabel}`}
    >
      <span className="nav-logo-icon" aria-hidden>
        <IconAtom size={22} />
      </span>
      <span className="nav-logo-text">{navBrandLabel[mode]}</span>
    </button>
  );
}
