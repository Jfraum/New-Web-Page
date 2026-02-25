import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variantes de animación consistentes
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Mid2000sG() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mid%202000s/2041-12%20copy.jpg?updatedAt=1710367250516" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mid%202000s/1.jpg?updatedAt=1706974652153" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mid%202000s/2.jpg?updatedAt=1706974650366" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mid%202000s/2041-15%20copy.jpg?updatedAt=1710367254044" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mid%202000s/4.jpg?updatedAt=1706974617681" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mid%202000s/2041-14%20copy.jpg?updatedAt=1710367254719" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mid%202000s/6.jpg?updatedAt=1706974615553" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mid%202000s/7.jpg?updatedAt=1706974614007" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mid%202000s/2041-13%20copy.jpg?updatedAt=1710367254435" },
    { urlEndpoint: urlEndpoint, path: "/home%20photos/Mid%202000s/9.jpg?updatedAt=1706974608808" },
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
            // Re-anima al entrar en vista para mantener el dinamismo
            viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="mb-4 break-inside-avoid"
          >
            <div className="m-2 overflow-hidden rounded-lg bg-zinc-900 shadow-md">
              <IKImage
                urlEndpoint={image.urlEndpoint}
                path={image.path}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                // Transformaciones para carga ultra rápida en formato moderno
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