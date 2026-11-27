import './detailetudiant.css';
import { Link, useParams } from 'react-router-dom';

function DetailEtudiant({ etudiants }) {
  const { id } = useParams();
  const etudiant = etudiants.find((item) => item.id === Number(id));

  if (!etudiant) {
    return (
      <section className="detail-etudiant">
        <h2>Étudiant non trouvé</h2>
        <Link className="retour-link" to="/etudiants">
          Retour à la liste des étudiants
        </Link>
      </section>
    );
  }

  return (
    <section className="detail-etudiant">
      <Link className="retour-link" to="/etudiants">
        Retour à la liste des étudiants
      </Link>
      <h2>Détails de l'étudiant</h2>
      <img
        src={etudiant.image}
        alt={`Photo de ${etudiant.nompr}`}
        className="etudiant-image"
      />
      <div className="detail-informations">
        <p><strong>Nom et prénom :</strong> {etudiant.nompr}</p>
        <p><strong>Email :</strong> <a href={`mailto:${etudiant.email}`}>{etudiant.email}</a></p>
        <p><strong>Téléphone :</strong> {etudiant.tel}</p>
        <p><strong>Filière :</strong> {etudiant.filiere}</p>
        <p><strong>Groupe :</strong> {etudiant.groupe}</p>
        <p><strong>Ville :</strong> {etudiant.ville}</p>
      </div>
    </section>
  );
}

export default DetailEtudiant;