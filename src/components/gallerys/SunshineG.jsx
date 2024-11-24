import React from "react";
import { IKImage, IKContext } from "imagekitio-react";


const urlEndpoint = 'https://ik.imagekit.io/f10c3to17';

export default function SunshineG () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/32.jpg?updatedAt=1712444826411",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/15.jpg?updatedAt=1706974760281",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/25.jpg?updatedAt=1706974743049",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/21.jpg?updatedAt=1706974749758",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/37.jpg?updatedAt=1712444829634",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/13.jpg?updatedAt=1706974763560",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/17.jpg?updatedAt=1706974756702",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/18.jpg?updatedAt=1706974755048",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/19.jpg?updatedAt=1706974753344",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/36.jpg?updatedAt=1712444828351",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/34.jpg?updatedAt=1712444828874",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sunshine/35.jpg?updatedAt=1712444829796",

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
                      <div className="m-2 ">
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