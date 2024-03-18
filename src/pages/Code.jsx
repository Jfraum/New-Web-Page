import React from "react";
import 'animate.css';

import Nav from "../components/navbar";
import Footer from "../components/footer";

export default function HomeC () {
    
    return (
        <> 


            <Nav />
            <div className="flex items-center justify-center py-56">
                <h1 className="animate__animated animate__swing hover:opacity-50 duration-100 text-eacdc2 text-sm lg:text-2xl 2xl:text-3xl font-bold"> 

                    Coming soon ...
            
                </h1>
            </div>
            <Footer />

        </>
    )
}