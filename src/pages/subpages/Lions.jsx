import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function Lions () {
  
    return (
        <>

        <Nav />

        <h1 className=" text-[#a5a58d] text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                        LIONs CLUB
                    </h1>


        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/hA8TLKag1hw"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>


         {/* texto */}
       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                                        
                            <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
                                Este video presenta a un hombre que desafía las percepciones negativas sobre el{" "}
                                <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#e63946]">
                                    {"consumo de carne".split("").map((char, i) => (
                                        <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </span>{" "}
                                argumentando que el verdadero problema no es este alimento, sino la{" "}
                                <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#ff4d4d]">
                                    {"desinformación y tendencias sin respaldo".split("").map((char, i) => (
                                        <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </span>.{" "}
                                El orador sostiene que el cuerpo necesita{" "}
                                <span className="group inline-block cursor-default font-bold text-[#f3722c]">
                                    {"fuerza real y nutrientes auténticos".split("").map((char, i) => (
                                        <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2 " style={{ transitionDelay: `${i * 30}ms` }}>
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </span>{" "}
                                frente a los ultraprocesados, invitando finalmente a tomar decisiones conscientes y recibir asesoría en serio.
                            </h2>
                </div>

        <Footer />
        </>
    )
}