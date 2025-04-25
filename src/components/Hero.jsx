import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import '../styles/hero.css'; // Asegúrate de tenerlo

const Hero = () => {
  const { language } = useLanguage();
  const { heroTitle, heroSubtitle, projects } = translations[language];

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{heroTitle}</h1>
        <p className="hero-subtitle">{heroSubtitle}</p>
        <a href="#projects">
          <button className="hero-button">
            {projects}
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
