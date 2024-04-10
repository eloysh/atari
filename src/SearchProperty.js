import React, { useState } from 'react';
import './SearchProperty.css';

const SearchProperty = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    propertyType: '',
    priceFrom: '',
    priceTo: '',
    location: 'Россия',
    city: '',
    realtor: 'Пакунова Нина Викторовна',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchCriteria);
  };
  return (
    <div className="search-property">
      <h2>Поиск недвижимости</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="propertyType">Тип недвижимости:</label>
          <select
            id="propertyType"
            name="propertyType"
            value={searchCriteria.propertyType}
            onChange={handleChange}
          >
            <option value="">Выберите тип</option>
            <option value="apartment">Квартира</option>
            <option value="house">Дом</option>
            <option value="land">Земля</option>
          </select>
        </div>
     
       
        <div className="form-group">
          <label htmlFor="priceTo">Цена:</label>
          <input
            type="text"
            id="priceTo"
            name="priceTo"
            value={searchCriteria.priceTo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location"></label>
          <input
            type="text"
            id="location"
            name="location"
            value={searchCriteria.location}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Город:</label>
          <select
            id="city"
            name="city"
            value={searchCriteria.city}
            onChange={handleChange}
          >
            <option value="">Выберите город</option>
            <option value="Артем">Артем</option>
            <option value="Владивосток">Владивосток</option>
            <option value="Уссурийск">Уссурийск</option>
            <option value="Находка">Находка</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="realtor">Риэлтор:</label>
          <select
            id="realtor"
            name="realtor"
            value={searchCriteria.realtor}
            onChange={handleChange}
          >
            <option value="Гуренко Евгений Алексавндрович">Гуренко Евгений Александрович</option>
          </select>
        </div>
        <button type="submit">Искать</button>
      </form>
    </div>
  );
};

export default SearchProperty;
