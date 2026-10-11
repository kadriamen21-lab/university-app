import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const Nom = "Kadri Amen Allah"
const Email = "kadriamen21@gmail.com"
const Telephone = "55103781"
const Filiere = "Génie Logiciel et Système d'Information"
const AnneeEtude = "2026-2027"
const Groupe = "GLSI2 C"
const Ville = "Mahdia"

function App() {
  return (
    <div>
      <img src="/images.jpg" alt="Photo de profil" width="100" height="100" />
      <div>
        <label>Nom & Prénom : </label>
        <span>{Nom}</span>
      </div>
      <div>
        <label>Email : </label>
        <span>{Email}</span>
      </div>
      <div>
        <label>Téléphone : </label>
        <span>{Telephone}</span>
      </div>
      <div>
        <label>Filière : </label>
        <span>{Filiere}</span>
      </div>
      <div>
        <label>Année d'étude : </label>
        <span>{AnneeEtude}</span>
      </div>
      <div>
        <label>Groupe : </label>
        <span>{Groupe}</span>
      </div>
      <div>
        <label>Ville : </label>
        <span>{Ville}</span>
      </div>
    </div>
  )
}

export default App