import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import LazyLoad from 'react-lazyload';


const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;



export default function BonsG () {




    
    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6651.jpg?updatedAt=1771269414243",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6599.jpg?updatedAt=1771269414311",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6647.jpg?updatedAt=1771269414982",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6834.jpg?updatedAt=1771269414374g",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6856.jpg?updatedAt=1771269414310",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6856.jpg?updatedAt=1771269414310",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6615.jpg?updatedAt=1771269413979",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6636.jpg?updatedAt=1771269413973",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6636.jpg?updatedAt=1771269413973",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/BONS/IMG_6843.JPG?updatedAt=1771269412804",

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