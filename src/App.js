// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';
import LoginPage from './LoginPage'; // Страница входа
import RegisterPage from './RegisterPage'; // Страница регистрации

const App = () => {
  const isAuthenticated = true; // Проверка аутентификации (замените на свою логику)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/profile" /> : <LoginPage />}
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/profile">
          {isAuthenticated ? <UserProfilePage /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
