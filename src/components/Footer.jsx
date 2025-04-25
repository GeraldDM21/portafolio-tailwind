import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import CostaRicaFlag from '../assets/cr-flag.png';
import '../styles/footer.css'; // Importar el CSS personalizado

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2025 Gerald Delgado — Built with <span className="heart">❤️</span>
        </p>

        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/gerald-delgado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gerald-delgado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:gerald.delmon@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bandera de Costa Rica */}
      <img src={CostaRicaFlag} alt="Costa Rica" className="cr-flag" />
    </footer>
  );
};

export default Footer;
