import React, { useState } from 'react';
import HomePage from './HomePage';
import SearchProperty from './SearchProperty';

const SearchResultPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  // Удалите неиспользуемую переменную searchError
  const [searchClicked, setSearchClicked] = useState(false); // Define searchClicked state

  const handleSearch = (searchCriteria) => {
    // Implement your search logic here (e.g., fetching data from a database)
    // For demonstration purposes, let's assume an empty array is returned for now
    const results = []; // Replace this with your actual search logic
    setSearchResults(results);
    // Удалите установку searchError
    setSearchClicked(true); // Set searchClicked to true after search is performed
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Найди свою мечту</h1>
      <SearchProperty onSearch={handleSearch} />
      {searchClicked && searchResults && <HomePage searchResults={searchResults} />}
    </div>
  );
};

export default SearchResultPage;
