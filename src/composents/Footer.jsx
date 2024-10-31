import React from 'react';
import footerImage from '../assets/D_Footer.png'; 
import './index.css';


function Footer() {
  return (
    <footer>
      <img src={footerImage} alt="Footer de Kasa" style={{ width: '100%', height: 'auto' }} />
      
    </footer>
  );
}

export default Footer;
