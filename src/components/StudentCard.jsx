import './StudentCard.css'

function StudentCard(props) {
  // Props par défaut : valeur utilisée si l'info n'est pas fournie
  const ville = props.ville || "Non renseignée"

  return (
    <div className="card">
      {props.image && <img src={props.image} alt="Photo de l'étudiant" />}

      <h1>Fiche étudiant</h1>

      <p><strong>Nom & Prénom :</strong> {props.prenom} {props.nom}</p>
      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Téléphone :</strong> {props.telephone}</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année :</strong> {props.anneeEtude}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {ville}</p>

      <button>Contacter</button>
    </div>
  )
}

export default StudentCard