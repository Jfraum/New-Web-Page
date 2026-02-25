import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variantes para la entrada suave de las imágenes
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function VirinoG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Virino/_MG_2018.jpg?updatedAt=1734916220120" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Virino/_MG_2089.jpg?updatedAt=1734916219667" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Virino/_MG_1991.jpg?updatedAt=1734916217832" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Virino/_MG_1946.jpg?updatedAt=1734916219292" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Virino/_MG_1964.jpg?updatedAt=1734916218956" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Virino/_MG_1940.jpg?updatedAt=1734916218724" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Virino/_MG_2055.jpg?updatedAt=1734916218369" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Virino/_MG_2083.jpg?updatedAt=1734916218157" },
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
            viewport={{ once: false, amount: 0.2 }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-2xl">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Optimización de ImageKit
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