import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import { IKImage } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function BYL () {
    const images = [

        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/break%20your%20limits_10179.jpg?updatedAt=1738965857787",
        },
        
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/Break%20your%20limits.PNG?updatedAt=1738965870250",
        },
    
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/break%20your%20limits_10917.jpg?updatedAt=1738965857595",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/break%20your%20limits_10630.jpg?updatedAt=1738965857584",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/break%20your%20limits_10804.jpg?updatedAt=1738965855152",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/break%20your%20limits_10875.jpg?updatedAt=1738965855127",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/break%20your%20limits_10652.jpg?updatedAt=1738965857386",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/break%20your%20limits_11011.jpg?updatedAt=1738965857982",
        }
       
    ]

    return (
        <>

        <Nav />
        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://youtube.com/embed/mw6cvqMss9U?feature=share"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mx-6">
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

// 