import React from "react";
import { IKImage,IKContext } from "imagekitio-react";



const urlEndpoint = 'https://ik.imagekit.io/f10c3to17';

export default function StephannyG () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/1.jpg?updatedAt=1706810495344",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/2.jpg?updatedAt=1706810531958",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/3.jpg?updatedAt=1706810545701",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/13.jpg?updatedAt=1706816591300",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/5.jpg?updatedAt=1706816418824",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/18.jpg?updatedAt=1706816670031",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/7.jpg?updatedAt=1706816451134",
        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/8.jpg?updatedAt=1706816466314",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/9.jpg?updatedAt=1706816479374",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/22.jpg?updatedAt=1706816726468",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/11.jpg?updatedAt=1706816548708",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Stephanny/25.jpg?updatedAt=1706816775889",

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