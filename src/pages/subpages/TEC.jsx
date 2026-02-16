import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function TEC () {
  
    return (
        <>

        <Nav />

                <h1 className=" text-[#e63946] text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                        Tecnológico de Costa Rica
                    </h1>

        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/acYCs7E2328"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>

   {/* texto */}
       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                                        
                            <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
                                Este video plantea que el concepto tradicional de{" "}
                                <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#e63946]">
                                    {"empleo estable".split("").map((char, i) => (
                                        <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </span>{" "}
                                ha dejado de existir debido a los cambios constantes en las empresas. La presentadora explica que quienes no{" "}
                                <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#e63946]">
                                    {"actualizan sus habilidades".split("").map((char, i) => (
                                        <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </span>{" "}
                                son los primeros en quedar fuera, resaltando la importancia de los programas del{" "}
                                <span className="group inline-block cursor-default font-bold text-[#e63946]">
                                    {"Tecnológico de Costa Rica".split("").map((char, i) => (
                                        <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2 " style={{ transitionDelay: `${i * 30}ms` }}>
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </span>{" "}
                                para mantenerse competitivos a través del aprendizaje continuo.
                            </h2>
                </div>

        <Footer />
        </>
    )
}