import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function SamadhiSpa () {
  
    return (
        <>

        <Nav />
            <h1 className=" text-[#a5a58d] text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                        Samadhi Spa
                    </h1>

        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/4fnDSidiER8"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>


         {/* texto */}
       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                                        
                    <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
                            Este video promociona los servicios de{" "}
                            <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#a5a58d]">
                                {"limpiezas faciales profundas".split("").map((char, i) => (
                                    <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))}
                            </span>{" "}
                            ofrecidos por un centro de estética, destacando cómo estos procedimientos pueden mejorar la{" "}
                            <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#b7b7a4]">
                                {"apariencia, la higiene y la suavidad".split("").map((char, i) => (
                                    <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))}
                            </span>{" "}
                            de la piel. A través de imágenes que muestran un ambiente relajante y profesional, una especialista explica que utilizan tecnología avanzada en un espacio diseñado para el bienestar del cliente, invitando finalmente a los interesados a ponerse en contacto para recibir{" "}
                            <span className="group inline-block cursor-default font-bold text-[#6b705c]">
                                {"asesoría personalizada".split("").map((char, i) => (
                                    <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2 " style={{ transitionDelay: `${i * 30}ms` }}>
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))}
                            </span>{" "}
                            sin compromiso.
                        </h2>
                </div>

        <Footer />
        </>
    )
}