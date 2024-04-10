import React, { useState } from 'react';
import './UserProfilePage.css';

const UserProfilePage = () => {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile-container">
      <h1>Личный кабинет пользователя</h1>
      <div className="user-profile-info">
        <div className="user-avatar">
          {avatar ? (
            <img src={avatar} alt="User Avatar" />
          ) : (
            <img src="default-avatar.jpg" alt="Default Avatar" />
          )}
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
        </div>
        <div className="user-details">
          <h2>Имя пользователя</h2>
          <p>Email: user@example.com</p>
          <p>Дата регистрации: 01.01.2022</p>
          <p>Роль: Пользователь</p>
          <button>Изменить пароль</button>
        </div>
      </div>
      <div className="user-settings">
        <h2>Настройки аккаунта</h2>
        <form className="user-settings-form">
          <label htmlFor="name">Имя:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Новый пароль:</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="confirmPassword">Подтвердите пароль:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
          <button type="submit">Сохранить изменения</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfilePage;

