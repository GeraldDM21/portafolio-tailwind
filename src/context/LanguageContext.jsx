import React, { createContext, useState, useContext } from 'react';

// Crear el contexto para el idioma
const LanguageContext = createContext();

// Proveedor del contexto para manejar el idioma
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // El idioma por defecto es inglés

  const switchLanguage = (lang) => {
    setLanguage(lang); // Cambiar idioma
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children} {/* Aquí pasa toda la app */}
    </LanguageContext.Provider>
  );
};

// Hook para usar el contexto en cualquier componente
export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default LanguageContext;

