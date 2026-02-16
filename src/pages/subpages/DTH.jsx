import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function DTH () {
  
    return (
        <>

        <Nav />
         <h1 className=" text-[#BD00FF] text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                        Digital Training Hub
                    </h1>

        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/Y-OpbMl-DyQ?si=Zcj5cJq0QSqinlAx"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>

         {/* texto */}
       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                    
                   <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
                        <span className="group inline-block cursor-default font-bold text-[#00D1FF]">
                            {"Digital Training Hub".split("").map((char, i) => (
                            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                            ))}
                        </span>{" "}
                        se presenta como una plataforma innovadora de formación en{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-solid underline-offset-4 text-[#BD00FF]">
                            {"ciberseguridad".split("").map((char, i) => (
                            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                            ))}
                        </span>{" "}
                        que transforma el{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-solid underline-offset-4 text-[#BD00FF]">
                            {"aprendizaje técnico".split("").map((char, i) => (
                            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                            ))}
                        </span>{" "}
                        en una experiencia inmersiva y gamificada, donde los usuarios no solo adquieren conocimientos teóricos, sino que juegan, compiten y desarrollan habilidades del mundo real a través de laboratorios interactivos y desafíos de tipo Capture The Flag. Bajo el marco de trabajo NICE, esta iniciativa ofrece rutas de aprendizaje personalizadas para todos los niveles, permitiendo a los estudiantes obtener puntos, insignias y certificaciones mientras se conectan con una comunidad vibrante y reciben mentoría especializada, todo esto posible gracias a una alianza estratégica entre CRDF Global, Cybersec Cluster y Hackrocks, con un diseño integral impulsado por la empresa{" "}
                        <span className="group inline-block cursor-default font-bold text-[#29CDB5]">
                            {"LOUD digitals".split("").map((char, i) => (
                            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2" style={{ transitionDelay: `${i * 30}ms` }}>
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