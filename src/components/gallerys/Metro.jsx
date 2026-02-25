import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variantes para el efecto de entrada (subida y opacidad)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function MetroG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/Goji%2082V1_14.jpg?updatedAt=1710366518034" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/Goji%2082V1_15.jpg?updatedAt=1710366518876" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/Goji%2082V1_19.jpg?updatedAt=1710366518727" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/Goji%2082V1_17.jpg?updatedAt=1710366519305" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/Goji%2082V1_18.jpg?updatedAt=1710366518343" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/Goji%2082V1_20.jpg?updatedAt=1710366518303" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/Goji%2082V1_16.jpg?updatedAt=1710366518678" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/Goji%2082V1_21.jpg?updatedAt=1710366518156" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/_MG_3109.jpg?updatedAt=1705452583367" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/_MG_3047.jpg?updatedAt=1705452585002" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/_MG_3121.jpg?updatedAt=1705452584775" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/metro/_MG_3232.jpg?updatedAt=1705452584712" },
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
            // Se re-activa al hacer scroll hacia arriba o abajo
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-md">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Transformación para alto rendimiento
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