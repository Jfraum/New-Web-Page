import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variante de animación para la entrada en cascada
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function MajoG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7260.jpg?updatedAt=1734916064448" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7236.jpg?updatedAt=1734916063679" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7267.jpg?updatedAt=1734916064749" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7146.jpg?updatedAt=1734916065895" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7204.jpg?updatedAt=1734916063776" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7283.jpg?updatedAt=1734916063059" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7213.jpg?updatedAt=1734916062169" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7249.jpg?updatedAt=1734916064487" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7241.jpg?updatedAt=1734916062908" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7167.jpg?updatedAt=1734916060710" },
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
            // Re-anima al hacer scroll hacia arriba o abajo
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Transformación para forzar WebP y optimizar el peso
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