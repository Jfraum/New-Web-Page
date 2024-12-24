import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Nav from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import AlertMessage from '../components/Alert';

// Configuración de EmailJS
const SERVICE_ID = 'service_eti28qc';
const TEMPLATE_ID = 'contact_form';
const PUBLIC_KEY = 'QSRj9uORHV4AKErqh';

export default function ContactMe() {
  const form = useRef();
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    isSuccess: false,
  });

  const closeAlert = () => setAlert({ ...alert, show: false });

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      alert('Por favor, complete todos los campos');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Por favor, ingrese un correo electrónico válido');
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setAlert({
            show: true,
            message: 'Enviado con éxito',
            isSuccess: true,
          });
          form.current.reset();
        },
        (error) => {
          console.error('Error al enviar el mensaje:', error);
          setAlert({
            show: true,
            message: 'Error al enviar el mensaje',
            isSuccess: false,
          });
        }
      );
  };

  return (
    <>
      <Nav />

      {alert.show && (
        <AlertMessage
          message={alert.message}
          isSuccess={alert.isSuccess}
          onClose={closeAlert}
        />
      )}

      <div className="flex flex-col md:flex-row justify-center md:space-x-32 pt-10 items-center space-y-10 max-w-5xl mx-auto">
        <img
          src="IMG_4139.jpg"
          alt="Contact"
          className="flex w-1/6 shadow-2xl"
        />

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-6 w-full max-w-md"
        >
          <label htmlFor="user_name" className="text-eacdc2">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Juan Augusto"
            className="rounded-xl border-2 border-eacdc2 w-full p-2 focus:outline-none"
          />

          <label htmlFor="user_email" className="text-eacdc2">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Correo@gmail.com"
            className="rounded-xl border-2 border-eacdc2 w-full p-2 focus:outline-none"
          />

          <label htmlFor="message" className="text-eacdc2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="How can I help you?"
            className="rounded-xl border-2 border-eacdc2 w-full p-2"
          />

          <input
            type="submit"
            value="Send"
            className="text-1e1e1e bg-eacdc2 hover:text-eacdc2 hover:bg-1e1e1e duration-500 rounded-xl cursor-pointer p-2"
          />
        </form>
      </div>

      <Footer />
    </>
  );
}
