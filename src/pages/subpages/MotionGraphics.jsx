import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"




export default function Motion () {
    return (
        <>

        <Nav />

        <div className=" pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe src="https://www.youtube.com/embed/VxYv-zHt5Ak" 
            title="YouTube video player" 
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-64 sm:h-96"> </iframe>
        </div>


        <Footer />
        </>
    )
}