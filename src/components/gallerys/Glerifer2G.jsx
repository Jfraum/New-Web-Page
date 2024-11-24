import React from "react";
import { IKImage,IKContext } from "imagekitio-react";


const urlEndpoint = 'https://ik.imagekit.io/f10c3to17';

export default function Glerifer2G () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/1.jpg?updatedAt=1710368591457",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/2.jpg?updatedAt=1710368621565",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/3.jpg?updatedAt=1710368649539",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/_MG_6746.jpg?updatedAt=1710368559845",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/_MG_6767.jpg?updatedAt=1710368563444",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/_MG_6721%202.jpg?updatedAt=1710156052185",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/4.jpg?updatedAt=1706973179397",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/5.jpg?updatedAt=1706973172664",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/6.jpg?updatedAt=1706973178757",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/7.jpg?updatedAt=1706973178640",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/8.jpg?updatedAt=1706973179078",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Glerifer%202/9.jpg?updatedAt=1706973175702",

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