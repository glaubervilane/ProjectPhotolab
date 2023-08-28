import React, { useState } from 'react';
import '../styles/TopNavigationBar.scss';

const SearchBar = ({ search, setSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    search(searchText);
  };

  return (
    <div className="top-nav-bar__search">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
