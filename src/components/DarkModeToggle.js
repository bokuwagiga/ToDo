//DarkModeToggle.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <label className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`}>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={onToggle}
      />
      <span className="slider">
        <FontAwesomeIcon icon={faSun} className={`mode-icon light-mode-icon ${darkMode ? 'hidden' : ''}`} />
        <FontAwesomeIcon icon={faMoon} className={`mode-icon dark-mode-icon ${darkMode ? '' : 'hidden'}`} />
      </span>
    </label>
  );
};

export default DarkModeToggle;
