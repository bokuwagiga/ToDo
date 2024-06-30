import React from 'react';

const About = ({ isDarkMode }) => {
    return (
        <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
            <h1>About This App</h1>
            <p>This is a simple Todo app incorporating various modern features and practices, built with React By Giga Shubitidze as the final project for the React course at BTU.</p>
        </div>
    );
};

export default About;
