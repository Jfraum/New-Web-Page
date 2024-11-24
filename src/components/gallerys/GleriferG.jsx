import React from "react";

import { IKImage , IKContext} from "imagekitio-react";

const urlEndpoint = 'https://ik.imagekit.io/f10c3to17';

export default function GleriferG () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/0.jpg?updatedAt=1705406717294",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/1.jpg?updatedAt=1705406716129",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/2.jpg?updatedAt=1705406712631",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/3.jpg?updatedAt=1705406715644",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/4.jpg?updatedAt=1705406710183",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/5.jpg?updatedAt=1706972613788",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/6.jpg?updatedAt=1706972608072",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/7.jpg?updatedAt=1706972614362",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/8.jpg?updatedAt=1706972613978",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/9.jpg?updatedAt=1706972613506",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/10.jpg?updatedAt=1706972615668",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer/11.jpg?updatedAt=1706972616068",

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