import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import ukFlag from '../flags/uk.png';
import geFlag from '../flags/ge.png';
import '../styles.css';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ka' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-brand">
        <h1> <Link to="/" className="nav-home-link" >Todo App</Link></h1>
      </div>
      <div className="menu-container" ref={menuRef}>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('home')}</Link>
          <Link to="/todos" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('todos')}</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('about')}</Link>
          <div className="menu-dark-mode-toggle">
            <DarkModeToggle darkMode={isDarkMode} onToggle={toggleDarkMode} />
            <img 
              onClick={toggleLanguage}
              src={i18n.language === 'en' ? geFlag : ukFlag}
              alt={i18n.language === 'en' ? 'Georgian' : 'English'}
              className="flag-icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
