import React from 'react';
import { useTranslation } from 'react-i18next';

const About = ({ isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>{t('about_app')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default About;
