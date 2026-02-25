import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variantes de animación consistentes con el resto del sitio
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function StreetG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/0.JPG?updatedAt=1707071842988" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/1.JPG?updatedAt=1707071846714" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/2.JPG?updatedAt=1707071845277" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/3.JPG?updatedAt=1707071844649" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/4.jpg?updatedAt=1707071856971" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/5.jpg?updatedAt=1707071848634" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/6.jpg?updatedAt=1707071846451" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/7.jpg?updatedAt=1707071846103" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/8.jpg?updatedAt=1707071860885" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/9.jpg?updatedAt=1707071850110" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/10.jpg?updatedAt=1707071847156" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/11.jpg?updatedAt=1707071852139" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Streets/12.jpg?updatedAt=1707071865069" },
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
            // Re-anima al entrar en vista para mantener el portafolio dinámico
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-md">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Optimización automática a WebP y control de ancho
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