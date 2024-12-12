import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"

export function Metanoia () {
    const images = [
        {
            path: "/public/frames/METANOIA 1.jpg",
        },
        {
            path: "/public/frames/METANOIA 4.jpg",
        },
        {
            path: "/public/frames/METANOIA 5.jpg",
        },
        {
            path: "/public/frames/METANOIA 10.jpg",
        },
        {
            path: "/public/frames/METANOIA 15.jpg",
        },
        {
            path: "/public/frames/METANOIA 16.jpg",
        },
        {
            path: "/public/frames/METANOIA 17.jpg",
        },
        {
            path: "/public/frames/METANOIA 18.jpg",
        },
        {
            path: "/public/frames/METANOIA 19.jpg",
        },
        {
            path: "/public/frames/METANOIA 20.jpg",
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
                    <img className="w-full rounded-xl" src={image.path}  />
                </div>
            ))}
        </div>

        <Footer />
        </>
    )
}