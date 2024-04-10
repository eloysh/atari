// PropertyDetailsForm.js
import React from 'react';
import './PropertyDetailsForm.css';

const PropertyDetailsForm = ({ property, onCloseForm }) => {
  const handleCloseClick = () => {
    onCloseForm();
  };

  return (
    <div className="property-details-form">
      <button className="close-button" onClick={handleCloseClick}>×</button>
      <h2>{property.title}</h2>
      <img src={property.image1} alt="Property 1" />
      <img src={property.image2} alt="Property 2" />
      <img src={property.image3} alt="Property 3" />
      <img src={property.image4} alt="Property 4" />
      <p>{property.description}</p>
      <p>Цена: {property.price}</p>
      <p>Местоположение: {property.location}</p>
      <p>Квадратура: {property.squaremeter}</p>
      <p>Информация о доме: {property.description2}</p>
    </div>
  );
};

export default PropertyDetailsForm;
