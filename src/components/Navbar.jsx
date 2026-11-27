
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="nav-link" to="/" end>
        ⌂ Accueil
      </NavLink>

      <NavLink className="nav-link" to="/etudiants">
        ♙ Étudiants
      </NavLink>

      <NavLink className="nav-link" to="/contact">
        ✉ Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
