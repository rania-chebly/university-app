import './App.css';
import StudentCard  from  "./components/StudentCard.jsx";
import Header  from  "./components/Header.jsx";
import Footer  from  './components/Footer.jsx'
import Navbar  from  './components/Navbar.jsx'
import MyImage from './assets/ranya.jpg'
import Image1 from './assets/image1.jpg'
import Image2 from './assets/image2.jpg'
import Image3 from './assets/image3.jpg'
const etudiants =[{nompr:"ranya chebli",email:"chiblirania1@gmail.com",tel:"20815709",filiere:"Génie logiciel et systèmes d'information",
    groupe:"Glsi 2 B",ville:"nabeul", image :MyImage,},
  {nompr:"Maram mabrouk",email:"Mabroukmaram@gmail.com",tel:"97814214",filiere:"Génie logiciel et systèmes d'information",
    groupe:"Glsi 2 B",ville:"nabeul", image :Image1,},{nompr:"mohamed ben salem",email:"BenSalemmohamed@gmail.com",tel:"25712258",filiere:"Génie logiciel et systèmes d'information",
    groupe:"Glsi 2 c",ville:"Mahdia", image :Image2,},{nompr:"Sami ben mohamed",email:"BenmohamedSami@gmail.com",tel:"55280147",filiere:"Génie logiciel et systèmes d'information",
    groupe:"Glsi 2 d",ville:"Sousse", image :Image3,}];


function App(){

return (
  <div>
    <Header />

    <Navbar />

    <main id="etudiants" className="fiche">
      {etudiants.map((etudiant) => (
        <StudentCard
          key={etudiant.email}
          nompr={etudiant.nompr}
          email={etudiant.email}
          tel={etudiant.tel}
          filiere={etudiant.filiere}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          image={etudiant.image}
        />
      ))}
    </main>

    <Footer />
  </div>
);

   
}

export default App;


