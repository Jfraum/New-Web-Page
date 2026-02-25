import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variantes de animación para mantener la coherencia
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function SunshineG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/32.jpg?updatedAt=1712444826411" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/15.jpg?updatedAt=1706974760281" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/25.jpg?updatedAt=1706974743049" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/21.jpg?updatedAt=1706974749758" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/37.jpg?updatedAt=1712444829634" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/13.jpg?updatedAt=1706974763560" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/17.jpg?updatedAt=1706974756702" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/18.jpg?updatedAt=1706974755048" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/19.jpg?updatedAt=1706974753344" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/36.jpg?updatedAt=1712444828351" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/34.jpg?updatedAt=1712444828874" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Sunshine/35.jpg?updatedAt=1712444829796" },
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
            // Se re-activa al hacer scroll para dar sensación de fluidez
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-md">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Transformaciones de ImageKit para rendimiento máximo
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