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
