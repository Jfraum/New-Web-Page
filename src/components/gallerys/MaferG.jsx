import React from "react";
import { IKImage , IKContext } from "imagekitio-react";


const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function MaferG () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mafer/05_Mafer.jpg?updatedAt=1710367015584",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mafer/1.jpg?updatedAt=1706976804029",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mafer/2.jpg?updatedAt=1706976804241",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mafer/4.jpg?updatedAt=1706976803251",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mafer/5.jpg?updatedAt=1706976802074",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mafer/6.jpg?updatedAt=1706976802389",
        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mafer/7.jpg?updatedAt=1706976792005",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mafer/8.jpg?updatedAt=1706976804025",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mafer/JAN_731.jpg?updatedAt=1710367014909",

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