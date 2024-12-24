import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import LazyLoad from 'react-lazyload';


const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;



export default function MajoG () { 
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7260.jpg?updatedAt=1734916064448",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7236.jpg?updatedAt=1734916063679",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7267.jpg?updatedAt=1734916064749",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7146.jpg?updatedAt=1734916065895",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7204.jpg?updatedAt=1734916063776",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7283.jpg?updatedAt=1734916063059",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7213.jpg?updatedAt=1734916062169",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7249.jpg?updatedAt=1734916064487",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7241.jpg?updatedAt=1734916062908",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Jos%C3%A9/IMG_7167.jpg?updatedAt=1734916060710",

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