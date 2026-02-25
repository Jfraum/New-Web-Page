import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variante para el efecto de cascada que se repite
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function BarbaraG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/0.jpg?updatedAt=1706977670487" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/1.jpg?updatedAt=1706977668343" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/2.jpg?updatedAt=1706977667431" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/3.jpg?updatedAt=1706977669358" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/4.jpg?updatedAt=1706977666871" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/5.jpg?updatedAt=1706977666383" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/6.jpg?updatedAt=1706977673643" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/15.jpg?updatedAt=1706977708768" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/23.jpg?updatedAt=1706977722195" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/14.jpg?updatedAt=1706977711787" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/10.jpg?updatedAt=1706977705372" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/B%C3%A1rbara/12.jpg?updatedAt=1706977708219" },
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
            // Re-anima cada vez que entran en el viewport
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-md">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Transformación para que las fotos de Bárbara carguen al instante
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