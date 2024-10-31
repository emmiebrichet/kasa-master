import React from 'react';
import './index.css';
import E404 from '../assets/404.png'; 
import { Link } from 'react-router-dom';


function Error() {
  return (

    <div  className= "container">
      <img src={E404} alt="erreur 404 " />
      <h1>Oups! La page que vous demandez n'existe pas. </h1>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default  Error;
