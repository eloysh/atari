import React from 'react';

const ConstructionDetailsModal = ({ property, onClose, imageIndex, onPrevImage, onNextImage }) => {
  return (
    <div className="construction-details-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{property.title}</h2>
        <div className="gallery">
          <img src={property.images[imageIndex]} alt={property.title} />
          <button className="prev-btn" onClick={onPrevImage}>{'<'}</button>
          <button className="next-btn" onClick={onNextImage}>{'>'}</button>
        </div>
        <div className="property-info">
          <p>Статус: {property.status}</p>
          <p>Сроки строительства: {property.constructionTimeline}</p>
          <p>Количество квартир: {property.numberOfApartments}</p>
          {/* Дополнительная информация о недвижимости */}
        </div>
        <p>{property.description}</p>
        <p>{property.price}</p>
      </div>
    </div>
  );
};

export default ConstructionDetailsModal;
