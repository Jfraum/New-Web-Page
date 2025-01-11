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
        },
        {
            path: "/videos/Gif - you.gif",
            text: "You",
            href: "/You"
        },

        {
            path: "/videos/Gif - Little Things.gif",
            text: "Little Things",
            href: "/Things"
        },

        {
            path: "/videos/Test.gif",
            text: "Motion",
            href: "/Motion"
        },
    ]

    return (
        <>


            <div className="z-0 md:m-10  md:videos">
                {videos.map((video, index) => (
                    <div key={index} className="z-0 relative grid pt-2 md:mx-5 md:my-5">
                        
                        <Link className="absolute inset-0 z-0 flex items-center justify-center text-ffe8d6 text-2xl font-bold bg-1e1e1e opacity-0 hover:opacity-90 transition duration-300 cursor-pointer" to={video.href}>{video.text}</Link>
                        
                        <img className="w-full rounded-xl" src={video.path} alt={video.text} />
                           
        
                    </div>
                ))}
            </div>
        
        </>
    )
}