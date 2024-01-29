import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [open, setOpen] = useState(false )
  
  return (
    <header>
    <nav className=' w-full py-5 md:flex md:flex-row md:items-center md:justify-between '>
        <div className='flex md:flex-row items-center justify-between'>
          <div className='flex'>
              <img src='logo.png' alt='logo' className='flex cursor-pointer pl-5 md:px-5 w-32' path="/"/>
          </div>

          <div className='flex text-4xl md:hidden px-3' onClick={() => setOpen (!open)}>
            <ion-icon name={`${ open ? 'close' : 'menu'}`}></ion-icon>
          </div>

        </div>
        {/*600px + */}
        
        <ul className=' text-sm md:text-lg lg:text-xl 2xl:text-xl pr-10 md:flex  hidden'>
          <li className='flex px-2'>
            <Link to="/" className='px-3  text-eacdc2'>
              Home
            </Link>

            <Link to="/" className=' px-3 text-eacdc2'>
              Portafolio
            </Link>

            <Link to="/HomeD" className=' px-3  text-eacdc2'>
              Design
            </Link>

            <Link to="/HomeC" className=' px-3  text-eacdc2'>
              Code
            </Link>

            <Link to="/" className=' px-3  text-eacdc2'>
              About
            </Link>
         
            <Link to="/" className=' px-3 inline-block text-eacdc2'>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}

        <div className={`flex justify-center text-center md:hidden rounded-lg border bg-1e1e1e
      
      ${open ? '' : 'hidden'}`}>

        <ul className='mx-10'>
          <li>
            <Link to="/" className=' py-7 px-3 inline-block text-eacdc2'>
                Home
            </Link>
          </li>
          <li>
          <Link to="/" className='py-7 px-3 inline-block text-eacdc2'>
              Portafolio
            </Link>
          </li>
          <li>
          <Link to="/" className='py-7 px-3 inline-block text-eacdc2'>
              Design
            </Link>
          </li>
          <li>
          <Link to="/" className='py-7 px-3 inline-block text-eacdc2'>
              Code
            </Link>
          </li>
          <li>
            <Link to="/" className='py-7 px-3 inline-block text-eacdc2'>
                About
            </Link>
          </li>
          <li>
            <Link to="/" className='py-7 px-3 inline-block text-eacdc2'>
                Contact
            </Link>
          </li>
        </ul>

        </div>

      </nav>
    </header>
  )
}