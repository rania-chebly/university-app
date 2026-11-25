import { useState } from 'react';
const ETUDIANT_INITIAL = {
  nompr: '',
  email: '',
  tel: '',
  filiere: '',
  groupe: '',
  ville: '',
  image: null,
};

function StudentForm({ etudiantAModifier, onAjouter, onModifier, onAnnuler }) {
  const [etudiant, setEtudiant] = useState({
    ...ETUDIANT_INITIAL,
    ...(etudiantAModifier ?? {}),
  });
  const [erreurs, setErreurs] = useState({});
  function handleChange(event) {
    const { name, value, files, type } = event.target;
    if (type === 'file') {
      const fichier = files?.[0];
      if (fichier) {
        setEtudiant((precedent) => ({
          ...precedent,
          image: URL.createObjectURL(fichier),
        }));
      }
      return;
    }

    setEtudiant((precedent) => ({
      ...precedent,
      [name]: value,
    }));
    setErreurs((precedentes) => ({ ...precedentes, [name]: undefined }));
  }

  function validerFormulaire() {
    const nouvellesErreurs = {};

    if (!etudiant.nompr.trim()) {
      nouvellesErreurs.nompr = 'Le nom et prénom sont obligatoires.';
    }
    if (!etudiant.email.trim()) {
      nouvellesErreurs.email = "L'adresse email est obligatoire.";
    }else if (
    !etudiant.email.includes("@") ||
    !etudiant.email.includes(".") ||
    etudiant.email.startsWith("@") ||
    etudiant.email.endsWith("@") ||
    etudiant.email.startsWith(".") ||
    etudiant.email.endsWith(".") ||
    etudiant.email.includes(" ") ||
    etudiant.email.indexOf("@") !== etudiant.email.lastIndexOf("@") ||
    etudiant.email.indexOf(".") < etudiant.email.indexOf("@")
) {
    nouvellesErreurs.email = "Le format de l'email est invalide.";
}
    if (!etudiant.tel.trim()) {
      nouvellesErreurs.tel = 'Le téléphone est obligatoire.';
    } else if (
    etudiant.tel.length !== 8 ||
    isNaN(etudiant.tel)){
      nouvellesErreurs.tel = 'Le téléphone doit contenir 8 à 15 caractères valides.';
    }
    if (!etudiant.filiere) {
      nouvellesErreurs.filiere = 'Choisissez une filière.';
    }
    if (!etudiant.groupe.trim()) {
    nouvellesErreurs.groupe = "Le groupe est obligatoire.";}
    if (!etudiant.ville.trim()) {
    nouvellesErreurs.ville = "La ville est obligatoire.";
}
   if (!etudiant.image) {
    nouvellesErreurs.image = "L'image est obligatoire.";
}
    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!validerFormulaire()) return;
    if (etudiantAModifier) {
      onModifier(etudiant);
    } else {
      onAjouter(etudiant);
      setEtudiant({ ...ETUDIANT_INITIAL });
      setErreurs({});
    }
  }
  const modeModification = Boolean(etudiantAModifier);
  return (
    <section className="formulaire-section">
      <h2>{modeModification ? "Modifier l'étudiant" : 'Ajouter un étudiant'}</h2>
      <form onSubmit={handleSubmit} className="ajout-form" noValidate>
        <label htmlFor="nompr">Nom et prénom</label>
        <input
          id="nompr"
          type="text"
          name="nompr"
          placeholder="Nom et prénom"
          value={etudiant.nompr ?? ''}
          onChange={handleChange}
          required
        />
        {erreurs.nompr && <span className="champ-erreur">{erreurs.nompr}</span>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={etudiant.email ?? ''}
          onChange={handleChange}
          required
        />
        {erreurs.email && <span className="champ-erreur">{erreurs.email}</span>}

        <label htmlFor="tel">Téléphone</label>
        <input
          id="tel"
          type="tel"
          name="tel"
          placeholder="Téléphone"
          value={etudiant.tel ?? ''}
          onChange={handleChange}
          required
        />
        {erreurs.tel && <span className="champ-erreur">{erreurs.tel}</span>}
        <label htmlFor="filiere">Filière</label>
        <select
          id="filiere"
          name="filiere"
          value={etudiant.filiere ?? ''}
          onChange={handleChange}
          required
        >
          <option value="">Choisir une filière</option>
          <option value="Génie logiciel et systèmes d'information">
            Génie logiciel et systèmes d'information
          </option>
          <option value="Informatique de gestion">Informatique de gestion</option>
          <option value="Réseaux et systèmes">Réseaux et systèmes</option>
        </select>
        {erreurs.filiere && <span className="champ-erreur">{erreurs.filiere}</span>}

        <label htmlFor="groupe">Groupe</label>
        <input
          id="groupe"
          type="text"
          name="groupe"
          placeholder="Groupe"
          value={etudiant.groupe ?? ''}
          onChange={handleChange} 
        />{erreurs.groupe && (
     <span className="champ-erreur">{erreurs.groupe}</span>
)}
        <label htmlFor="ville">Ville</label>
        <input
          id="ville"
          type="text"
          name="ville"
          placeholder="Ville"
          value={etudiant.ville ?? ''}
          onChange={handleChange}
        />{erreurs.ville && (
    <span className="champ-erreur">{erreurs.ville}</span>
)}
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        {etudiant.image && (
          <img
            className="form-image-preview"
            src={etudiant.image}
            alt="Aperçu de l'étudiant"
          />
        )} {erreurs.image && (
    <span className="champ-erreur">{erreurs.image}</span>
)}
        <div className="form-actions">
          <button type="submit">
            {modeModification ? 'Enregistrer les modifications' : 'Ajouter étudiant'}
          </button>
          {modeModification && (
            <button type="button" className="annuler-button" onClick={onAnnuler}>
              Annuler
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default StudentForm;
