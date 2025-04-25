import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import React from 'react';
import '../styles/header.css';
import Logo from '../assets/Logo.png';

const Header = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 header-content">
        {/* Logo y nombre */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-10" />
          <span className="font-bold text-gray-800">DELGADO INC</span>
        </div>

        {/* Navegación */}
        <nav className="flex gap-6 text-sm font-semibold text-gray-700 nav-links">
          <a href="#home">{translations[language].home}</a>
          <a href="#about">{translations[language].about}</a>
          <a href="#vision-mision">{language === 'en' ? 'Mission & Vision' : 'Misión y Visión'}</a>
          <a href="#projects">{translations[language].projects}</a>
          <a href="#contact">{translations[language].contact}</a>
        </nav>

        {/* Selector de idioma */}
        <button 
          onClick={() => switchLanguage(language === 'en' ? 'es' : 'en')} 
          className="text-purple-600 font-semibold px-4 py-2 border border-purple-100 rounded-lg hover:bg-purple-100 hover:text-white transition language-button"
        >
          {language === 'en' ? 'ES' : 'EN'}
        </button>
      </div>
    </header>
  );
};

export default Header;
