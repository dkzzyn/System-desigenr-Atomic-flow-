import { LINK_CONTACT, SOCIAL_INSTAGRAM, SOCIAL_LINKEDIN } from "../../constants/links";
import { IconExternal, IconInstagram, IconLinkedIn } from "../icons";

export function Header() {
  return (
    <div className="nav-shell">
      <header className="nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#inicio">
            Atomic Flow
          </a>
          <nav className="nav-links nav-links--center" aria-label="Principal">
            <a href="#metodo">Método</a>
            <a href="#servicos">Serviços</a>
            <a href="#setores">Setores</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-end-bar">
            <div className="nav-social-row" aria-label="Redes sociais">
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
            <a className="nav-cta nav-cta--header-mobile-only" href={LINK_CONTACT}>
              Falar com consultor
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
