import React from "react";
import { Link } from "react-router-dom";

export function Videos () {
    const videos = [
        {
            
            path: "/videos/Metanoia Gif.gif ",
            text: "Metanoia",
            href: "/Metanoia"
        },

        {
             
            path: "/videos/Cinematography reel.gif",
            text: "Cinematography reel",
            href: "/Reel"
        }
    ]

    return (
        <>


            <div className="z-0 md:m-10  md:videos">
                {videos.map((video, index) => (
                    <div key={index} className="z-0 relative grid pt-2">
                        
                        <Link className="absolute inset-0 z-0 flex items-center justify-center text-ffe8d6 text-2xl font-bold bg-1e1e1e opacity-0 hover:opacity-90 transition duration-300 cursor-pointer" to={video.href}>{video.text}</Link>
                        <img src={video.path} alt={video.text} />
                           
        
                    </div>
                ))}
            </div>
        
        </>
    )
}