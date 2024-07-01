// App.js
import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useDarkMode from './hooks/useDarkMode';
import Home from './pages/Home';
import TodoPage from './pages/TodoPage';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import i18n from './i18n'; // Ensure i18n is imported

const App = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router basename="/ToDo">
      <div className={`app-container`}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} changeLanguage={changeLanguage} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/todos" element={<TodoPage isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          </Routes>
        </div>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
};

export default App;
