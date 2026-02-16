import React from "react";
import { Link } from "react-router-dom";

export function Videos () {
    const videos = [

        {
            path: "/videos/Castro Carazo.gif",
            text: "Universidad Castro Carazo",
            href: "/Castro"
        },
        {
            path: "/videos/DTH.gif",
            text: "Digital Training Hub",
            href: "/DTH"
        },
        {
            path: "/videos/JYCH.gif",
            text: "JYCH",
            href: "/JYCH"
        },
        {
            path: "/videos/Kajiri.gif",
            text: "Kajiri",
            href: "/Kajiri"
        },
        {
            path: "/videos/KOI +.gif",
            text: "KOI +",
            href: "/KOI"
        },
       
        {
            path: "/videos/Lions Club.gif",
            text: "LIONs CLUB",
            href: "/Lions"
        },

        {
            path: "/videos/Rians Palacio del Blumer.gif",
            text: "Palacio del Blumer",
            href: "/Palacio"
        },
        {
            path: "/videos/Style Evolves.gif ",
            text: "Style Add",
            href: "/StyleAdd"
        },
        {
            
            path: "/videos/Metanoia Gif.gif ",
            text: "Metanoia",
            href: "/Metanoia"
        },
        {
            path: "/videos/LA CASA DE LAS SILLAS.gif",
            text: "LA CASA DE LAS SILLAS",
            href: "/LCS"
        },
        {
            path: "/videos/Posh.gif",
            text: "POSH",
            href: "/POSH"
        },
       
        {
            path: "/videos/Samadhi Spa.gif",
            text: "Samadhi Spa",
            href: "/Samadhi"
        },
       

        {
            path: "/videos/TEC.gif",
            text: "TEC",
            href: "/TEC"
        },




        

        {
            path: "/videos/break your limits.gif",
            text: "B Y L",
            href: "/BYL"
        },

        {
             
            path: "/videos/Cinematography reel.gif",
            text: "Cinematography reel",
            href: "/Reel"
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


            <div className="z-0 md:m-10  md:videos pt-10">
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