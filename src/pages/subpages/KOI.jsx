import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function KOI () {
  
    return (
        <>

        <Nav />

            <h1 className=" text-[#D4FF00] text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                        KOI +
                    </h1>

        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/ah9t8jODlsY"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>

        
     {/* texto */}
       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                    <h2 className="text-eacdc2 text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
    Este video de{" "}
    <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#D4FF00]">
        {"KOI".split("").map((char, i) => (
            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                {char === " " ? "\u00A0" : char}
            </span>
        ))}
    </span>{" "}
    presenta su plataforma{" "}
    <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#D4FF00]">
        {"Koi+".split("").map((char, i) => (
            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                {char === " " ? "\u00A0" : char}
            </span>
        ))}
    </span>{" "}
   , destacando que sus beneficios no son solo promesas sino hechos concretos. En la descripción se enfatizan ventajas clave como la{" "}
    <span className="group inline-block cursor-default font-bold text-[#D4FF00]">
        {"rapidez en la gestión".split("").map((char, i) => (
            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2" style={{ transitionDelay: `${i * 30}ms` }}>
                {char === " " ? "\u00A0" : char}
            </span>
        ))}
    </span>{" "}
   , la ausencia de comisiones y el uso de una interfaz amigable para el usuario. El video concluye con un llamado a la acción, invitando a las personas a{" "}
    <span className="group inline-block cursor-default font-bold text-[#D4FF00]">
        {"abrir su propia cuenta".split("").map((char, i) => (
            <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2" style={{ transitionDelay: `${i * 30}ms` }}>
                {char === " " ? "\u00A0" : char}
            </span>
        ))}
    </span>{" "}
    para comprobar personalmente la eficiencia y facilidad que ofrece el servicio.
</h2>
                   
                </div>

        <Footer />
        </>
    )
}