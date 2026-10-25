import './App.css';
import StudentCard from './components/StudentCard.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import MyImage from './assets/ranya.jpg';
import Image1 from './assets/image1.jpg';
import Image2 from './assets/image2.jpg';
import Image3 from './assets/image3.jpg';
import { Counter } from './components/Counter.jsx';
import { useState } from 'react';

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      nompr: 'ranya chebli',
      email: 'chiblirania1@gmail.com',
      tel: '20815709',
      filiere: "Génie logiciel et systèmes d'information",
      groupe: 'Glsi 2 B',
      ville: 'nabeul',
      image: MyImage,
    },
    {
      nompr: 'Maram mabrouk',
      email: 'Mabroukmaram@gmail.com',
      tel: '97814214',
      filiere: "Génie logiciel et systèmes d'information",
      groupe: 'Glsi 2 B',
      ville: 'nabeul',
      image: Image1,
    },
    {
      nompr: 'mohamed ben salem',
      email: 'BenSalemmohamed@gmail.com',
      tel: '25712258',
      filiere: "Génie logiciel et systèmes d'information",
      groupe: 'Glsi 2 c',
      ville: 'Mahdia',
      image: Image2,
    },
    {
      nompr: 'Sami ben mohamed',
      email: 'BenmohamedSami@gmail.com',
      tel: '55280147',
      filiere: "Génie logiciel et systèmes d'information",
      groupe: 'Glsi 2 d',
      ville: 'Sousse',
      image: Image3,
    },
  ]);

  const [nouvelEtudiant, setNouvelEtudiant] = useState({
    nompr: '',
    email: '',
    tel: '',
    filiere: '',
    groupe: '',
    ville: '',
  });
  const [filiereChoisie, setFiliereChoisie] = useState('');

  const filieres = [...new Set(etudiants.map((etudiant) => etudiant.filiere))];
  const etudiantsFiltres = etudiants.filter(
    (etudiant) =>
      filiereChoisie === '' || etudiant.filiere === filiereChoisie
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setNouvelEtudiant((precedent) => ({
      ...precedent,
      [name]: value,
    }));
  }

  function ajouterEtudiant(event) {
    event.preventDefault();

    if (!nouvelEtudiant.nompr || !nouvelEtudiant.email || !nouvelEtudiant.tel) {
      return;
    }

    const etudiantAjoute = {
      ...nouvelEtudiant,
      image: MyImage,
    };

    setEtudiants((precedents) => [...precedents, etudiantAjoute]);
    setNouvelEtudiant({
      nompr: '',
      email: '',
      tel: '',
      filiere: '',
      groupe: '',
      ville: '',
    });
  }

  function supprimerEtudiant(etudiantASupprimer) {
    setEtudiants((precedents) =>
      precedents.filter((etudiant) => etudiant !== etudiantASupprimer)
    );
  }
  function modifierEtudiant(emailInitial, informationsModifiees) {
    setEtudiants((precedents) =>
      precedents.map((e) =>
        e.email === emailInitial ? { ...e, ...informationsModifiees } : e
      )
    );
  }
  return (
    <div>
      <Header />
      <Navbar />

      <form onSubmit={ajouterEtudiant} className="ajout-form">
        <input
          type="text"
          name="nompr"
          placeholder="Nom et prénom"
          value={nouvelEtudiant.nompr}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={nouvelEtudiant.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tel"
          placeholder="Téléphone"
          value={nouvelEtudiant.tel}
          onChange={handleChange}
        />
        <input
          type="text"
          name="filiere"
          placeholder="Filière"
          value={nouvelEtudiant.filiere}
          onChange={handleChange}
        />
        <input
          type="text"
          name="groupe"
          placeholder="Groupe"
          value={nouvelEtudiant.groupe}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ville"
          placeholder="Ville"
          value={nouvelEtudiant.ville}
          onChange={handleChange}
        />
        <button type="submit">Ajouter Etudiant</button>
      </form>

      <div className="filtre-filiere">
        <label htmlFor="filtre-filiere">Filtrer par filière :</label>
        <select
          id="filtre-filiere"
          value={filiereChoisie}
          onChange={(event) => setFiliereChoisie(event.target.value)}
        >
          <option value="">Toutes les filières</option>
          {filieres.map((filiere) => (
            <option key={filiere} value={filiere}>
              {filiere}
            </option>
          ))}
        </select>
      </div>

      <main id="etudiants" className="fiche">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={`${etudiant.email}-${etudiant.nompr}`}
            nompr={etudiant.nompr}
            email={etudiant.email}
            tel={etudiant.tel}
            filiere={etudiant.filiere}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onDelete={() => supprimerEtudiant(etudiant)}
            onSave={(informationsModifiees) =>
              modifierEtudiant(etudiant.email, informationsModifiees)
            }
          />
        ))}
      </main>

      <Counter />
      <Footer />
    </div>
  );
}

export default App;
