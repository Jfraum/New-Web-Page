import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks';

export default function Nav () {

  const [open, setOpen] = useState(false )
  
  return (
    <header>
    <nav className=' w-full py-5 md:flex md:flex-row md:items-center md:justify-between '>
        <div className='flex md:flex-row items-center justify-between'>
          <div className='flex'>
              <img src='/logo.png' alt='logo' className='flex pl-5 md:px-5 w-32'/>
          </div>

          <div className='flex text-4xl md:hidden px-3' onClick={() => setOpen (!open)}>
            <ion-icon name={`${ open ? 'close' : 'menu'}`}></ion-icon>
          </div>

        </div>
        {/*600px + */}
        
        <ul className=' text-sm md:text-lg lg:text-xl 2xl:text-xl pr-10 md:flex  hidden'>
          <li className='flex px-2'>
            <Link to="/" className='flex items-center px-3 md:cursor-pointer  text-eacdc2 hover:opacity-50 duration-300'>
              Home
            </Link>
            </li>
            <Navlinks />
        </ul>

        {/* Mobile nav */}

        <div className={` z-10 absolute flex mt-10 justify-center text-center md:hidden  bg-1e1e1e w-full h-full duration-500
      
      ${open ? 'left-0' : 'left-[-100%]'}`}>

        <ul className=''>
          <li>
            <Link to="/" className=' py-7 px-3 inline-block text-eacdc2 duration-300'>
                Home
            </Link>
          </li>
        <Navlinks />
        </ul>

        </div>

      </nav>
    </header>
  )
}