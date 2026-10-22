import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import StudentCard from './components/StudentCard.jsx'
import Footer from './components/Footer.jsx'
import studentImage from './assets/images.jpg'

const etudiants = [
  {
    prenom: "Amen Allah",
    nom: "Kadri",
    email: "kadriamen21@gmail.com",
    telephone: "55103781",
    filiere: "Génie Logiciel et Système d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2 C",
    ville: "Mahdia",
    image: studentImage
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Système d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse"
    // pas d'image
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Génie Logiciel et Système d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2"
    // pas de ville : "Non renseignée" s'affichera
  }
]

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default App