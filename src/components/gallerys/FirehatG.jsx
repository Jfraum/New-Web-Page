import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variantes de animación: subida suave y opacidad
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function FirehatG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3973.jpg?updatedAt=1734915711925" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3984-2.jpg?updatedAt=1734915711512" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3895.jpg?updatedAt=1734915711278" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3669.jpg?updatedAt=1734915710130" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_4004.jpg?updatedAt=1734915712290" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3705.jpg?updatedAt=1734915710184" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3770.jpg?updatedAt=1734915710227" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3789.jpg?updatedAt=1734915709952" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3747.jpg?updatedAt=1734915708546" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3675.jpg?updatedAt=1734915707662" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3660.jpg?updatedAt=1734915707810" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3679.jpg?updatedAt=1734915708778" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Firehat/IMG_3814-2.jpg?updatedAt=1734915710145" },
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
            // Re-anima al entrar en vista (bajar o subir scroll)
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Transformación para optimizar el rendimiento
                transformation={[
                  {
                    width: "800",
                    quality: "80",
                    format: "webp",
                  },
                ]}
                className="w-full h-auto block shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </IKContext>
  );
}