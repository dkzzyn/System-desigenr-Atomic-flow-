import { useSiteContent } from "../../hooks/useSiteContent";
import { ScheduleConversationButton } from "../lead/ScheduleConversationButton";

export function Footer() {
  const { footer } = useSiteContent();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Navegação</h4>
            <ScheduleConversationButton className="footer-link">{footer.ctaLabel}</ScheduleConversationButton>
            <a href="#metodo">Método</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h4>Empresa</h4>
            <p>{footer.tagline}</p>
            <p>Brasil</p>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#">Política de privacidade</a>
            <a href="#">Termos de uso</a>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Atomic Flow. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
