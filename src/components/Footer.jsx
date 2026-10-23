
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-brand">
        <div className="footer-logo">&lt;/&gt;</div>

        <div>
          <h3>StudentSpace</h3>
          <br />
          <p>contacter nous:</p><a href="https://www.studentspace.com" target='_blank'>"https://www.studentspace.com</a>
        </div>
      </div>

      <div className="footer-credit">
        <p>Réalisé par <strong>Rania Chebli</strong></p>

        <p>© 2026 StudentSpace — Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
