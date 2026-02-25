import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Definimos la variante para que las fotos "floten" al aparecer
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function BonsG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/BONS/IMG_6651.jpg?updatedAt=1771269414243" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/BONS/IMG_6599.jpg?updatedAt=1771269414311" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/BONS/IMG_6647.jpg?updatedAt=1771269414982" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/BONS/IMG_6834.jpg?updatedAt=1771269414374g" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/BONS/IMG_6856.jpg?updatedAt=1771269414310" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/BONS/IMG_6615.jpg?updatedAt=1771269413979" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/BONS/IMG_6636.jpg?updatedAt=1771269413973" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/BONS/IMG_6843.JPG?updatedAt=1771269412804" },
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
            // once: false permite que al subir y bajar el scroll se repita la animación
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-md">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Optimización de ImageKit para cargar WebP automáticamente
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