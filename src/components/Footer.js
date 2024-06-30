import React from 'react';

const Footer = ({ isDarkMode }) => {
    return (
        <footer className={`footer ${isDarkMode ? 'dark-mode' : ''}`}>
            <p>© 2024 Todo App by Giga.</p>
        </footer>
    );
};

export default Footer;
