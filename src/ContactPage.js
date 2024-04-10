import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=79510050002', '_blank');
  };
  const openInstagram = () => {
    window.open('https://www.instagram.com/buying_a_property?igsh=MWY3NnN2dTdqemQ2Zw==', '_blank');
  };
  const openTelegram = () => {
    window.open('https://t.me/+79510050002', '_blank');
  };
  const openTelegramcanal = () => {
    window.open('https://t.me/buying_a_property', '_blank');
  };
  

  return (
    <div className="contact-page-container">
      <h1>Свяжитесь с нашим риэлтором</h1>
      <div className="realtor-info">
        <img src="realtor-avatar.jpg" alt="Realtor Avatar" />
        <div className="realtor-details">
          <h2>Гуренко Евгений</h2>
          <p>Email: gurenko.ru@gmail.com</p>
          <p>Телефон: +7 (951) 005-00-02</p>
          <p>Город: Артём</p>
          <p>Описание: Краткое описание риэлтора и его услуг</p>
        </div>
      </div>
      <div className="chat-buttons-container">
        <button className="whatsapp-button" onClick={openWhatsApp}>
          <img src="whatsapp.png" alt="WhatsApp" width="50" height="50"/>
          <span>Напиши мне</span>
        </button>
        <button className="telegram-button" onClick={openTelegram}>
          <img src="telegram.png" alt="Telegram" width="50" height="50"/>
          <span>Напиши мне</span>
        </button>
        
        <button className="instagram-button" onClick={openInstagram}>
          <img src="instagram.svg" alt="Instagram" width="50" height="50"/>
          <span>Страница в Инстаграм</span>
        </button>
        <button className="telegram-button" onClick={openTelegramcanal}>
          <img src="telegram.png" alt="Telegram" width="50" height="50"/>
          <span>Telegram канал</span>
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
