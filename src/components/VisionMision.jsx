import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import '../styles/visionMision.css'; // Asegúrate que esté en /styles

const VisionMision = () => {
  const { language } = useLanguage();
  const { missionTitle, missionText, visionTitle, visionText } = translations[language];

  return (
    <section id="vision-mision" className="vision-mision-section">
      {/* Misión */}
      <div className="vision-mision-card">
        <h3 className="card-title">{missionTitle}</h3>
        <p className="card-text">{missionText}</p>
      </div>

      {/* Visión */}
      <div className="vision-mision-card">
        <h3 className="card-title">{visionTitle}</h3>
        <p className="card-text">{visionText}</p>
      </div>
    </section>
  );
};

export default VisionMision;
