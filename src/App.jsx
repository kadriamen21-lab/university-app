import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import StudentCard from './components/StudentCard.jsx'
import Footer from './components/Footer.jsx'
import studentImage from './assets/images.jpg'
import studentImage2 from './assets/images 2.jpg'
import studentImage3 from './assets/images 1.jpg'

function App() {
  const [etudiants, setEtudiants] = useState([
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
      ville: "Sousse",
      image: studentImage2
    },
    {
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "Génie Logiciel et Système d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      image: studentImage3
    }
  ])
  const [recherche, setRecherche] = useState("")
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      prenom: "Yassine",
      nom: "Ben Salem",
      email: "yassine.bensalem@gmail.com",
      telephone: "+216 44 444 444",
      filiere: "Licence Computer Science",
      anneeEtude: "1ère année",
      groupe: "LCS 1",
      ville: "Sfax"
    }
    if (etudiants.some((e) => e.email === nouvelEtudiant.email)) {
      alert("Cet étudiant existe déjà.")
      return
    }
    setEtudiants([...etudiants, nouvelEtudiant])
  }
  function supprimerEtudiant(email) {
    setEtudiants(etudiants.filter((e) => e.email !== email))
  }
  function modifierPrenom(email, nouveauPrenom) {
    setEtudiants(
      etudiants.map((e) =>
        e.email === email ? { ...e, prenom: nouveauPrenom } : e
      )
    )
  }
  const etudiantsFiltres = etudiants.filter((e) =>
    e.filiere.toLowerCase().includes(recherche.toLowerCase())
  )

  return (
    <div>
      <Header />
      <Navbar />
      <div className="actions">
        <button className="njk" onClick={ajouterEtudiant}>Ajouter un étudiant</button>
        <input
          type="text"
          placeholder="Filtrer par filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
      </div>

      <div className="container">
        {etudiantsFiltres.length === 0 && <p>Aucun étudiant trouvé.</p>}
        {etudiantsFiltres.map((etudiant) => (
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
            onSupprimer={() => supprimerEtudiant(etudiant.email)}
            onModifier={(nouveau) => modifierPrenom(etudiant.email, nouveau)}
          />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default App