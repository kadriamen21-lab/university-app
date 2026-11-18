import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAjouterEtudiant }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [anneeEtude, setAnneeEtude] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");

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
  }

  function handleSubmit(e) {
    e.preventDefault(); 

    const nouvelEtudiant = {
      nom: nom,
      prenom: prenom,
      email: email,
      telephone: telephone,
      filiere: filiere,
      anneeEtude: anneeEtude,
      groupe: groupe,
      ville: ville,
      image: image,
    };

    console.log("Nouvel étudiant ajouté :", nouvelEtudiant);

    onAjouterEtudiant(nouvelEtudiant);

    e.target.reset(); 
    viderChamps();
  }

  function handleReset() {
    viderChamps();
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="student-form">
      <h2>Ajouter un étudiant</h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Saisir votre nom"
          required
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          placeholder="Saisir votre prénom"
          required
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Saisir votre email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Téléphone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="Saisir votre numéro de téléphone"
          required
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          name="filiere"
          required
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
        >
          <option value="">Choisir une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="anneeEtude">Année d'étude :</label>
        <input
          type="text"
          id="anneeEtude"
          name="anneeEtude"
          placeholder="Ex : 1ère année"
          required
          value={anneeEtude}
          onChange={(e) => setAnneeEtude(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text"
          id="groupe"
          name="groupe"
          placeholder="Ex : G1"
          required
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          name="ville"
          placeholder="Saisir votre ville"
          required
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />
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
          Ajouter
        </button>
        <button type="reset" className="btn-reset">
          Réinitialiser
        </button>
      </div>
    </form>
  );
}

export default StudentForm;