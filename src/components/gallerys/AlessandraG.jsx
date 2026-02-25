import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variante para la animación de cascada infinita
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function AlessandraG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/0.jpg?updatedAt=1705406647393" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/1.jpg?updatedAt=1705406646376" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/2.jpg?updatedAt=1705406646919" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/3.jpg?updatedAt=1705406647010" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/4.jpg?updatedAt=1705406646660" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/5.jpg?updatedAt=1705406647189" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/6.jpg?updatedAt=1705406647274" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/7.jpg?updatedAt=1706888484413" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/8.jpg?updatedAt=1706888486073" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/9.jpg?updatedAt=1706888485526" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/10.jpg?updatedAt=1706888473539" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/11.jpg?updatedAt=1706888472666" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Alessandra%20Luque/12.jpg?updatedAt=1706888486582" },
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
            // once: false hace que la animación se repita al subir y bajar
            viewport={{ once: false, amount: 0.15 }} 
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-md">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Transformación para optimizar el peso de la galería
                transformation={[
                  {
                    width: "800",
                    quality: "80",
                    format: "webp"
                  }
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