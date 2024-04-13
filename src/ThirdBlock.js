import React, { useState, useEffect } from 'react';

const ThirdBlock = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['1.jpg', '2.jpg', '3.jpg']; // Путь к изображениям

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]); // Добавляем images.length в зависимости useEffect

  return (
    <div className="third-block">
      <h2>ИНДИВИДУАЛЬНОЕ ЖИЛИЩНОЕ СТРОИТЕЛЬСТВО</h2>
      {/* Выводим текущее изображение с помощью индекса */}
      <div className="background-image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}></div>
    </div>
  );
};

export default ThirdBlock;
