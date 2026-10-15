
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a className="nav-link active"  href="#accueil">
        <span>⌂</span> Accueil
      </a>

      <a className="nav-link" href="#etudiants">
        <span>♙</span> Étudiants
      </a>

      <a className="nav-link" href="#contact">
        <span>✉</span> Contact
      </a>
    </nav>
  );
}

export default Navbar;
