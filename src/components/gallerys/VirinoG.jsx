import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import LazyLoad from 'react-lazyload';


const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;



export default function VirinoG () { 
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Virino/_MG_2018.jpg?updatedAt=1734916220120",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Virino/_MG_2089.jpg?updatedAt=1734916219667",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Virino/_MG_1991.jpg?updatedAt=1734916217832",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Virino/_MG_1946.jpg?updatedAt=1734916219292",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Virino/_MG_1964.jpg?updatedAt=1734916218956",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Virino/_MG_1940.jpg?updatedAt=1734916218724",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Virino/_MG_2055.jpg?updatedAt=1734916218369",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Virino/_MG_2083.jpg?updatedAt=1734916218157",

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