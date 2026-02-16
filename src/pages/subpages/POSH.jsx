import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function POSH () {
  
    return (
        <>

        <Nav />

             <h1 className=" text-eacdc2 text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                        POSH
                    </h1>


        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/YPx42HvE8oA"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>

         {/* texto */}
       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                    
                    <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
    Esta guía de estilo de{" "}
    <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-teal-400">
        {"POSH".split("").map((char, i) => (
        <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
            {char === " " ? "\u00A0" : char}
        </span>
        ))}
    </span>{" "}
    trasciende la moda convencional para enfocarse en la elección de una{" "}
    <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#E0FFFB]">
        {"prenda protagonista".split("").map((char, i) => (
        <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
            {char === " " ? "\u00A0" : char}
        </span>
        ))}
    </span>{" "}
    que te haga sentir increíble, complementándola con piezas básicas y accesorios que aporten seguridad a tu look. El mensaje central destaca que el verdadero truco no es tener más ropa, sino tener claro quién eres y cómo quieres proyectarte, una narrativa visual lograda gracias a la producción de{" "}
    <span className="group inline-block cursor-default font-bold text-[#29CDB5]">
        {"LOUD digitals".split("").map((char, i) => (
        <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2 " style={{ transitionDelay: `${i * 30}ms` }}>
            {char === " " ? "\u00A0" : char}
        </span>
        ))}
    </span>{" "}
    en Costa Rica.
</h2>
                </div>

        <Footer />
        </>
    )
}