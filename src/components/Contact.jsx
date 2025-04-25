import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import '../styles/contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_kb4fbfk',         // tu Service ID
      'template_kjv8oys',        // tu Template ID
      form.current,
      'xJv_7hfBGZfw7hGAf'        // tu Public Key
    )
    .then((result) => {
        toast.success(
          language === 'es' ? '¡Mensaje enviado correctamente!' : 'Message sent successfully!'
        );
        form.current.reset();
    }, (error) => {
        toast.error(
          language === 'es' ? 'Error al enviar el mensaje.' : 'Failed to send the message.'
        );
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>{t.contactFormTitle}</h2>
      <p>{t.contactFormText}</p>

      <form ref={form} onSubmit={sendEmail}>
        <label className="label-left">{language === 'es' ? 'Nombre' : 'Name'}</label>
        <input type="text" name="user_name" placeholder={language === 'es' ? 'Ingresa tu nombre' : 'Enter Your Name'} required />

        <label className="label-left">{language === 'es' ? 'Correo electrónico' : 'Email'}</label>
        <input type="email" name="user_email" placeholder={language === 'es' ? 'Ingresa tu correo' : 'Enter Your Email'} required />

        <label className="label-left">{language === 'es' ? 'Mensaje' : 'Message'}</label>
        <textarea name="message" placeholder={language === 'es' ? 'Ingresa tu mensaje' : 'Enter Your Message'} required />

        <button type="submit">{t.submitButton}</button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
