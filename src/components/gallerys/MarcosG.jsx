import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import LazyLoad from 'react-lazyload';


const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;



export default function MarcosG() {




    
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Marcos/IMG_9702.jpg?updatedAt=1734915993192",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Marcos/IMG_9677.jpg?updatedAt=1734915993257",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Marcos/IMG_9719.jpg?updatedAt=1734915992640",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Marcos/IMG_9715.jpg?updatedAt=1734915992641",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Marcos/IMG_9722.jpg?updatedAt=1734915993584",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Marcos/IMG_9747.jpg?updatedAt=1734915991723",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Marcos/IMG_9746.jpg?updatedAt=1734915991752",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Marcos/IMG_9661.jpg?updatedAt=1734915992708",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Marcos/IMG_9724.jpg?updatedAt=1734915992264",

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