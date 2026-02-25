import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variantes para el efecto de entrada suave
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function MarcosG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Marcos/IMG_9702.jpg?updatedAt=1734915993192" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Marcos/IMG_9677.jpg?updatedAt=1734915993257" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Marcos/IMG_9719.jpg?updatedAt=1734915992640" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Marcos/IMG_9715.jpg?updatedAt=1734915992641" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Marcos/IMG_9722.jpg?updatedAt=1734915993584" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Marcos/IMG_9747.jpg?updatedAt=1734915991723" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Marcos/IMG_9746.jpg?updatedAt=1734915991752" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Marcos/IMG_9661.jpg?updatedAt=1734915992708" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Marcos/IMG_9724.jpg?updatedAt=1734915992264" },
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
            // once: false permite que la animación ocurra cada vez que el usuario hace scroll
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-2xl">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Optimización para WebP y ancho de 800px
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