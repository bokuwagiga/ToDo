import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useDarkMode from './hooks/useDarkMode';
import Home from './pages/Home';
import TodoPage from './pages/TodoPage';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <Router>
            <div className={`app-container`}>
                <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
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
