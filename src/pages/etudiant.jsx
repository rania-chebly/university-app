import './etudiant.css';
import StudentCard from '../components/StudentCard.jsx';
import StudentForm from '../components/StudentForm.jsx';
import { useState } from 'react';
import MyImage from '../assets/ranya.jpg';

function Etudiant({ etudiants, setEtudiants }) {
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
    <main className="etudiants-page">
   
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

      <section id="etudiants" className="fiche">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            id={etudiant.id}
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
      </section>

    </main>
  );
}
export default Etudiant;
