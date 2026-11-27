
import { useState } from 'react';
import { Link } from 'react-router-dom';

function StudentCard(props) {
  const [showStudent, setShowStudent] = useState(false);

  return (
    <div className="card">
      <img src={props.image} alt={`Photo de ${props.nompr}`} />
      <h1>Fiche étudiant</h1>
      <button
        type="button"
        onClick={() => setShowStudent((visible) => !visible)}
      >
        {showStudent
          ? 'Masquer l’email et le téléphone'
          : 'Afficher l’email et le téléphone'}
      </button>
      <p>
        <strong>Nom &amp; Prénom :</strong> {props.nompr}
      </p>
      {showStudent && (
        <p>
          <strong>Email :</strong> {props.email}
        </p>
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
        {showStudent && (
          <p>
            <strong>Téléphone :</strong> {props.tel}
          </p>
        )}
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
        <Link className="detail-link" to={`/etudiants/${props.id}`}>
          Voir les détails
        </Link>
        {showStudent && <a href={`mailto:${props.email}`}>Contacter</a>}
      </div>
    </div>
  );
}

export default StudentCard;
