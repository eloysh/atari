import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logoImage from './logo.png';

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <Link to="/">
        <img src={logoImage} alt="Логотип" className="menu-logo" />
      </Link>
      <div className={`hamburger-menu ${showMobileMenu ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`menu-container ${showMobileMenu ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMobileMenu}>Главная</Link></li>
          <li><Link to="/search" onClick={toggleMobileMenu}>Поиск</Link></li>
          <li><Link to="/mortgage" onClick={toggleMobileMenu}>Калькулятор</Link></li>
          <li><Link to="/contact" onClick={toggleMobileMenu}>Контакты</Link></li>
          <li><Link to="/auth" onClick={toggleMobileMenu}>Войти</Link></li>
          <li><Link to="/profile" onClick={toggleMobileMenu}>Профиль</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;