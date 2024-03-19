import React from "react";
import Nav from "../../components/navbar";
import SunshineG from "../../components/gallerys/SunshineG";
import Footer from "../../components/footer";







export default function SunshineP () {
    
    return (
        <>

                <Nav />

                <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                    <h1 className=" text-eacdc2 text-xl lg:text-2xl 2xl:text-5xl font-light text-justify py-5 flex justify-center">
                        SUNSHINE
                    </h1>
                    <h2 className=" text-eacdc2 ext-sm lg:text-xl 2xl:text-xl font-light text-justify py-5" >
                    Sunshine is a photographic series dedicated to capturing the enchantment of the sun in images, where the sun plays a significant role, whether placed front and center or as a radiant backdrop behind the model. These photos have been featured in the prestigious "Artego Magazine," renowned for its influence in the realms of art and fashion, showcasing the beauty and artistic impact of this collection.
                    </h2>
                </div>

            <SunshineG />

            <Footer />
        </>
    )
}