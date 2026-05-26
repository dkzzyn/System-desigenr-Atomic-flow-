import { LINK_CONTACT } from "../../constants/links";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Navegação</h4>
            <a href={LINK_CONTACT}>Falar com consultor</a>
            <a href="#metodo">Método</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h4>Empresa</h4>
            <p>Atomic Flow — consultoria em IA</p>
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
