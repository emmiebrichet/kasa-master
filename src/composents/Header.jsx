import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import './index.css'; 

function Header() {
  const location = useLocation();

  return (
    <header>
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
