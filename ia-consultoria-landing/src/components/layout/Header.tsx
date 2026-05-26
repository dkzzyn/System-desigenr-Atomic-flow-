import { useEffect, useState } from "react";
import { LINK_CONTACT, SOCIAL_INSTAGRAM, SOCIAL_LINKEDIN } from "../../constants/links";
import { IconExternal, IconInstagram, IconLinkedIn } from "../icons";

const NAV_LINKS = [
  { href: "#metodo", label: "Método" },
  { href: "#servicos", label: "Serviços" },
  { href: "#setores", label: "Setores" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="nav-shell">
      <header className="nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#inicio" onClick={closeMenu}>
            Atomic Flow
          </a>

          <nav className="nav-links nav-links--center nav-links--desktop" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-end-bar">
            <div className="nav-social-row nav-social-row--desktop" aria-label="Redes sociais">
              <a
                className="nav-social-btn"
                href={SOCIAL_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconLinkedIn />
              </a>
              <a
                className="nav-social-btn"
                href={SOCIAL_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
            </div>
            <a className="nav-cta-outline nav-cta-outline--header-desktop" href={LINK_CONTACT}>
              Agendar conversa
              <IconExternal className="nav-cta-outline-icon" />
            </a>
            <a className="nav-cta nav-cta--header-mobile-bar" href={LINK_CONTACT}>
              Falar com consultor
            </a>
            <button
              type="button"
              className="nav-burger--af"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="nav-mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className={`nav-burger-line${menuOpen ? " is-open" : ""}`} />
              <span className={`nav-burger-line${menuOpen ? " is-open" : ""}`} />
              <span className={`nav-burger-line${menuOpen ? " is-open" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nav-backdrop${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <nav
        id="nav-mobile-menu"
        className={`nav-mobile-panel${menuOpen ? " is-open" : ""}`}
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
      >
        <div className="nav-mobile-inner">
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="nav-mobile-link" href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-mobile-link nav-mobile-link--muted" href="#contato" onClick={closeMenu}>
            Contato
          </a>
          <div className="nav-social-row nav-social-row--mobile">
            <a
              className="nav-social-btn"
              href={SOCIAL_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconLinkedIn />
            </a>
            <a
              className="nav-social-btn"
              href={SOCIAL_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconInstagram />
            </a>
          </div>
          <a className="nav-cta-outline nav-cta-outline--mobile" href={LINK_CONTACT} onClick={closeMenu}>
            Agendar conversa
            <IconExternal className="nav-cta-outline-icon" />
          </a>
        </div>
      </nav>
    </div>
  );
}
