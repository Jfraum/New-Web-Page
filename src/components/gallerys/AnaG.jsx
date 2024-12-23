import React from "react";
import { IKImage,IKContext } from "imagekitio-react";
import LazyLoad from 'react-lazyload';



const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function AnaG () {



    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/_MG_0243.jpg?updatedAt=1734916251284"
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/0.jpg?updatedAt=1712443985799",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/1.jpg?updatedAt=1712443982549",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/2.jpg?updatedAt=1712443983832",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/3.jpg?updatedAt=1712443984971",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/4.jpg?updatedAt=1712443978988",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/5.jpg?updatedAt=1712443983966",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/6.jpg?updatedAt=1712443974191",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/7.jpg?updatedAt=1712443985664",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/8.jpg?updatedAt=1712443967282",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/9.jpg?updatedAt=1712443979446",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/10.jpg?updatedAt=1712443986934",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Ana%20monrro/11.jpg?updatedAt=1712443989737",

        },



    ];



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