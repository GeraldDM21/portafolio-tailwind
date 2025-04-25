import { FaWhatsapp } from 'react-icons/fa'; // Asegúrate de tener 'react-icons' instalado
import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/50688506211" // Asegúrate de reemplazar con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
