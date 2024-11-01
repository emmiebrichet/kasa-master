import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../composents/Banner'; // Fixed the spelling from 'composents' to 'components'
import Card from '../composents/Card'; // Fixed the spelling from 'composents' to 'components'
import bannerImage from '../assets/Section1.png';
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
      .catch(error => console.error('Fetch error:', error)); // Added error handling
  }, []);

  return (
    <div>
      <div className="Banner">
        <Banner image={bannerImage} altText="Bienvenue sur notre site de propriétés" />
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

export default Home; // Don't forget to export your component

