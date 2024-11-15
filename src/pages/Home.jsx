import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../composents/Banner';
import Card from '../composents/Card'; 
import bannerImage from '../assets/Image source 1 (1).png';
import './index.css';

function Home() {
  const [logements, setLogements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setLogements(data))
      .catch(error => console.error('Fetch error:', error)); 
  }, []);

  return (
    <div>
      <div className="Banner">
        <Banner 
          image={bannerImage} 
          altText="Bienvenue sur notre site de propriétés" 
          text="Chez vous, partout et ailleurs" 
        />
      </div>
      <div className="property-list">
        {logements.map(property => (
          <Card
            key={property.id}
            title={property.title}
            image={property.cover}
            onClick={() => navigate(`/logement/${property.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
