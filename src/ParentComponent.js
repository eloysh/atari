// ParentComponent.js
import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom
import './ParentComponent.css'; // Импортируем CSS файл с вашими стилями

const Menu = () => {
  return (
    <nav className="menu-container"> {/* Добавляем класс для контейнера меню */}
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/search">Поиск</Link></li>
        <li><Link to="/contact">Контакты</Link></li>
        <li><Link to="/auth">Войти</Link></li>
        <li><Link to="/profile">Профиль</Link></li>
        <li><Link to="/realtor">Риэлтор</Link></li> {/* Добавляем ссылку на страницу риэлтора */}
      </ul>
    </nav>
  );
};

export default Menu;
