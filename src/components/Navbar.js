import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
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

    return (
        <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="navbar-brand">
                <h1>Todo App</h1>
            </div>
            <div className="menu-container" ref={menuRef}>
                <button className="menu-toggle" onClick={handleMenuToggle}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/todos" className="nav-link" onClick={() => setIsMenuOpen(false)}>Todos</Link>
                    <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <div className="menu-dark-mode-toggle">
                        <DarkModeToggle darkMode={isDarkMode} onToggle={toggleDarkMode} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
