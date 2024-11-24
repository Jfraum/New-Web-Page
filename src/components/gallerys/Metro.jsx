import React from "react";

import { IKImage , IKContext } from "imagekitio-react";

const urlEndpoint = 'https://ik.imagekit.io/f10c3to17';

export default function MetroG () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/Goji%2082V1_14.jpg?updatedAt=1710366518034",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/Goji%2082V1_15.jpg?updatedAt=1710366518876",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/Goji%2082V1_19.jpg?updatedAt=1710366518727",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/Goji%2082V1_17.jpg?updatedAt=1710366519305",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/Goji%2082V1_18.jpg?updatedAt=1710366518343",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/Goji%2082V1_20.jpg?updatedAt=1710366518303",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/Goji%2082V1_16.jpg?updatedAt=1710366518678",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/Goji%2082V1_21.jpg?updatedAt=1710366518156",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/_MG_3109.jpg?updatedAt=1705452583367",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/_MG_3047.jpg?updatedAt=1705452585002",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/_MG_3121.jpg?updatedAt=1705452584775",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/metro/_MG_3232.jpg?updatedAt=1705452584712",

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