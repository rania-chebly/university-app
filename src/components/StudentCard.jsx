
import { useState } from 'react';

function StudentCard(props) {
  const [showContact, setShowContact] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [informations, setInformations] = useState({
    nompr: '',
    email: '',
    tel: '',
    filiere: '',
    groupe: '',
    ville: '',
  });

  const champs = [
    { name: 'nompr', label: 'Nom et prénom', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'tel', label: 'Téléphone', type: 'tel' },
    { name: 'filiere', label: 'Filière', type: 'text' },
    { name: 'groupe', label: 'Groupe', type: 'text' },
    { name: 'ville', label: 'Ville', type: 'text' },
  ];

  function commencerModification() {
    setInformations({
      nompr: props.nompr,
      email: props.email,
      tel: props.tel,
      filiere: props.filiere,
      groupe: props.groupe,
      ville: props.ville,
    });
    setIsEditing(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInformations((precedentes) => ({
      ...precedentes,
      [name]: value,
    }));
  }

  function enregistrerModification(event) {
    event.preventDefault();
    props.onSave(informations);
    setIsEditing(false);
  }

  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h1>Fiche étudiant</h1>
      {!isEditing && (
        <>
          <p>
            <strong>Nom &amp; Prénom :</strong> {props.nompr}
          </p>
          <button
            type="button"
            onClick={() => setShowContact((visible) => !visible)}
          >
            {showContact ? 'Masquer les coordonnées' : 'Afficher les coordonnées'}
          </button>
          <button type="button" onClick={commencerModification}>
            Modifier les informations
          </button>
        </>
      )}
      <button
        type="button"
        className="supprimer-button"
        onClick={props.onDelete}
      >
        Supprimer étudiant
      </button>
      {isEditing && (
        <form className="modification-form" onSubmit={enregistrerModification}>
          {champs.map((champ) => (
            <label key={champ.name}>
              {champ.label}
              <input
                type={champ.type}
                name={champ.name}
                value={informations[champ.name]}
                onChange={handleChange}
                required={['nompr', 'email', 'tel'].includes(champ.name)}
              />
            </label>
          ))}
          <button type="submit">Enregistrer</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Annuler
          </button>
        </form>
      )}
      {!isEditing && showContact && (
        <div>
          <p>
            <strong>Email :</strong> {props.email}
          </p>
          <p>
            <strong>Téléphone :</strong> {props.tel}
          </p>
          <p>
            <strong>Filière :</strong> {props.filiere}
          </p>
          <p>
            <strong>Année d'étude :</strong> 2026/2027
          </p>
          <p>
            <strong>Groupe :</strong> {props.groupe}
          </p>
          <p>
            <strong>Ville :</strong> {props.ville}
          </p>
          <a href={`mailto:${props.email}`}>Contacter</a>
        </div>
      )}
    </div>
  );
}

export default StudentCard;
