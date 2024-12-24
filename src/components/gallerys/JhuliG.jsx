import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import LazyLoad from 'react-lazyload';


const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;



export default function JhuliG () { 
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Jhuli/_MG_8276.jpg?updatedAt=1734915318789",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Jhuli/_MG_8430.jpg?updatedAt=1734915317875",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Jhuli/_MG_8212.jpg?updatedAt=1734915318032",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Jhuli/_MG_8316.jpg?updatedAt=1734915318211",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Jhuli/_MG_8209.jpg?updatedAt=1734915318568",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Jhuli/_MG_8257.jpg?updatedAt=1734915317687",

        },


    ]

   
    return (
        <>
            <IKContext
                queryParameters={{
                    blurUpRes: "20",
                }}
            >
                <div className="z-0 mt-10 md:px-2 md:mx-auto md:max-w-7xl md:masonry ">
                    {images.map((image, index) => (
                        <div className="" key={index}>
                            <LazyLoad height={200} once>
                                <div className="m-2 ">
                                    <IKImage className="shadow-2xl" urlEndpoint={image.urlEndpoint} path={image.path} loading="lazy"
                                        lqip={{ active: true, quality: 20 }}/>
                                </div>
                            </LazyLoad>
                        </div>
                    ))}
                </div>
            </IKContext>
        </>
    )
}