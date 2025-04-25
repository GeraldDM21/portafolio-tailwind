import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import React from 'react';
import '../styles/projects.css'; 
import TransitoImg from '../assets/transito360.png';
import TowerImg from '../assets/towerdefense.png';
import AcademicImg from '../assets/systemacademic.png';

const Projects = () => {
  const { language } = useLanguage();
  const { projectsTitle } = translations[language];

  const projects = [
    {
      name: 'Tránsito 360',
      description: {
        en: 'A web platform for monitoring and managing traffic flow efficiently in real time.',
        es: 'Una plataforma web para monitorear y gestionar el flujo vehicular en tiempo real de manera eficiente.'
      },
      tech: 'React, Node.js, MongoDB, Express',
      link: 'https://github.com/fchaconb/transito-360',
      image: TransitoImg
    },
    {
      name: 'Tower Defense Game',
      description: {
        en: 'A strategy game built in Unity applying design patterns like Composite, Strategy, Observer and State.',
        es: 'Juego de estrategia en Unity aplicando patrones de diseño como Composite, Strategy, Observer y State.'
      },
      tech: 'C#, Unity, OOP',
      link: 'https://github.com/JhonBsA/TowerDefense',
      image: TowerImg
    },
    {
      name: 'System Academic',
      description: {
        en: 'An academic management platform for students, courses, enrollments and evaluations.',
        es: 'Una plataforma de gestión académica para estudiantes, cursos, matrículas y evaluaciones.'
      },
      tech: 'Java, Spring Boot, MySQL',
      link: 'https://github.com/MariaJimenezMejias/SystemAcademic',
      image: AcademicImg
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">{projectsTitle}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description[language]}</p>
              <p className="project-tech">{project.tech}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
                {language === 'es' ? 'Ver proyecto' : 'View Project'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
