
import { useState } from 'react';

function StudentCard(props) {
  const [showStudent, setShowStudent] = useState(false);

  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h1>Fiche étudiant</h1>
      <button
        type="button"
        onClick={() => setShowStudent((visible) => !visible)}
      >
        {showStudent ? 'Masquer le nom et l’email' : 'Afficher le nom et l’email'}
      </button>
      {showStudent && (
        <>
          <p>
            <strong>Nom &amp; Prénom :</strong> {props.nompr}
          </p>
          <p>
            <strong>Email :</strong> {props.email}
          </p>
        </>
      )}
      <button type="button" onClick={props.onModifier}>
        Modifier les informations
      </button>
      <button
        type="button"
        className="supprimer-button"
        onClick={props.onDelete}
      >
        Supprimer étudiant
      </button>
      <div>
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
        {showStudent && <a href={`mailto:${props.email}`}>Contacter</a>}
      </div>
    </div>
  );
}

export default StudentCard;
