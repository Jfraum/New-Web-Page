import React from "react";
import { IKImage} from "imagekitio-react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;



export default function IndexImages () {

 
    const images = [

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/14.jpg?updatedAt=1710358589665",
            text: "Maria Fernanda/Actress",
            href: "/MariaFP"
        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Marcos/IMG_9747.jpg?updatedAt=1734915991723",
            text: "Marcos",
            href: "/Marcos"  
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Home%20images/4.jpg?updatedAt=1704074419778",
            text: "Alessandra",
            href:"/AlessandraP"
        },      

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7283.jpg?updatedAt=1734916063059",
            text: "Maria Jose",
            href: "/Majo"  
        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Rians/IMG_6812.jpg?updatedAt=1734915915970",
            text: "Palacio del Blumer",
            href: "/Palacio"  
        },
        
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/_MG_6721%202.jpg?updatedAt=1710156052185",
            text: "Glerifer 2",
            href: "/Glerifer2P"
        },


        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Home%20images/2.jpg?updatedAt=1704074062152",
            text: "Stephanny/Actress",
            href: "/StephannyP"
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Virino/_MG_1940.jpg?updatedAt=1734916218724",
            text: "Virino campaign",
            href: "/Virino"  
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/0.jpg?updatedAt=1712443985799",
            text: "Ana",
            href: "/AnaP"
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Jhuli/_MG_8212.jpg?updatedAt=1734915318032",
            text: "Jhulianna",
            href: "/Jhuli"
        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Home%20images/18.jpg?updatedAt=1704077634786",
            text: "Bárbara",
            href: "/BarbaraP"
        },
       
     
        
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Home%20images/21.jpg?updatedAt=1704078143553",
            text: "Sun Model",
            href: "/SunmodelP"
        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Home%20images/20.jpg?updatedAt=1704078296495",
            text: "Glerifer",
            href: "/GleriferP"
        },

        

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Home%20images/_MG_9962.jpg?updatedAt=1706281203881",
            text: "Streets",
            href: "/StreetP"
        },

     

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3814-2.jpg?updatedAt=1734915710145",
            text: "Firehat Campaign",
            href: "/Firehat"
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1237-3.JPG?updatedAt=1734915622391",
            text: "Little Things",
            href: "/Things"
        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Home%20images/_MG_0936.jpg?updatedAt=1706983369770",
            text: "Isabel",
            href: "/IsabelP"
        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Neon%20Demon/238-26%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg?updatedAt=1710366166790",
            text: "Neon Demon",
            href: "/NeonDemonP"
        },


        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/Goji%2082V1_14.jpg?updatedAt=1710366518034",
            text: "Metro/Yaguara",
            href: "/MetroP"
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mafer/05_Mafer.jpg?updatedAt=1710367015584",
            text: "Mafer",
            href: "/MaferP"
        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/18.jpg?updatedAt=1706974755048",
            text: "Sunshine",
            href: "/SunshineP"
        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mid%202000s/2041-12%20copy.jpg?updatedAt=1710367250516",
            text: "Mid 2000s",
            href: "/Mid2000sP"
        },
    ]



    return (
        <div className="z-0 mt-10 md:px-2 md:mx-auto  md:masonry">
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    className="z-0 relative grid pt-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div>
                        <Link
                            className="absolute inset-0 z-0 flex items-center justify-center text-ffe8d6 text-2xl font-bold bg-1e1e1e opacity-0 hover:opacity-50 transition duration-300 cursor-pointer"
                            to={image.href}
                        >
                            {image.text}
                        </Link>
                        <IKImage
                            urlEndpoint={image.urlEndpoint}
                            path={image.path}
                            loading="lazy"
                            lqip={{ active: true, quality: 20 }}
                            className=""
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
    
}