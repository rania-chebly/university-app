import './notfound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="not-found page-section">
      <span className="page-eyebrow">ERREUR 404</span>
      <h1>Page introuvable</h1>
      <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <Link className="retour-link" to="/">
        Retour à l'accueil
      </Link>
    </main>
  );
}

export default NotFound;