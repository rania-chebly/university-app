import './App.css'
import MyImage from './assets/ranya.jpg'

function App() {
  const etudiant ={nompr:"rania chebli",email:"chiblirania1@gmail.com",tel:"20815709",filiere:"Génie logiciel et systèmes d'information",
    groupe:"Glsi 2 B",ville:"nabeul", image :MyImage,};


  
  return (
   
    <div className="fiche">
      <img src={etudiant.image} alt="" />
      <h1>Fiche étudiant</h1>

      <p><strong>Nom & Prénom :</strong> {etudiant.nompr}</p>
      <p><strong>Email :</strong> {etudiant.email}</p>
      <p><strong>Téléphone :</strong> {etudiant.tel}</p>
      <p><strong>Filière :</strong> {etudiant.filiere}</p>
      <p><strong>Année d'étude :</strong> 2026/2027</p>
      <p><strong>Groupe :</strong> {etudiant.groupe}</p>
      <p><strong>Ville :</strong> {etudiant.ville}</p>
     <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=chiblirania1@gmail.com"
  target="_blank"
  rel="noopener noreferrer">
  Contacter
</a>
    </div>
  )
}

export default App
