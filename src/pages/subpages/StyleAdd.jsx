import React from "react";
import Nav from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer.jsx";
import { IKImage, IKContext } from "imagekitio-react";
import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function StyleAdd() {
  const images = [
    { urlEndpoint: urlEndpoint, path: "/Videos/Capture.PNG?updatedAt=1739019299106" },
    { urlEndpoint: urlEndpoint, path: "/Videos/Capture%202.PNG?updatedAt=1739019298776" },
    { urlEndpoint: urlEndpoint, path: "/Videos/1029.jpg?updatedAt=1737481883974" },
    { urlEndpoint: urlEndpoint, path: "/Videos/1037.jpg?updatedAt=1737481883782" },
    { urlEndpoint: urlEndpoint, path: "/Videos/1199.jpg?updatedAt=1737481883613" },
    { urlEndpoint: urlEndpoint, path: "/Videos/1353.jpg?updatedAt=1737481883534" },
    { urlEndpoint: urlEndpoint, path: "/Videos/1118.jpg?updatedAt=1737481883520" },
    { urlEndpoint: urlEndpoint, path: "/Videos/1271.jpg?updatedAt=1737481883129" },
    { urlEndpoint: urlEndpoint, path: "/Videos/1424.jpg?updatedAt=1737481883109" },
    { urlEndpoint: urlEndpoint, path: "/Videos/1255.jpg?updatedAt=1737481882923" },
  ];

  return (
    <IKContext urlEndpoint={urlEndpoint}>
      <Nav />
      
      {/* Sección del Video con Animación */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="pt-20 pb-10 relative w-full max-w-3xl mx-auto px-4"
      >
        <div className="overflow-hidden rounded-xl shadow-2xl bg-zinc-900">
          <iframe
            src="https://youtube.com/embed/zovxASpZiDo?si=YuSWEuuFuPTSv_CR"
            title="YouTube Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-64 sm:h-96"
          ></iframe>
        </div>
      </motion.div>

      {/* Galería Grid de Capturas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mx-6 pb-20">
        {images.map((image, index) => (
          <motion.div 
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="overflow-hidden rounded-xl bg-zinc-900 shadow-lg">
              <IKImage 
                path={image.path} 
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                transformation={[
                  {
                    width: "800",
                    quality: "80",
                    format: "webp", // Convierte PNGs pesados a WebP liviano
                  },
                ]}
                className="w-full h-auto block hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </IKContext>
  );
}