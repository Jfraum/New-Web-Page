import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import { IKImage } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function StyleAdd () {
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/1029.jpg?updatedAt=1737481883974",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/1037.jpg?updatedAt=1737481883782",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/1199.jpg?updatedAt=1737481883613",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/1353.jpg?updatedAt=1737481883534",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/1118.jpg?updatedAt=1737481883520",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/1271.jpg?updatedAt=1737481883129",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/1424.jpg?updatedAt=1737481883109",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/Videos/1255.jpg?updatedAt=1737481882923",
        }
       
    ]

    return (
        <>

        <Nav />
        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://youtube.com/embed/zovxASpZiDo?si=YuSWEuuFuPTSv_CR"
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
