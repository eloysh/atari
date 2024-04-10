import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property, onTitleClick, onCloseForm }) => {
  const handleTitleClick = () => {
    onTitleClick(property);
  };

  const handleCloseClick = () => {
    onCloseForm();
  };

  return (
    <div className="property-card">
      {/* Displaying the first image */}
      <img className="property-image" src={property.image1} alt={property.title} onClick={handleTitleClick} />

      {/* Displaying property details */}
      <div className="property-details">
        <h3 onClick={handleTitleClick}>{property.title}</h3>
        <p>{property.description}</p>
        <p>Цена: {property.price}</p>
        
      </div>
    </div>
  );
};

export default PropertyCard;
