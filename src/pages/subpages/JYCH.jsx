import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function JYCH () {
  
    return (
        <>

        <Nav />

          <h1 className=" text-[#FFD700] text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                       JYCH
                    </h1>


        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/l2FblPLEGB0"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>

         {/* texto */}
       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

  {/* Párrafo de JYCH Constructores */}


                    <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5 border-t border-gray-700/30">
                        Esta pieza audiovisual presenta la trayectoria de{" "}
                        <span className="group inline-block cursor-default font-bold text-[#FF6B00]">
                        {"JYCH Constructores".split("").map((char, i) => (
                            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                            {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                        </span>, 
                        destacando su capacidad para gestionar proyectos de gran escala como la infraestructura de{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-solid underline-offset-4 text-[#FFD700]">
                        {"supermercados Walmart".split("").map((char, i) => (
                            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                            {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                        </span>{" "}
                        y obras viales complejas. La empresa se enfoca en el{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-solid underline-offset-4 text-[#FFD700]">
                        {"diseño técnico".split("").map((char, i) => (
                            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                            {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                        </span>{" "}
                        y la supervisión rigurosa, garantizando excelencia en cada obra, un estándar de calidad también promovido por el apoyo estratégico de{" "}
                        <span className="group inline-block cursor-default font-bold text-[#29CDB5]">
                        {"LOUD digitals".split("").map((char, i) => (
                            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2 group-hover:text-[#FF6B00]" style={{ transitionDelay: `${i * 30}ms` }}>
                            {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                        </span>{" "}
                        de Costa Rica.
                    </h2>
                </div>

        <Footer />
        </>
    )
}