// database.js

const mongoose = require('mongoose');
const Property = require('./Property');

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/realEstateDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Ошибка подключения к базе данных:'));
db.once('open', () => {
  console.log('Подключение к базе данных успешно');
});

// Функция для сохранения данных поиска в базе данных
const saveSearchCriteria = async (searchCriteria) => {
  try {
    const property = new Property(searchCriteria);
    await property.save();
    console.log('Данные успешно сохранены в базе данных');
  } catch (error) {
    console.error('Ошибка при сохранении данных в базе данных:', error);
  }
};

module.exports = {
  saveSearchCriteria,
};
import React, { useState } from 'react';
import axios from 'axios';
import './oprosnik.css'
function Oprosnik({ formData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // Отправляем данные на сервер
      const response = await axios.post('адрес_вашего_сервера', formData);
      console.log(response.data); // Выводим ответ сервера в консоль для отладки

      // Дополнительно можно добавить обработку ответа сервера и вывод сообщения об успешной отправке
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      // Обрабатываем возможные ошибки и выводим сообщение пользователю
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <div>
    {/* Render different steps based on the step state */}
    {step === 1 && (
      <div className="step-content">
        <div className="step-title">Из какого материала планируете строительство?</div>
        <div className="options">
          <div className={`option ${selectedOption === 'karkasnyi' && 'selected'}`} onClick={() => handleSelectOption('karkasnyi')}>
            <input type="radio" name="buildingMaterial" value="karkasnyi" />
            <img src="karkasnyi.jpg" alt="Каркасный дом" />
            <span>Каркасный дом</span>
            {selectedOption === 'karkasnyi' && <div className="checkmark">&#10003;</div>}
          </div>
          <div className={`option ${selectedOption === 'gazablok' && 'selected'}`} onClick={() => handleSelectOption('gazablok')}>
            <input type="radio" name="buildingMaterial" value="gazablok" />
            <img src="gazablok.jpg" alt="Газаблок/теплоблок" />
            <span>Газаблок/теплоблок</span>
            {selectedOption === 'gazablok' && <div className="checkmark">&#10003;</div>}
          </div>
          <div className={`option ${selectedOption === 'unknown' && 'selected'}`} onClick={() => handleSelectOption('unknown')}>
            <input type="radio" name="buildingMaterial" value="unknown" />
            <img src="unknown.jpg" alt="Не знаю" />
            <span>Не знаю</span>
            {selectedOption === 'unknown' && <div className="checkmark">&#10003;</div>}
          </div>
        </div>
      </div>
    )}

  

      {step === 2 && (
        <div className="step-content">
        <div className="step-title">Введите свое имя</div>
        <input type="text" name="name" placeholder="Введите ваше имя" />
      </div>
      )}

      {step === 3 && (
        <div>
         <div className="step-content">
      <div className="step-title">Выберите ваш пол</div>
      <div className="radio-group">
        <label>
          <input type="radio" name="gender" value="male" />
          Мужской
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Женский
        </label>
      </div>
    </div>
        </div>
      )}

      {step === 4 && (
        <div>
           <div className="step-content">
      <div className="step-title">Выберите ваше хобби</div>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" name="hobby" value="reading" />
          Чтение
        </label>
        <label>
          <input type="checkbox" name="hobby" value="sports" />
          Спорт
        </label>
        <label>
          <input type="checkbox" name="hobby" value="music" />
          Музыка
        </label>
      </div>
    </div>
        </div>
      )}

      {step === 5 && (
        <div>
           <div className="final-step-content">
      <div className="final-step-title">Спасибо за заполнение формы!</div>
      <p>Мы свяжемся с вами в ближайшее время.</p>
    </div>
        </div>
      )}

      {/* Render "Далее" button for all steps except the final step */}
      {step < 5 && (
        <button onClick={handleNextStep}>Далее</button>
      )}

      {/* Render "Отправить" button only at the final step */}
      {step === 5 && (
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Отправка...' : 'Отправить'}
        </button>
      )}
    </div>
  );
}

export default Oprosnik;