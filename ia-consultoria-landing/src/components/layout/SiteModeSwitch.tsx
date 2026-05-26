import { SITE_MODES, type SiteMode } from "../../constants/siteMode";
import { useSiteMode } from "../../context/SiteModeContext";
import { modeBrandLabel } from "../../data/siteContent";
import { IconAtom } from "../icons/IconAtom";

type SiteModeSwitchProps = {
  variant: "header" | "hero";
};

export function SiteModeSwitch({ variant }: SiteModeSwitchProps) {
  const { mode, setMode } = useSiteMode();

  return (
    <div
      className={`site-mode-switch site-mode-switch--${variant}`}
      role="tablist"
      aria-label="Escolher vertical Atomic Flow"
    >
      {SITE_MODES.map((item) => (
        <ModeTab
          key={item.id}
          siteMode={item.id}
          label={variant === "hero" ? item.label : item.shortLabel}
          brandLabel={modeBrandLabel[item.id]}
          isActive={mode === item.id}
          variant={variant}
          onSelect={() => setMode(item.id)}
        />
      ))}
    </div>
  );
}

type ModeTabProps = {
  siteMode: SiteMode;
  label: string;
  brandLabel: string;
  isActive: boolean;
  variant: "header" | "hero";
  onSelect: () => void;
};

function ModeTab({ siteMode, label, brandLabel, isActive, variant, onSelect }: ModeTabProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-label={`${brandLabel} — ${label}`}
      className={`site-mode-switch__tab site-mode-switch__tab--${siteMode}${isActive ? " is-active" : ""}`}
      onClick={onSelect}
    >
      <span className={`site-mode-switch__icon site-mode-switch__icon--${siteMode}`}>
        <IconAtom size={variant === "hero" ? 28 : 22} />
      </span>
      {variant === "hero" ? (
        <>
          <span className="site-mode-switch__brand">{brandLabel}</span>
          <span className="site-mode-switch__label">{label}</span>
        </>
      ) : (
        <span className="site-mode-switch__label site-mode-switch__label--header">{label}</span>
      )}
    </button>
  );
}
