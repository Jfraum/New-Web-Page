import React from "react";
import Nav from "../../components/navbar";
import Mid2000sG from "../../../public/MId200s";
import Footer from "../../components/footer";








export default function Mid2000sP () {
    
    return (
        <>

                <Nav />
                
                <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">

                    <h1 className=" text-eacdc2 text-xl lg:text-2xl 2xl:text-5xl font-light text-justify py-5 flex justify-center">
                        MID 2000s
                    </h1>
                        <h2 className=" text-eacdc2 ext-sm lg:text-xl 2xl:text-xl font-light text-justify py-5" >
                        In an effort to capture the essence of the mid-2000s, MID 2000s draws inspiration from a time when the hipster plaid shirt was a coveted style symbol for all. This exclusive collection was proudly featured in the prestigious pages of "Artells" magazine, reflecting the cultural influence and impact of that era.
                        </h2>
                </div>
            <Mid2000sG />

            <Footer />


        </>
    )
}