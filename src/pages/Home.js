import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const response = await fetch(`https://picsum.photos/${width}/${height}`);
        setImageUrl(response.url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
    window.addEventListener('resize', fetchImage);

    return () => {
      window.removeEventListener('resize', fetchImage);
    };
  }, []);

  const handleGoToTodos = () => {
    navigate('/todos');
  };

  return (
    <div className="home-image-container">
      {imageUrl && (
        <img src={imageUrl} alt="Random" className={`home-image ${isDarkMode ? 'dark-mode' : ''}`} />
      )}
      <div className="home-overlay">
        <div className="home-text">
          <h1>{t('welcome')}</h1>
          <p>{t('manage_tasks')}</p>
          <button onClick={handleGoToTodos} className={`go-to-todos-button ${isDarkMode ? 'dark-mode' : ''}`}>
            {t('go_to_todos')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
