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

export default function highP() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/High%20Value%20Density/Captura%20de%20pantalla%202026-02-25%20152430.png" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/High%20Value%20Density/Captura%20de%20pantalla%202026-02-25%20152446.png" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/High%20Value%20Density/Captura%20de%20pantalla%202026-02-25%20151929.png" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/High%20Value%20Density/Challenge919.jpg" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/High%20Value%20Density/Challenge886.jpg" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/High%20Value%20Density/Challenge454.jpg" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/High%20Value%20Density/Challenge191.jpg" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/High%20Value%20Density/Challenge257.jpg" },
  ];

  return (
    <IKContext urlEndpoint={urlEndpoint}>
      <Nav />

       <h1 className=" text-[#FF4D4D] text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                        High Value Density
                    </h1>

      
      {/* Sección del Video con Animación */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="pt-20 pb-10 relative w-full max-w-3xl mx-auto px-4"
      >
        <div className="overflow-hidden rounded-xl shadow-2xl bg-zinc-900">
          <iframe
            src="https://www.youtube.com/embed/yzVMgoir7tU"
            title="YouTube Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-64 sm:h-96"
          ></iframe>
        </div>
      </motion.div>

       <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">
                    <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
                        Alex Hormozi reflects on his concept of a{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#FF4D4D]">
                            {"legacy play".split("").map((char, i) => (
                                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>{" "}
                        explaining that his ultimate goal is to create a{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#FF8E8E]">
                            {"generational inflection point".split("").map((char, i) => (
                                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>{" "}
                        that permanently transforms his{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#E63946]">
                            {"family trajectory".split("").map((char, i) => (
                                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>.{" "}
                        Inspired by historic dynasties, he aims to be the catalyst for change within his lineage, believing that fulfilling this purpose represents a{" "}
                        <span className="group inline-block cursor-default font-bold text-[#FF5A5F]">
                            {"life well-lived".split("").map((char, i) => (
                                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2" style={{ transitionDelay: `${i * 30}ms` }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>{" "}
                        dedicated to being as positive and helpful as possible to the world.
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
  );
}