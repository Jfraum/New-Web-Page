import React from "react";
import { IKImage, IKContext } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function MariaFernandaG () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/0.jpg?updatedAt=1710358610875",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/1.jpg?updatedAt=1710358612317",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/2.jpg?updatedAt=1710358611909",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/3.jpg?updatedAt=1710358607708",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/4.jpg?updatedAt=1710358610312",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/5.jpg?updatedAt=1710358585377",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/6.jpg?updatedAt=1710358584104",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/7.jpg?updatedAt=1710358575447",
        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/8.jpg?updatedAt=1710358584331",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/9.jpg?updatedAt=1710358581711",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/10.jpg?updatedAt=1710358604818",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/11.jpg?updatedAt=1710358606514",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/12.jpg?updatedAt=1710358600015",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/13.jpg?updatedAt=1710358585360",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Maria%20Fernanda%20-%20Actriz/14.jpg?updatedAt=1710358589665",

        },



    ]

    return (
        <>
  
            <IKContext
    
          queryParameters={{
            blurUpRes: "20",
                }}>
                <div className=" z-0 mt-10  md:px-2 md:mx-auto md:max-w-7xl md:masonry">
                    {images.map((image, index) => (
                    <div className=""  key={index}>
                        <div className="m-2">
                        <IKImage urlEndpoint={image.urlEndpoint} path={image.path}  loading="lazy"
                        lqip={{ active: true, quality: 20 }}/>
                        </div>
                    </div>
                    ))}
                </div>
            </IKContext>
        </>
        )
    
}