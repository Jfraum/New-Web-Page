import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import { IKImage } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export function Things () {
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1237-3.JPG?updatedAt=1734915622391",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1361-55.JPG?updatedAt=1734915620973",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1317-39.JPG?updatedAt=1734915619689",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1297-30.JPG?updatedAt=1734915621282",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1247-8.JPG?updatedAt=1734915621174",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1441-76.JPG?updatedAt=1734915622557",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1404-66.JPG?updatedAt=1734915622354",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1268-17.JPG?updatedAt=1734915621610",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1367-58.JPG?updatedAt=1734915621951",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1355-54.JPG?updatedAt=1734915620027",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20Rooftop/_MG_1310-35.JPG?updatedAt=1734915620502",
        },
       
       
    ]

    return (
        <>

        <Nav />
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe src="https://www.youtube.com/embed/OsGkYNW8dHc?autoplay=1&loop=1&controls=0&showinfo=0&modestbranding=1" 
            title="YouTube video player" 
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-64 sm:h-96"> </iframe>
        </div>

        <div className="md:videos ">
            {images.map((image, index) => (
                <div className=" md:mx-5 pt-5 md:my-5" key={index}>
                    <IKImage className="w-full rounded-xl" urlEndpoint={urlEndpoint} path={image.path}  />
                </div>
            ))}
        </div>

        <Footer />
        </>
    )
}