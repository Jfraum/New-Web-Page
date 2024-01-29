import React from "react";


export default function Home() {
  
    return (

      
      <body className=" bg-1e1e1e w-screen h-screen">

        <div className="pt-8 flex items-center justify-center">
      
          <img src="logo.png" className="flex justify-center h-12 md:h-32" />

        </div>
        <div className="flex flex-col items-center justify-center pt-8 lg:px-96">
  
          <div className="flex justify-center items-center m-1 w-56 lg:w-80 2xl:m-12 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-eacdc2 hover:bg-ffe8d6 rounded-full"> 
            <a className="text-1e1e1e font-bold lg:text-2xl 2xl:text-5xl" href="/HomeP">
              Photography
            </a>
          </div>
  
          <div className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-14 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-eacdc2  hover:bg-ffe8d6 rounded-full">
            <a className="text-1e1e1e font-bold lg:text-2xl 2xl:text-5xl" href="/HomeC">
              Code
            </a>
          </div>
  
          <div className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-14 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-eacdc2  hover:bg-ffe8d6 rounded-full">
            <a className="text-1e1e1e font-bold  lg:text-2xl 2xl:text-5xl" href="/HomeD"> 
              Design 
            </a>
          </div>
        </div>
      </body>
    )
  }

 