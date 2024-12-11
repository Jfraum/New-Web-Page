import React from "react";

import { IKImage , IKContext } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function IsabelG () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Isabel/0.jpg?updatedAt=1707064419130",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Isabel/1.jpg?updatedAt=1707064414769",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Isabel/2.jpg?updatedAt=1707069044313",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Isabel/8.jpg?updatedAt=1707064421969",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Isabel/7.jpg?updatedAt=1707064420687",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Isabel/9.jpg?updatedAt=1707064420030",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Isabel/10.jpg?updatedAt=1707064432778",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Isabel/11.jpg?updatedAt=1707064437520",

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