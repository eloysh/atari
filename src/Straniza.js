import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Straniza.css'; // Подключаем файл стилей для третьего блока
import './ThirdBlock.css'; // Подключаем файл стилей для третьего блока


const Straniza = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState('auto'); // Стейт для максимальной высоты блоков

  // Определяем максимальную высоту блоков и применяем её к третьему блоку
  useEffect(() => {
    const firstBlockHeight = document.querySelector('.first-block').offsetHeight;
    const secondBlockHeight = document.querySelector('.second-block').offsetHeight;
    const maxHeight = Math.max(firstBlockHeight, secondBlockHeight) + 'px';
    setMaxHeight(maxHeight);
  }, []); // Выполняем при монтировании компонента

  const images = ['desktop-1.jpg', 'desktop-2.jpg', 'desktop-3.jpg']; // Путь к изображениям


  // Функция для автоматической смены изображений с интервалом
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Интервал смены изображений в миллисекундах (здесь каждые 3 секунды)
  
    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, [images.length]); // Добавлен images.length в зависимости
  
  return (
    <div className="container">
      {/* Первый блок */}
      <div className="first-block">
        <h2>Ипотека без первоначального взноса</h2>
        <h4>Успейте купить квартиру или построить дом с минимальной переплатой!</h4>
        <div className="FormContainer">
          <p>от 0,1%</p>
          <Link to="/mortgage">
  <button>Калькулятор</button>
</Link>
</div>
</div>
 {/* Третий блок */}
 <div className="third-block" style={{ maxHeight: maxHeight }}>
        {/* Выводим текущее изображение с помощью индекса */}
        <div className="background-image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
          <h3 className="bottom-center-heading">ИНДИВИДУАЛЬНОЕ ЖИЛИЩНОЕ СТРОИТЕЛЬСТВО</h3>
        
        </div>
      </div>
    
      <div className="second-block">
  <h2>НОВОСТРОЙКИ</h2>
  <p>Мы ведем полный цикл сделки, помогаем с подбором и получением ипотеки.</p>
  
  <img src="./market.png" alt="РЫНОК ВТОРИЧНОГО ЖИЛЬЯ" className="market-image" style={{ width: '50px', height: '50px', float: 'right'}} />
  <Link to="/real-estate-catalog">
  <button className="secondary-button">Каталог</button>
</Link>


</div>
</div>

     
  );
}

export default Straniza;
