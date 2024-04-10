// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Импортируем CSS файл с красивыми стилями для меню
import logoImage from './logo.png'; // Импортируем изображение логотипа

const Menu = () => {
  return (
    <div>
      <img src={logoImage} alt="Логотип" className="menu-logo" /> {/* Добавляем логотип перед меню */}
      <nav className="menu-container"> {/* Добавляем класс для контейнера меню */}
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/search">Поиск</Link></li>
          <li><Link to="/mortgage">Калькулятор</Link></li>
          
          <li><Link to="/contact">Контакты</Link></li>
          <li><Link to="/auth">Войти</Link></li>
          <li><Link to="/profile">Профиль</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
