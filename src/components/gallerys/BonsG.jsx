import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import LazyLoad from 'react-lazyload';


const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;



export default function BonsG () {




    
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6647.jpg",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6834.jpg",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6834.jpg",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6599.jpg",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6615.jpg",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6651.jpg",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6654.jpg",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6611.jpg",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6856.jpg",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6636.jpg",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6832.jpg",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6615.jpg",

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