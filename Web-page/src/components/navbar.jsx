import React from 'react';
import { useState } from 'react';
import listP from './listP.json'

export default function Navbar () {

  const [isOpen, setIsOpen] = useState (false)

  return (

    <>
      <nav>
        <div className="pt-8 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img className=" h-12" src="logo.png" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="mr-10 flex items-baseline space-x-4">
                <div className='flex'>
                    <a href="#" onClick={() => setIsOpen((prev) => !prev )} className="text-gray-500 hover:text-gray-800 hover:duration-300 duration-100 px-3 py-2 rounded-md text-sm font-medium active:text-gray-300"> 
                    Photograhy
                    </a>
                    {isOpen && (
                      <div className='top-16 absolute flex flex-col items-center justify-center'>
                        {listP.map((item) => (
                          <div>
                            <a className='text-gray-500 hover:text-gray-800 rounded-md text-sm font-medium active:text-gray-300 hover:duration-300 duration-100'> 
                              {item.folder} 
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                    <div>
                  </div>  
                </div>

                <div>
                  <a href="#" className="text-rose-500/70 hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium active:text-rose-300 hover:duration-300 duration-100 "> 
                  About 
                  </a>
                </div>


                <div>
                  <a href="#" className="text-gray-500 hover:text-gray-800 hover:duration-300 duration-100 px-3 py-2 rounded-md text-sm font-medium active:text-gray-300"> 
                  Contact 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
