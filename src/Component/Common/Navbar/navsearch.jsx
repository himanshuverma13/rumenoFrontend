// SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/veterinary-products/${searchText}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="form-control mr-sm-2"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  );
}

export default SearchBar;
