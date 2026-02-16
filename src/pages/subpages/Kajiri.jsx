import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function Kajiri () {
  
    return (
        <>

        <Nav />


            <h1 className=" text-29CDB5 text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                        Kajiri
                    </h1>

        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/Yn1EKm9CG9k"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>


             {/* texto */}
       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                    
                        <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
                            Este video, desarrollado de la mano de la empresa{" "}
                            <span className="group inline-block cursor-default font-bold text-[#29CDB5]">
                                {"Loud Digital".split("").map((char, i) => (
                                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2" style={{ transitionDelay: `${i * 30}ms` }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                                ))}
                            </span>{" "}, 
                            muestra un recorrido visual por una{" "}
                            <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-teal-400">
                                {"moderna sala de capacitación".split("").map((char, i) => (
                                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                                ))}
                            </span>{" "} 
                            completamente equipada en un ambiente profesional. A través de tomas panorámicas, se presenta una{" "}
                            <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#E0FFFB]">
                                {"oferta promocional".split("").map((char, i) => (
                                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                                ))}
                            </span>{" "} 
                            que incluye un 25% de descuento en la segunda hora de reserva, destacando instalaciones con aire acondicionado y una decoración minimalista ideal para eventos corporativos.
                        </h2>
                </div>

        <Footer />
        </>
    )
}