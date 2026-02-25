import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variante de animación consistente con el portafolio
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function MaferG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mafer/05_Mafer.jpg?updatedAt=1710367015584" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mafer/1.jpg?updatedAt=1706976804029" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mafer/2.jpg?updatedAt=1706976804241" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mafer/4.jpg?updatedAt=1706976803251" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mafer/5.jpg?updatedAt=1706976802074" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mafer/6.jpg?updatedAt=1706976802389" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mafer/7.jpg?updatedAt=1706976792005" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mafer/8.jpg?updatedAt=1706976804025" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mafer/JAN_731.jpg?updatedAt=1710367014909" },
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
            // Re-anima al entrar en vista para un efecto dinámico constante
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-md">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Optimización inteligente de imagen
                transformation={[
                  {
                    width: "800",
                    quality: "80",
                    format: "webp",
                  },
                ]}
                className="w-full h-auto block hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </IKContext>
  );
}