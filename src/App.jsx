import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import StudentCard from './components/StudentCard.jsx'
import Footer from './components/Footer.jsx'
import studentImage from './assets/images.jpg'
import studentImage2 from './assets/images 2.jpg'
import StudentForm from './components/StudentForm.jsx'

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Amen Allah",
      nom: "Kadri",
      email: "kadriamen21@gmail.com",
      telephone: "55103781",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 2 C",
      ville: "Mahdia",
      image: studentImage
    },
    {
      id: 2,
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sousse",
      image: studentImage2
    },
    {
      id: 3,
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Tunis",
      image: studentImage2
    }
  ])
  const [recherche, setRecherche] = useState("")
  const [etudiantAModifier, setEtudiantAModifier] = useState(null)

  // Ajouter un étudiant
  function ajouterEtudiant(nouvelEtudiant) {
    if (etudiants.some((e) => e.email === nouvelEtudiant.email)) {
      alert("Cet étudiant existe déjà.")
      return
    }

    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(),
    }

    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId])
  }

  // filter parcourt le tableau et crée un nouveau tableau qui répond à la condition
  function supprimerEtudiant(id) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((e) => e.id !== id)
    )
    // si on supprime l'étudiant en cours de modification, on annule la modification
    if (etudiantAModifier && etudiantAModifier.id === id) {
      setEtudiantAModifier(null)
    }
  }

  // Cliquer sur "Modifier" : le formulaire se remplit avec cet étudiant
  function modifierEtudiant(etudiant) {
    setEtudiantAModifier(etudiant)
  }

  // Enregistrer la modification de tous les champs
  function enregistrerModification(etudiantModifie) {
    const emailPris = etudiants.some(
      (e) => e.email === etudiantModifie.email && e.id !== etudiantAModifier.id
    )

    if (emailPris) {
      alert("Cet email est déjà utilisé par un autre étudiant.")
      return
    }

    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.map((etudiant) =>
        etudiant.id === etudiantAModifier.id
          ? { ...etudiantModifie, id: etudiant.id } // on conserve l'id
          : etudiant
      )
    )
    setEtudiantAModifier(null)
  }

  const etudiantsFiltres = etudiants.filter((e) =>
    e.filiere.toLowerCase().includes(recherche.toLowerCase())
  )

  return (
    <div>
      <Header />
      <Navbar />

      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
        onAjouterEtudiant={ajouterEtudiant}
        onModifierEtudiant={enregistrerModification}
        etudiantAModifier={etudiantAModifier}
      />

      <div className="actions">
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
            key={etudiant.id}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onSupprimer={() => supprimerEtudiant(etudiant.id)}
            onModifier={() => modifierEtudiant(etudiant)}
          />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default App