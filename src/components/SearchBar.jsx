import './SearchBar.css';
import React, { useState } from 'react';

const SearchBar = ({ onChangeText, onFilterChange }) => {
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('name');

  const handleSearchTextChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onChangeText(text, filter);
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    onFilterChange(selectedFilter);
  };

  return (
    <>
      <form className="search-bar-container">
        <select value={filter} onChange={handleFilterChange} className="filter-select">
          <option value="name">Nombre</option>
          <option value="email">Correo Electrónico</option>
          <option value="city">Ciudad</option>
        </select>
        <input
          onChange={handleSearchTextChange}
          type="search"
          name="search"
          id="search"
          placeholder="Buscar empleado"
          className="search-input"
          value={searchText}
        />
      </form>
    </>
  );
};

export default SearchBar;
