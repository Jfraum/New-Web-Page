import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import LazyLoad from 'react-lazyload';


const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;



export default function FirehatG () {




    
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3973.jpg?updatedAt=1734915711925",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3984-2.jpg?updatedAt=1734915711512",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3895.jpg?updatedAt=1734915711278",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3669.jpg?updatedAt=1734915710130",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_4004.jpg?updatedAt=1734915712290",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3705.jpg?updatedAt=1734915710184",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3770.jpg?updatedAt=1734915710227",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3789.jpg?updatedAt=1734915709952",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3747.jpg?updatedAt=1734915708546",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3675.jpg?updatedAt=1734915707662",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3660.jpg?updatedAt=1734915707810",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3679.jpg?updatedAt=1734915708778",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Firehat/IMG_3814-2.jpg?updatedAt=1734915710145",

        },
    

    ]

   
    return (
        <>
            <IKContext
                queryParameters={{
                    blurUpRes: "20",
                }}
            >
                <div className="z-0 mt-10 md:px-2 md:mx-auto md:max-w-7xl md:masonry">
                    {images.map((image, index) => (
                        <div className="" key={index}>
                            <LazyLoad height={200} once>
                                <div className="m-2">
                                    <IKImage urlEndpoint={image.urlEndpoint} path={image.path} loading="lazy"
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