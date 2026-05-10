import React from "react";
import Nav from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer.jsx";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function VillaEdit () {

    const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Villa%20edit/Captura%20de%20pantalla%202026-05-10%20174103.png" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Villa%20edit/Captura%20de%20pantalla%202026-05-10%20174115.png" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Villa%20edit/Captura%20de%20pantalla%202026-05-10%20174115.png" },
  ];

  
    return (
        <>
        <IKContext urlEndpoint={urlEndpoint}>
        <Nav />

         {/* Sección del Video con Animación */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="pt-20 pb-10 relative w-full max-w-3xl mx-auto px-4"
      >

            <h1 className=" text-teal-400 text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                        Villa Edit
                    </h1>

        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            {/* Cambio de YouTube a Vimeo */}
            <iframe
                src="https://player.vimeo.com/video/1190985775?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Vimeo Video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>
              </motion.div>

        {/* texto */}
       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">
    <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
        This video was created as part of a real estate video editing workshop at{" "}
        <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-teal-400">
            {"The Creators Club".split("").map((char, i) => (
                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
        , led by instructor{" "}
        <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#E0FFFB]">
            {"Kevin Laird".split("").map((char, i) => (
                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
        . None of the footage is mine, and this video isn't being published for that purpose, but rather to demonstrate my ability to{" "}
        <span className="group inline-block cursor-default font-bold text-[#29CDB5]">
            {"recreate this editing style".split("").map((char, i) => (
                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2" style={{ transitionDelay: `${i * 30}ms` }}>
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>{" "}
        and my capacity to meet this challenge.
    </h2>
</div>

  {/* Galería Grid de Capturas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mx-6 pb-20">
        {images.map((image, index) => (
          <motion.div 
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="overflow-hidden rounded-xl bg-zinc-900 shadow-lg">
              <IKImage 
                path={image.path} 
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                transformation={[
                  {
                    width: "800",
                    quality: "80",
                    format: "webp", // Convierte PNGs pesados a WebP liviano
                  },
                ]}
                className="w-full h-auto block hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
          </motion.div>
        ))}
      </div>

        <Footer />
        </IKContext>
        </>
    )
}