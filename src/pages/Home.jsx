import React from "react";
import Footer from "../components/footer";


export default function Home() {
  
    return (

      
      <>
        {/* Logo Principal */}
        <header className="pt-8 flex items-center justify-center">
      
          <img src="logo.png" className="flex justify-center h-12 md:h-32" />

        </header>


        {/* Botones principales */}
        <div className="flex flex-col items-center justify-center pt-8 lg:px-96">
  
          <a className="flex justify-center items-center m-1 w-56 lg:w-80 2xl:m-12 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-eacdc2 hover:bg-1e1e1e  rounded-full text-1e1e1e hover:text-eacdc2 duration-700 font-bold lg:text-2xl 2xl:text-5xl" href="/HomeP"> 
            <h1>Photography</h1>
          </a>
  
          <a className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-14 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-eacdc2  hover:bg-1e1e1e rounded-full text-1e1e1e hover:text-eacdc2 duration-700 font-bold lg:text-2xl 2xl:text-5xl" href="/HomeC">
            <h1> Coding </h1>
          </a>

          <Footer />
          
        </div>
       
      </>
    )
  }