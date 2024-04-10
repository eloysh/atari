const mysql = require('mysql2');

// Создание подключения к базе данных MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Gurenko311992',
  database: 'real_estate_app'
});

// Подключение к базе данных MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Выполнение запроса INSERT для вставки данных о риэлторах
const realtorsData = [
  ['Нина Пакунова', '1234567890', 'Россия', 'Артём'],
  ['Кристина Гуренко', '0987654321', 'Россия', 'Владивосток'],
  ['Нина Пакунова', '1234567890', 'Россия', 'Уссурийск'],
  ['Кристина Гуренко', '0987654321', 'Россия', 'Находка']
];

const sql = 'INSERT INTO realtors (name, phoneNumber, location, city) VALUES ?';

connection.query(sql, [realtorsData], (err, results) => {
  if (err) {
    console.error('Error inserting realtors data:', err);
    return;
  }
  console.log('Realtors data inserted successfully');
});

// Закрытие соединения с базой данных MySQL после выполнения запросов
connection.end();
