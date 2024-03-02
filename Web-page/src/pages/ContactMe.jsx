import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Nav from '../components/navbar';
import Footer from '../components/footer';

export const ContactMe = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm
        ('service_eti28qc', 
        'contact_form', 
        form.current, {
          publicKey: 
          'QSRj9uORHV4AKErqh',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <body className='bg-1e1e1e bg-auto'>
            <Nav />

            

                <div className='flex flex-col md:flex-row justify-center md:space-x-32 pt-10 items-center
                space-y-10'>

                  <img src='IMG_4139.jpg' className='flex w-1/5 shadow-2xl'></img>
                  
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-6'>
                        <label className='text-eacdc2'>Name</label>
                            <input type="text" name="user_name" placeholder="Juan Augusto" className='rounded-xl border-2 border-eacdc2 w-full p-2 focus:outline-none' />
                        <label className='text-eacdc2 '>Email</label>
                            <input type="email" name="user_email" placeholder="Correo@gmail.com" className='rounded-xl border-2 border-eacdc2  w-full p-2 focus:outline-none'/>
                        <label className='text-eacdc2 ' >Message</label>
                            <textarea name="message" placeholder="How can i help you" className='rounded-xl border-2 border-eacdc2 w-full p-2 '/>
                            <input type="submit" value="Send" className='text-1e1e1e  bg-eacdc2 hover:text-eacdc2 hover:bg-1e1e1e duration-500 rounded-xl'/>
                    </form>
                </div>

           
            
        <Footer />
      </body>
    );
  }