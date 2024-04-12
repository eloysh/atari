import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем компонент Link из react-router-dom

import './Straniza.css';

const Straniza = () => {
  return (
    <div>
      {/* Первый блок */}
      <div>
        <h2>Ипотека без первоначального взноса</h2>
        <h4>Успейте купить квартиру или построить дом с минимальной переплатой!</h4>
        <div className="FormContainer">
          <p>от 0,1%</p>
        </div>
        {/* Используем компонент Link */}
        <Link to="/mortgage">
          <button>Подробнее об ипотеке</button>
        </Link>
      </div>
    </div>
  );
}

export default Straniza;
