// BurgerMenu.js

import React from 'react';

const BurgerMenu = ({ isOpen, toggle }) => {
  return (
    <button className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggle}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};

export default BurgerMenu;
