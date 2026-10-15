

import './Header.css';
import image from '../assets/studentspace.jpg'

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-logo">
          <span>&lt;/&gt;</span>
           <img src={image} alt="Logo UniConnect" />
        </div>

        <div className="brand-text">
          <h1>StudentSpace</h1>
          <p>Gestion des étudiants</p>
        </div>
      </div>

      <div className="header-info">
        <span className="header-badge">ESPACE UNIVERSITAIRE</span>
        <h2>Bienvenue dans votre espace</h2>
        <p>La gestion des étudiants, simplement.</p>
      </div>
    </header>
  );
}

export default Header;


