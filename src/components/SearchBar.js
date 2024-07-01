//SearchBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';
import { useTranslation } from 'react-i18next';

const SearchBar = ({ onSearch, isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        placeholder={t('search_todos')}
        className={`input search ${isDarkMode ? 'dark-mode' : ''}`}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
