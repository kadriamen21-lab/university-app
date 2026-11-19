import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAjouterEtudiant, onModifierEtudiant, etudiantAModifier }) {
  const [nom, setNom] = useState(etudiantAModifier ? etudiantAModifier.nom : "");
  const [prenom, setPrenom] = useState(etudiantAModifier ? etudiantAModifier.prenom : "");
  const [email, setEmail] = useState(etudiantAModifier ? etudiantAModifier.email : "");
  const [telephone, setTelephone] = useState(etudiantAModifier ? etudiantAModifier.telephone : "");
  const [filiere, setFiliere] = useState(etudiantAModifier ? etudiantAModifier.filiere : "");
  const [anneeEtude, setAnneeEtude] = useState(etudiantAModifier ? etudiantAModifier.anneeEtude : "");
  const [groupe, setGroupe] = useState(etudiantAModifier ? etudiantAModifier.groupe : "");
  const [ville, setVille] = useState(etudiantAModifier ? etudiantAModifier.ville : "");
  const [image, setImage] = useState(etudiantAModifier ? etudiantAModifier.image : "");
  const [erreurs, setErreurs] = useState({});

  function viderChamps() {
    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnneeEtude("");
    setGroupe("");
    setVille("");
    setImage("");
    setErreurs({});
  }

  function validerFormulaire() {
    const nouvellesErreurs = {};

    if (nom.trim() === "") nouvellesErreurs.nom = "Le nom est obligatoire.";
    if (prenom.trim() === "") nouvellesErreurs.prenom = "Le prénom est obligatoire.";

    if (email.trim() === "") {
      nouvellesErreurs.email = "L'email est obligatoire.";
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      nouvellesErreurs.email = "L'email n'est pas valide.";
    }

    if (telephone.trim() === "") {
      nouvellesErreurs.telephone = "Le téléphone est obligatoire.";
    } else if (!/^[+\d\s]{8,}$/.test(telephone.trim())) {
      nouvellesErreurs.telephone = "Le téléphone n'est pas valide (8 chiffres minimum).";
    }

    if (filiere === "") nouvellesErreurs.filiere = "Choisir une filière.";
    if (anneeEtude.trim() === "") nouvellesErreurs.anneeEtude = "L'année d'étude est obligatoire.";
    if (groupe.trim() === "") nouvellesErreurs.groupe = "Le groupe est obligatoire.";
    if (ville.trim() === "") nouvellesErreurs.ville = "La ville est obligatoire.";

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validerFormulaire()) {
      return;
    }

    const nouvelEtudiant = {
      nom: nom.trim(),
      prenom: prenom.trim(),
      email: email.trim(),
      telephone: telephone.trim(),
      filiere: filiere,
      anneeEtude: anneeEtude.trim(),
      groupe: groupe.trim(),
      ville: ville.trim(),
      image: image,
    };

    if (etudiantAModifier) {
      onModifierEtudiant({ ...etudiantAModifier, ...nouvelEtudiant });
    } else {
      onAjouterEtudiant(nouvelEtudiant);
      e.target.reset();
      viderChamps();
    }
  }

  function handleReset() {
    viderChamps();
  }

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="student-form"
      // noValidate
    >
      <h2>{etudiantAModifier ? "Modifier un étudiant" : "Ajouter un étudiant"}</h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Saisir votre nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        {erreurs.nom && <span className="erreur">{erreurs.nom}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          placeholder="Saisir votre prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        {erreurs.prenom && <span className="erreur">{erreurs.prenom}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Saisir votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {erreurs.email && <span className="erreur">{erreurs.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Téléphone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="Saisir votre numéro de téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        {erreurs.telephone && <span className="erreur">{erreurs.telephone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          name="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
        >
          <option value="">Choisir une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
        </select>
        {erreurs.filiere && <span className="erreur">{erreurs.filiere}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="anneeEtude">Année d'étude :</label>
        <input
          type="text"
          id="anneeEtude"
          name="anneeEtude"
          placeholder="Ex : 2ème année"
          value={anneeEtude}
          onChange={(e) => setAnneeEtude(e.target.value)}
        />
        {erreurs.anneeEtude && <span className="erreur">{erreurs.anneeEtude}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text"
          id="groupe"
          name="groupe"
          placeholder="Ex : GLSI 2"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
        />
        {erreurs.groupe && <span className="erreur">{erreurs.groupe}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          name="ville"
          placeholder="Saisir votre ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />
        {erreurs.ville && <span className="erreur">{erreurs.ville}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="image">Image :</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(e) => {
            const fichier = e.target.files[0];
            if (fichier) {
              setImage(URL.createObjectURL(fichier));
            }
          }}
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn-submit">
          {etudiantAModifier ? "Enregistrer" : "Ajouter"}
        </button>
        <button type="reset" className="btn-reset">
          Réinitialiser
        </button>
      </div>
    </form>
  );
}

export default StudentForm;