import { useState } from 'react'
import './StudentCard.css'

function StudentCard({
  prenom,
  nom,
  email,
  telephone,
  filiere,
  anneeEtude,
  groupe,
  ville = "Non renseignée",
  image,
  onSupprimer,
  onModifier,
}) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false)

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles)
  }

  return (
    <div className="container">
      <div className="card">
        {image && <img src={image} alt={prenom} />}
        <h2>Fiche étudiant</h2>
        <p>Nom & Prénom : {prenom} {nom}</p>

        {coordonneesVisibles && (
          <>
            <p>Email : {email}</p>
            <p>Téléphone : {telephone}</p>
          </>
        )}

        <p>Filière : {filiere}</p>
        <p>Année : {anneeEtude}</p>
        <p>Groupe : {groupe}</p>
        <p>Ville : {ville}</p>

        <button onClick={basculerCoordonnees}>
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>
        <button onClick={() => alert(`Contacter ${prenom} : ${email}`)}>
          Contacter
        </button>
        <button onClick={onModifier}>Modifier</button>
        <button onClick={onSupprimer}>Supprimer</button>
      </div>
    </div>
  )
}

export default StudentCard