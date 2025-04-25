import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

const About = () => {
  const { language } = useLanguage();
  const { aboutTitle, aboutText, skillsTitle } = translations[language];

  return (
    <section id="about" className="bg-white py-20 px-6 text-center md:text-left">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">{aboutTitle}</h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-10"></div>

        {/* Texto descriptivo */}
        <p className="text-lg text-gray-700 mb-6">{aboutText}</p>

        {/* Botón de descarga del CV */}
        <div className="cv-button-container">
          <a href="/CVInglesGeraldDelgado.pdf" download className="cv-download-button">
            {language === 'en' ? 'Download CV' : 'Descargar CV'}
          </a>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{skillsTitle}</h3>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="skill">
              <FaHtml5 className="text-5xl" />
              <p className="skill-name">HTML</p>
            </div>
            <div className="skill">
              <FaCss3Alt className="text-5xl" />
              <p className="skill-name">CSS</p>
            </div>
            <div className="skill">
              <FaJs className="text-5xl" />
              <p className="skill-name">JavaScript</p>
            </div>
            <div className="skill">
              <FaReact className="text-5xl" />
              <p className="skill-name">React</p>
            </div>
            <div className="skill">
              <FaNodeJs className="text-5xl" />
              <p className="skill-name">Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
