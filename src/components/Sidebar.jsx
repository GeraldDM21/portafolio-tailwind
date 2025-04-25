import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import React from 'react';

const Sidebar = () => (
  <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col gap-4 p-3 z-10">
    <a href="https://www.linkedin.com" target="_blank" className="text-2xl hover:text-blue-600">
      <FaLinkedin />
    </a>
    <a href="https://github.com" target="_blank" className="text-2xl hover:text-black">
      <FaGithub />
    </a>
    <a href="https://wa.me/88506211" target="_blank" className="text-2xl hover:text-green-600">
      <FaWhatsapp />
    </a>
  </div>
);

export default Sidebar;
