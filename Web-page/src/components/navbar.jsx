import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [open, setOpen] = useState(false )
  
  return (
    <>
    <nav>
      <div className='flex flex-col md:flex-row items-center justify-around pt-3 md:pt-5'>
        <div className='z-50 w-full md:w-auto flex items-center justify-between px-5'>
          <img src='logo.png' alt='logo' className='cursor-pointer w-16 md:w-20 xl:w-32 2xl:w-52'/>
            <div className='text-4xl md:hidden' onClick={() => setOpen (!open)}>
              <ion-icon name={`${ open ? 'close' : 'menu'}`}></ion-icon>
            </div>
        </div>
        {/*600px + */}
        <ul className='md:flex hidden uppercase items-center gap-8'>
          <li>
            <Link to="/" className='py-7 px-3 inline-block text-eacdc2'>
              Home
            </Link>
            <Link to="/" className='py-7 px-3 inline-block text-eacdc2'>
              About
            </Link>
            <Link to="/" className='py-7 px-3 inline-block text-eacdc2'>
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}

        <ul className={`flex flex-col absolute md:hidden border-zinc-200 bg-1e1e1e w-full h-full bottom-0 pt-20 py-7 uppercase duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
          <li>
            <Link to="/" className='py-7 px-3 inline-block text-eacdc2'>
                Home
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
    </>
  )
}