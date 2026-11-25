import './App.css';
import StudentCard from './components/StudentCard.jsx';
import StudentForm from './components/StudentForm.jsx';
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
      id: 1,
      nompr: 'ranya chebli',
      email: 'chiblirania1@gmail.com',
      tel: '20815709',
      filiere: "Génie logiciel et systèmes d'information",
      groupe: 'Glsi 2 B',
      ville: 'nabeul',
      image: MyImage,
    },
    {
      id: 2,
      nompr: 'Maram mabrouk',
      email: 'Mabroukmaram@gmail.com',
      tel: '97814214',
      filiere: "Génie logiciel et systèmes d'information",
      groupe: 'Glsi 2 B',
      ville: 'nabeul',
      image: Image1,
    },
    {
      id: 3,
      nompr: 'mohamed ben salem',
      email: 'BenSalemmohamed@gmail.com',
      tel: '25712258',
      filiere: "Génie logiciel et systèmes d'information",
      groupe: 'Glsi 2 c',
      ville: 'Mahdia',
      image: Image2,
    },
    {
      id: 4,
      nompr: 'Sami ben mohamed',
      email: 'BenmohamedSami@gmail.com',
      tel: '55280147',
      filiere: "Génie logiciel et systèmes d'information",
      groupe: 'Glsi 2 d',
      ville: 'Sousse',
      image: Image3,
    },
  ]);
  const [filiereChoisie, setFiliereChoisie] = useState('');
  const [etudiantAModifier, setEtudiantAModifier] = useState(null);

  const filieres = [...new Set(etudiants.map((etudiant) => etudiant.filiere))];
  const etudiantsFiltres = etudiants.filter(
    (etudiant) =>
      filiereChoisie === '' || etudiant.filiere === filiereChoisie
  );

  function ajouterEtudiant(nouvelEtudiant) {
    setEtudiants((precedents) => [
      ...precedents,
      {
        ...nouvelEtudiant,
        id: Date.now(),
        image: nouvelEtudiant.image || MyImage,
      },
    ]);
  }

  function supprimerEtudiant(id) {
    setEtudiants((precedents) =>
      precedents.filter((etudiant) => etudiant.id !== id)
    );
    if (etudiantAModifier?.id === id) {
      setEtudiantAModifier(null);
    }
  }

  function modifierEtudiant(informationsModifiees) {
    setEtudiants((precedents) =>
      precedents.map((e) =>
        e.id === etudiantAModifier.id
          ? { ...e, ...informationsModifiees, id: e.id }
          : e
      )
    );
    setEtudiantAModifier(null);
  }

  return (
    <div>
      <Header />
      <Navbar />

      <StudentForm
        key={etudiantAModifier?.id ?? 'nouveau'}
        etudiantAModifier={etudiantAModifier}
        onAjouter={ajouterEtudiant}
        onModifier={modifierEtudiant}
        onAnnuler={() => setEtudiantAModifier(null)}
      />

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
            key={etudiant.id}
            nompr={etudiant.nompr}
            email={etudiant.email}
            tel={etudiant.tel}
            filiere={etudiant.filiere}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onDelete={() => supprimerEtudiant(etudiant.id)}
            onModifier={() => setEtudiantAModifier(etudiant)}
          />
        ))}
      </main>



      <Footer />
    </div>
  );
}

export default App;
