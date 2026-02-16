import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import { IKImage } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function CastroCarazo () {
  
    return (
        <>

        <Nav />

           <h1 className=" text-teal-400 text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                        Castro Carazo
                    </h1>

        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/7Thwdtxv0b0?si=9DnEp3KLeDLGKteq"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>


     {/* texto */}
       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                    
                    <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
                        Esta formación jurídica en la{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-teal-400">
                            {"Universidad Castro Carazo".split("").map((char, i) => (
                            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                            ))}
                        </span>{" "}
                        trasciende el estudio de leyes y códigos para centrarse en el desarrollo de{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#E0FFFB]">
                            {"habilidades blandas".split("").map((char, i) => (
                            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                            ))}
                        </span>{" "}
                        esenciales como la oratoria, la argumentación, la negociación y el liderazgo, permitiendo a los futuros profesionales comunicar con claridad, persuadir con solidez y guiar procesos de resolución de conflictos con empatía y visión. El mensaje central destaca que la sociedad actual no solo necesita expertos en normas, sino líderes integrales capaces de transformar su entorno con valores sólidos, un enfoque innovador que fue diseñado gracias al apoyo de la empresa{" "}
                        <span className="group inline-block cursor-default font-bold text-[#29CDB5]">
                            {"LOUD digitals".split("").map((char, i) => (
                            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2 " style={{ transitionDelay: `${i * 30}ms` }}>
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
