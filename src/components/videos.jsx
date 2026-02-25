import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const videoItemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 }, // Empieza un poco más abajo y pequeño
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export function Videos() {
  const videos = [
    { path: "/videos/Castro Carazo.gif", text: "Universidad Castro Carazo", href: "/Castro" },
    { path: "/videos/DTH.gif", text: "Digital Training Hub", href: "/DTH" },
    { path: "/videos/JYCH.gif", text: "JYCH", href: "/JYCH" },
    { path: "/videos/Kajiri.gif", text: "Kajiri", href: "/Kajiri" },
    { path: "/videos/KOI +.gif", text: "KOI +", href: "/KOI" },
    { path: "/videos/Lions Club.gif", text: "LIONs CLUB", href: "/Lions" },
    { path: "/videos/Rians Palacio del Blumer.gif", text: "Palacio del Blumer", href: "/Palacio" },
    { path: "/videos/Style Evolves.gif ", text: "Style Add", href: "/StyleAdd" },
    { path: "/videos/Metanoia Gif.gif ", text: "Metanoia", href: "/Metanoia" },
    { path: "/videos/LA CASA DE LAS SILLAS.gif", text: "LA CASA DE LAS SILLAS", href: "/LCS" },
    { path: "/videos/Challenge GIF 2.gif", text: "High Value Density", href: "/highP" },
    { path: "/videos/Posh.gif", text: "POSH", href: "/POSH" },
    { path: "/videos/Samadhi Spa.gif", text: "Samadhi Spa", href: "/Samadhi" },
    { path: "/videos/TEC.gif", text: "TEC", href: "/TEC" },
    { path: "/videos/break your limits.gif", text: "B Y L", href: "/BYL" },
    { path: "/videos/Cinematography reel.gif", text: "Cinematography reel", href: "/Reel" },
    { path: "/videos/Gif - Little Things.gif", text: "Little Things", href: "/Things" },
    { path: "/videos/Test.gif", text: "Motion", href: "/Motion" },
  ];

  return (
    <div className="z-0 md:m-10 md:videos pt-10">
      {videos.map((video, index) => (
        <motion.div
          key={index}
          variants={videoItemVariants}
          initial="hidden"
          whileInView="visible"
          // CAMBIO CLAVE: once: false hace que se repita siempre
          // amount: 0.3 espera a que el 30% del video sea visible para iniciar
          viewport={{ once: false, amount: 0.3 }} 
          className="z-0 relative mb-12 md:mx-5 md:my-10 overflow-hidden rounded-xl bg-zinc-900 shadow-2xl group"
        >
          <Link
            className="absolute inset-0 z-10 flex items-center justify-center text-[#ffe8d6] text-2xl font-bold bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-center px-4"
            to={video.href}
          >
            {video.text}
          </Link>

          <img
            className="w-full h-auto block transform transition-transform duration-700 group-hover:scale-110"
            src={video.path}
            alt={video.text}
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}