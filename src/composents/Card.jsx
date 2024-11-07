import React from 'react';
import './index.css';

function Card({ title, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" /> {}
      <div className="card-title">{title}</div>
    </div>
  );
}

export default Card;