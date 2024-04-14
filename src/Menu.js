import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from './logo.png';
import { keyframes } from 'styled-components';


// Определение основных цветов
const primaryColor = '#f2f2f2'; // Серый
const secondaryColor = '#78e08f'; // Зеленый
const accentColor = ' hsl(0, 0%, 0%)'; // Желтый
const rotateLines = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  25% {
    transform: translateY(8px) rotate(45deg);
  }
  50% {
    transform: translateY(0) rotate(0);
  }
  75% {
    transform: translateY(-8px) rotate(-45deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;

// Стилизация компонентов с использованием определенных цветов
const MenuContainer = styled.div`
  height: 60px;
  background-color: ${primaryColor}; /* Основной цвет */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2000;

  @media screen and (max-width: 768px) {
    padding: 1px;
  }
`;

const MenuLogo = styled.img`
  width: 180px;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;

const AgencyText = styled.span`

  margin-right: 10px;
  color: rgb(21 20 23);
  font-size: 19px;
}
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Line = styled.div`
  margin: 4px;
  width: 50px;
  height: 4px;
  background-color: ${accentColor};
  transition: transform 0.3s ease-in-out;
  animation: ${rotateLines} 1s ease-in-out forwards; /* Применяем анимацию */
  opacity: ${props => props.showMobileMenu ? '1' : '2'};
  &:nth-child(3) {
    transform: translateY(${props => props.showMobileMenu ? '-8px' : '0'}) rotate(${props => props.showMobileMenu ? '-45deg' : '0'});
  }
`;

const MenuItems = styled.nav`
  top: 0;
  left: 0;
  height: 300px;
  background-color: ${secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  margin-top: ${props => props.showMobileMenu ? '0' : '2px'}; /* Минимальный отступ при закрытом меню */
  ${props => props.showMobileMenu && `
    opacity: 1;
    pointer-events: all;
  `}
`;


const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const MenuItem = styled.li`
  margin: 20px 0;
`;

const MenuItemLink = styled(Link)`
  color: ${primaryColor}; /* Основной цвет */
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${accentColor}; /* Акцентный цвет */
  }
`;

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <MenuContainer>
        <Link to="/">
          <MenuLogo src={logoImage} alt="Логотип" />
        </Link>
        <AgencyText>Агентство недвижимости</AgencyText>
        <HamburgerMenu onClick={toggleMobileMenu}>
          <Line showMobileMenu={showMobileMenu} />
          <Line showMobileMenu={showMobileMenu} />
          <Line showMobileMenu={showMobileMenu} />
        </HamburgerMenu>
      </MenuContainer>
      <MenuItems showMobileMenu={showMobileMenu}>
        <MenuList>
          <MenuItem><MenuItemLink to="/" onClick={toggleMobileMenu}>Главная</MenuItemLink></MenuItem>
          <MenuItem><MenuItemLink to="/search" onClick={toggleMobileMenu}>Поиск</MenuItemLink></MenuItem>
          <MenuItem><MenuItemLink to="/mortgage" onClick={toggleMobileMenu}>Калькулятор</MenuItemLink></MenuItem>
          <MenuItem><MenuItemLink to="/contact" onClick={toggleMobileMenu}>Контакты</MenuItemLink></MenuItem>
          <MenuItem><MenuItemLink to="/auth" onClick={toggleMobileMenu}>Войти</MenuItemLink></MenuItem>
          <MenuItem><MenuItemLink to="/profile" onClick={toggleMobileMenu}>Профиль</MenuItemLink></MenuItem>
        </MenuList>
      </MenuItems>
    </div>
  );
};

export default Menu;
