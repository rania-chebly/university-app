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

  const [nouvelEtudiant, setNouvelEtudiant] = useState({
    nompr: '',
    email: '',
    tel: '',
    filiere: '',
    groupe: '',
    ville: '',
    image: null,
  });
  const [filiereChoisie, setFiliereChoisie] = useState('');

  const filieres = [...new Set(etudiants.map((etudiant) => etudiant.filiere))];
  const etudiantsFiltres = etudiants.filter(
    (etudiant) =>
      filiereChoisie === '' || etudiant.filiere === filiereChoisie
  );

  function handleChange(event) {
    const { name, value } = event.target;
    const fieldValue = event.target.type === 'file'
      ? event.target.files[0]
      : value;

    setNouvelEtudiant((precedent) => ({
      ...precedent,
      [name]: fieldValue,
    }));
  }

  function ajouterEtudiant(event) {
    event.preventDefault();

    if (!nouvelEtudiant.nompr || !nouvelEtudiant.email || !nouvelEtudiant.tel) {
      return;
    }

    setEtudiants((precedents) => [
      ...precedents,
      {
        ...nouvelEtudiant,
        id: Math.max(0, ...precedents.map((etudiant) => etudiant.id)) + 1,
        image: nouvelEtudiant.image
          ? URL.createObjectURL(nouvelEtudiant.image)
          : MyImage,
      },
    ]);
    setNouvelEtudiant({
      nompr: '',
      email: '',
      tel: '',
      filiere: '',
      groupe: '',
      ville: '',
      image: null,
    });
  }

  function supprimerEtudiant(id) {
    setEtudiants((precedents) =>
      precedents.filter((etudiant) => etudiant.id !== id)
    );
  }
  function modifierEtudiant(id, informationsModifiees) {
    setEtudiants((precedents) =>
      precedents.map((e) =>
        e.id === id ? { ...e, ...informationsModifiees } : e
      )
    );
  }
  return (
    <div>
      <Header />
      <Navbar />

      <StudentForm
        nouvelEtudiant={nouvelEtudiant}
        onChange={handleChange}
        onSubmit={ajouterEtudiant}
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
            onSave={(informationsModifiees) =>
              modifierEtudiant(etudiant.id, informationsModifiees)
            }
          />
        ))}
      </main>


      <Footer />
    </div>
  );
}

export default App;
