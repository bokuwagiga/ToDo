import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Home = ({isDarkMode}) => {
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const isMobile = window.innerWidth <= 768;
                const response = await fetch(`https://picsum.photos/${isMobile ? '900/1600' : '1600/900'}?grayscale`);
                setImageUrl(response.url);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, []);

    const handleGoToTodos = () => {
        navigate('/todos');
    };

    return (
        <div className="home-image-container">
            {imageUrl && <img src={imageUrl} alt="Random" className="home-image"/>}
            <div className="home-overlay">
                <div className="home-text">
                    <h1>Welcome to the Todo App</h1>
                    <p>Manage your tasks efficiently and effectively.</p>
                    <button onClick={handleGoToTodos} className={`go-to-todos-button ${isDarkMode ? 'dark-mode' : ''}`}>
                        Go To Todos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
