import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import { IKImage } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export function Metanoia () {
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/METANOIA%201.jpg?updatedAt=1734220188722",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/METANOIA%204.jpg?updatedAt=1734220188628",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/METANOIA%2010.jpg?updatedAt=1734220188231",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/METANOIA%2015.jpg?updatedAt=1734220187921",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/METANOIA%205.jpg?updatedAt=1734220187804",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/METANOIA%2016.jpg?updatedAt=1734220187215",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/METANOIA%2019.jpg?updatedAt=1734220186728",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/METANOIA%2017.jpg?updatedAt=1734220186633",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/METANOIA%2020.jpg?updatedAt=1734220186502",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/METANOIA%2018.jpg?updatedAt=1734220186469",
        },
       
    ]

    return (
        <>

        <Nav />
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/UHYV2J1aJ7c?autoplay=1&loop=1&playlist=UHYV2J1aJ7c&controls=0&showinfo=0&modestbranding=1"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
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