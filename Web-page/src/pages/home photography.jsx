import React from "react";
import Navbar from "../components/navbar";
import GleriferP from "../../public/Glerifer/gleriferP";

export default function HomeP () {
    
    return (
        <>
        <body className="bg-1e1e1e h-screen">
            <Navbar />
            <div>
               <GleriferP />
            </div>
        </body>
        </>
    )
}