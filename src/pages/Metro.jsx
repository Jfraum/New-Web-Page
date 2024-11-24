import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import MetroG from "../components/gallerys/Metro";








export default function MetroP () {
    
    return (
        < >

                <Nav />

                <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                    <h1 className=" text-eacdc2 text-xl lg:text-2xl 2xl:text-5xl font-light text-justify py-5 flex justify-center">
                        METRO / CARACAS
                    </h1>
                        <h2 className=" text-eacdc2 ext-sm lg:text-xl 2xl:text-xl font-light text-justify py-5" >
                        METRO/CARACAS is a portrait collection where the model is immersed in the subway cars of Caracas (La Yaguara station), symbolizing the daily transport that takes us to our destinations. These captivating images were showcased in the pages of "COJI magazine," capturing the essence and vibrancy of urban life in Caracas.
                        </h2>
                </div>

            <MetroG />

            <Footer />


        </>
    )
}