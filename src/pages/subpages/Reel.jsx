import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import { IKImage } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export function Reel () {
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/10.jpg?updatedAt=1734220186052",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/50.jpg?updatedAt=1734220186100",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/20.jpg?updatedAt=1734220186202",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/40.jpg?updatedAt=1734220185709",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/30.jpg?updatedAt=1734220186206",
        },
       
    ]

    return (
        <>

        <Nav />
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe src="https://www.youtube.com/embed/60rsebZLSEk?si=y3iUGrKm1LJJhh4B" 
            title="YouTube video player" 
            allowfullscreen  
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-64 sm:h-96"> </iframe>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 ms-4">
            {images.map((image, index) => (
                <div key={index}>
                    <IKImage className="w-full rounded-xl" urlEndpoint={urlEndpoint} path={image.path}  />
                </div>
            ))}
        </div>

        <Footer />
        </>
    )
}