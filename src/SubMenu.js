// SubMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const SubMenu = () => {
  return (
    <div className="submenu-container">
      <ul className="submenu">
        <li><Link to="/">Ссылка на главную страницу</Link></li> {/* Добавляем ссылку на главную страницу */}
        <li><Link to="/some-other-page">Еще одна ссылка</Link></li>
        {/* Добавьте здесь другие ссылки подменю, если необходимо */}
      </ul>
    </div>
  );
};

export default SubMenu;
