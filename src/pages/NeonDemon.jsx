import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import NeonDemonG from "../components/gallerys/NeonDemonG";






export default function NeonDemonP () {
    
    return (
        <>

                <Nav />

                <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                    <h1 className=" text-eacdc2 text-xl lg:text-2xl 2xl:text-5xl font-light text-justify py-5 flex justify-center">
                        NEON DEMONS
                    </h1>
                    <h2 className=" text-eacdc2 text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5 " >
                    Neon Demons is a photographic series showcasing demons in neon colors, creating a striking contrast where the model moves in a pictorial realm. These captivating photos have been featured in "Quadro Magazine" from Russia, a renowned platform for exceptional art and photographic portraiture, further elevating the visual impact and artistic narrative of this collection.
                    </h2>
                </div>

            <NeonDemonG />

            <Footer />


        </>
    )
}