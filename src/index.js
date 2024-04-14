import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './HomePage';
import SearchResultPage from './SearchResultsPage';
import PropertyDetailPage from './PropertyDetailsPage';

import AuthPage from './AuthPage';
import UserProfilePage from './UserProfilePage';
import Menu from './Menu';
import MortgageCalculator from './MortgageCalculator';
import RealEstateCatalog from './RealEstateCatalog';

ReactDOM.render(
  <Router>
    <div>
      <Menu /> {/* Включаем компонент меню здесь */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/search" element={<SearchResultPage />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
       
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/mortgage" element={<MortgageCalculator />} />
        <Route path="/real-estate-catalog" element={<RealEstateCatalog />} /> {/* Включаем каталог недвижимости */}
      </Routes>
    </div>
  </Router>,
  document.getElementById('root')
);
