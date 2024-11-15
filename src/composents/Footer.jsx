import React from 'react';
import footerlogo from '../assets/LOGO (1).png'; 
import './index.css';


function Footer() {
  return (
    <footer>
      <div className="foot">
      <img src={footerlogo} alt="logo de Kasa"  />
      <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
