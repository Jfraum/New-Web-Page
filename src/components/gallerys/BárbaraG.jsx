import React  from "react";

import { IKImage, IKContext } from "imagekitio-react";
import LazyLoad from 'react-lazyload';

  

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function BarbaraG () {


    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/0.jpg?updatedAt=1706977670487",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/1.jpg?updatedAt=1706977668343",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/2.jpg?updatedAt=1706977667431",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/3.jpg?updatedAt=1706977669358",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/4.jpg?updatedAt=1706977666871",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/5.jpg?updatedAt=1706977666383",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/6.jpg?updatedAt=1706977673643",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/15.jpg?updatedAt=1706977708768",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/23.jpg?updatedAt=1706977722195",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/14.jpg?updatedAt=1706977711787",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/10.jpg?updatedAt=1706977705372",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/B%C3%A1rbara/12.jpg?updatedAt=1706977708219",

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