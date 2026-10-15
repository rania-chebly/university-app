

function StudentCard(props) {
 
  return (
   
    <div className="card">
      <img src={props.image} alt="" />
      <h1>Fiche étudiant</h1>

      <p><strong>Nom & Prénom :</strong> {props.nompr}</p>
      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Téléphone :</strong> {props.tel}</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> 2026/2027</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {props.ville}</p>
    <button> <a href={`mailto:${props.email}`}
  target="_blank"
  rel="noopener noreferrer">
  Contacter
</a></button>
    </div>
  )
}

export default StudentCard
