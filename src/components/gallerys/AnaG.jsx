import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Definimos la animación de "entrada suave" que se repetirá
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function AnaG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/_MG_0243.jpg?updatedAt=1734916251284" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/0.jpg?updatedAt=1712443985799" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/1.jpg?updatedAt=1712443982549" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/2.jpg?updatedAt=1712443983832" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/3.jpg?updatedAt=1712443984971" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/4.jpg?updatedAt=1712443978988" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/5.jpg?updatedAt=1712443983966" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/6.jpg?updatedAt=1712443974191" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/7.jpg?updatedAt=1712443985664" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/8.jpg?updatedAt=1712443967282" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/9.jpg?updatedAt=1712443979446" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/10.jpg?updatedAt=1712443986934" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Ana%20monrro/11.jpg?updatedAt=1712443989737" },
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
            // once: false permite que la animación se dispare cada vez que haces scroll
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-md">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Transformación para optimizar la velocidad de carga
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