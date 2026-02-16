import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function LCS () {
  
    return (
        <>

        <Nav />

             <h1 className=" text-[#ffffff] text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                       LA CASA DE LAS SILLAS
                    </h1>


        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/ihJWXDvcl4o"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>


          {/* texto */}
       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

  {/* Párrafo de LA CASA DE LAS SILLAS */}

         <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
                    Este video presenta a{" "}
                    <span className="group inline-block cursor-default font-bold text-[#ffffff]">
                        {"La Casa de las Sillas".split("").map((char, i) => (
                        <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                        ))}
                    </span>, 
                    destacando su especialización en mobiliario diseñado para transformar espacios con{" "}
                    <span className="group inline-block cursor-default font-bold underline decoration-solid underline-offset-4 text-[#CCFF00]">
                        {"estilo y funcionalidad".split("").map((char, i) => (
                        <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                        ))}
                    </span>. 
                    La pieza resalta la calidad de sus productos, desde opciones ergonómicas hasta diseños modernos, buscando siempre la comodidad del cliente. 
                    </h2>
                </div>

        <Footer />
        </>
    )
}