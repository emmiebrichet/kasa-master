import React from 'react';
import './index.css';

function Banner({ image, altText, text }) {
  return (
    <div className="banner">
      <img src={image} alt={altText} className="banner-image" />
      <div className="banner-text">
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default Banner;
