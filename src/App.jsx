import React from 'react';
import './styles/hero.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/contact.css';
import './styles/visionMision.css'; // 👈 Importa también el CSS de VisionMision

import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMision from './components/VisionMision'; // 👈 Importa el nuevo componente
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="relative">
        <Header />
        <Sidebar />
        <main className="pt-20">
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="vision-mision"><VisionMision /></section> 
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
