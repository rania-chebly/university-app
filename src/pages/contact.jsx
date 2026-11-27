import './contact.css';

function Contact() {
  return (
    <main className="contact page-section">
      <span className="page-eyebrow">BESOIN D'AIDE ?</span>
      <h1>Contact</h1>
      <p>Pour toute question, n'hésitez pas à nous contacter.</p>
      <address>
        <p>Adresse : 123 Rue de l'Université, Mahdia, Tunisie</p>
        <p>Téléphone : 01 23 45 67 89</p>
        <p>Email : <a href="mailto:info@isima.fr">info@isima.fr</a></p>
      </address>
      <a
        className="contact-link"
        href="https://isima.rnu.tn/fr"
        target="_blank"
        rel="noreferrer"
      >
        Site officiel de l'ISIMA
      </a>
    </main>
  );
}

export default Contact;
