import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variante de animación consistente con el resto del sitio
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function GleriferG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer/0.jpg?updatedAt=1705406717294" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer/3.jpg?updatedAt=1705406715644" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer/2.jpg?updatedAt=1705406712631" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer/4.jpg?updatedAt=1705406710183" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer/5.jpg?updatedAt=1706972613788" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer/6.jpg?updatedAt=1706972608072" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer/7.jpg?updatedAt=1706972614362" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer%202/1.jpg?updatedAt=1710368591457" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer%202/_MG_6722.jpg?updatedAt=1710368559150" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer%202/4.jpg?updatedAt=1706973179397" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer%202/8.jpg?updatedAt=1706973179078" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer%202/6.jpg?updatedAt=1706973178757" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer%202/7.jpg?updatedAt=1706973178640" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer%202/5.jpg?updatedAt=1706973172664" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer%202/_MG_6746.jpg?updatedAt=1710368559845" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer%202/_MG_6767.jpg?updatedAt=1710368563444" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer%202/3.jpg?updatedAt=1710368649539" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Glerifer/11.jpg?updatedAt=1706972616068" },
  ];

  return (
    <IKContext queryParameters={{ blurUpRes: "20" }}>
      <div className="z-0 mt-10 md:px-2 md:mx-auto md:max-w-7xl md:masonry">
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            // Re-anima al entrar en vista (al bajar y subir)
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-md">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Optimización de ImageKit para cargar WebP automáticamente
                transformation={[
                  {
                    width: "800",
                    quality: "80",
                    format: "webp",
                  },
                ]}
                className="w-full h-auto block hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </IKContext>
  );
}