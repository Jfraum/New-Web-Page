import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import LazyLoad from 'react-lazyload';


const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;



export default function PalacioGB () { 
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Rians/IMG_6812.jpg?updatedAt=1734915915970",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Rians/_MG_6836.jpg?updatedAt=1734915916294",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Rians/_MG_6835.jpg?updatedAt=1734915916760",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Rians/IMG_6821.jpg?updatedAt=1734915918425",

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