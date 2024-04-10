import React from 'react';
import './AuthPage.css';

const AuthPage = () => {
  // Обработчики нажатия на кнопки авторизации через социальные сети
  const handleVKAuth = () => {
    window.location.href = 'https://oauth.vk.com/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email';
  };

  const handleGoogleAuth = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile';
  };

  const handleYandexAuth = () => {
    window.location.href = 'https://oauth.yandex.ru/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI';
  };

  const handleMailAuth = () => {
    window.location.href = 'https://connect.mail.ru/oauth/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REDIRECT_URI';
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Добро пожаловать!</h1>
        <form className="auth-form">
          <input type="text" placeholder="Имя пользователя" />
          <input type="password" placeholder="Пароль" />
          <button type="submit">Войти</button>
        </form>
        <div className="auth-divider">или</div>
        <form className="auth-form">
          <input type="text" placeholder="Имя пользователя" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <button type="submit">Зарегистрироваться</button>
        </form>
        <div className="social-buttons">
  <button onClick={handleVKAuth}>
    <img src="/vk.png" alt="VK" width="20" height="20" />
  </button>
  <button onClick={handleGoogleAuth}>
    <img src="/google.png" alt="Google" width="20" height="20" />
  </button>
  <button onClick={handleYandexAuth}>
    <img src="/yandex.png" alt="Yandex" width="20" height="20" />
  </button>
  <button onClick={handleMailAuth}>
    <img src="/mail.png" alt="Mail" width="20" height="20" />
  </button>
</div>
      </div>
    </div>
  );
};

export default AuthPage;

