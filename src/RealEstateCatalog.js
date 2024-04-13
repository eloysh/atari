import React, { useState } from 'react';
import ConstructionCard from './ConstructionCard'; // Проверьте путь к этому компоненту
import ConstructionDetailsModal from './ConstructionDetailsModal'; // Проверьте путь к этому компоненту
import propertiesData from './propertiesData'; // Проверьте путь к файлу с данными о недвижимости

import './RealEstateCatalog.css';
const RealEstateCatalog = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleCardClick = (property) => {
    setSelectedProperty(property);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
    setIsOpen(false);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? selectedProperty.images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % selectedProperty.images.length);
  };

  return (
    <div className="real-estate-catalog">
      <h1>Каталог недвижимости</h1>
      <div className="property-list">
        {propertiesData.map((property) => (
          <ConstructionCard key={property.id} property={property} onClick={handleCardClick} />
        ))}
      </div>
      {isOpen && (
        <ConstructionDetailsModal
          property={selectedProperty}
          onClose={handleCloseModal}
          imageIndex={imageIndex}
          onPrevImage={handlePrevImage}
          onNextImage={handleNextImage}
        />
      )}
    </div>
  );
};

export default RealEstateCatalog;
