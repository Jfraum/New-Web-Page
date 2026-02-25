import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Definición de la animación de entrada
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function MariaFernandaG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/0.jpg?updatedAt=1710358610875" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/1.jpg?updatedAt=1710358612317" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/2.jpg?updatedAt=1710358611909" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/3.jpg?updatedAt=1710358607708" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/4.jpg?updatedAt=1710358610312" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/5.jpg?updatedAt=1710358585377" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/6.jpg?updatedAt=1710358584104" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/7.jpg?updatedAt=1710358575447" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/8.jpg?updatedAt=1710358584331" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/9.jpg?updatedAt=1710358581711" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/10.jpg?updatedAt=1710358604818" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/11.jpg?updatedAt=1710358606514" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/12.jpg?updatedAt=1710358600015" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/13.jpg?updatedAt=1710358585360" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/14.jpg?updatedAt=1710358589665" },
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
            // Re-anima al entrar en vista para un efecto de scroll continuo
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-md">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Optimización automática de formato y tamaño
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