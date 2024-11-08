import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Error from './pages/Error';
import Header from './composents/Header';
import Footer from './composents/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/"  element={<Home />} />
        
        {/* Route pour la page à propos */}
        <Route path="/about" element={<About />} />
        
        {/* Route pour la page de logement avec un paramètre d'ID */}
        <Route path="/logement/:id" element={<Logement />} /> {/* Remarque l'ajout de :id */}
        
        {/* Route pour gérer les erreurs (404 ou autres) */}
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;