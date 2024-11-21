import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Collapse from '../composents/Collapse';
import './index.css';
import defaultHostImage from '../assets/Host.png';

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/properties/${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        navigate('/error'); // Redirection en cas d'erreur
      }
    };
    fetchData();
  }, [id, navigate]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.pictures.length - 1 : prevIndex - 1
    );
  };

  // Retourne `null` si les données ne sont pas encore chargées
  if (!data) {
    return null;
  }

  return (
    <div className="logement-page">
      <div className="logement-container">
        <div className="carrousel">
          <div className="image-container">
            {data.pictures && data.pictures.length > 0 ? (
              <>
                <img
                  src={data.pictures[currentImageIndex]}
                  alt={`Vue ${currentImageIndex + 1}`}
                  className="carousel-image"
                />
                {data.pictures.length > 1 && (
                  <>
                    <button className="prev-button" onClick={prevImage} aria-label="Image précédente">
                      <FontAwesomeIcon icon={faChevronLeft} className="icon" />
                    </button>
                    <button className="next-button" onClick={nextImage} aria-label="Image suivante">
                      <FontAwesomeIcon icon={faChevronRight} className="icon" />
                    </button>
                    <p className="image-counter">
                      {currentImageIndex + 1} / {data.pictures.length}
                    </p>
                  </>
                )}
              </>
            ) : (
              <p>Aucune image disponible</p>
            )}
          </div>
        </div>
        <div className="text">
          {}
          <div className="details-and-host">
            <div className="details">
              <h2>{data.title}</h2>
              <p>{data.location}</p>
            </div>
            <div className="host">
              <div className="hostname">
              {data.host?.name ? (
                <>
                  <p>{data.host.name.split(' ')[0]}</p>
                 <p>{data.host.name.split(' ').slice(1).join(' ')}</p>
                </>
              ) : (
              <p>Nom non disponible</p>
              )}
            </div>
             <img
              src={data.host?.picture || defaultHostImage}
              alt={`Photo de l'hôte`}
            />
          </div>
        </div>
        {}
        <div className="tags-and-rating">
          <div className="tags">
            {data.tags && data.tags.length > 0 ? (
              data.tags.map((tag, index) => (
                <span key={index} className="tag-item">{tag}</span>
              ))
            ) : (
             <p>Aucun tag disponible</p>
            )}
          </div>
          <div className="logement-rating">
            {[...Array(5)].map((_, index) => (
              <span
               key={index}
                className={index < data.rating ? 'star filled' : 'star'}
              >
                &#9733;
            </span>
            ))}
          </div>
        </div>
         {}
          <div className="host-and-rating">
            <div className="host-mobile">
             <div className="hostname-mobile">
                {data.host?.name ? (
                  <>
                    <p>{data.host.name.split(' ')[0]}</p>
                   <p>{data.host.name.split(' ').slice(1).join(' ')}</p>
                  </>
                ) : (
                  <p>Nom non disponible</p>
                )}
              </div>
              <img
                src={data.host?.picture || defaultHostImage}
                alt={`Photo de l'hôte`}
             />
            </div>
            <div className="logement-rating-mobile">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={index < data.rating ? 'star filled' : 'star'}
                  >
                 &#9733;
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="tabs">
          <Collapse title="Description">
            <p>{data.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <div className="equipments-container">
              {data.equipments ? (
                data.equipments.map((equipement, index) => (
                  <p key={index}>{equipement}</p>
                ))
              ) : (
                <p>Aucun équipement disponible</p>
              )}
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Logement;
