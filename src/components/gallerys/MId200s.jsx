import React from "react";

import { IKImage , IKContext } from "imagekitio-react";

const urlEndpoint = 'https://ik.imagekit.io/f10c3to17';

export default function Mid2000sG () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mid%202000s/2041-12%20copy.jpg?updatedAt=1710367250516",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mid%202000s/1.jpg?updatedAt=1706974652153",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mid%202000s/2.jpg?updatedAt=1706974650366",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mid%202000s/2041-15%20copy.jpg?updatedAt=1710367254044",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mid%202000s/4.jpg?updatedAt=1706974617681",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mid%202000s/2041-14%20copy.jpg?updatedAt=1710367254719",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mid%202000s/6.jpg?updatedAt=1706974615553",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mid%202000s/7.jpg?updatedAt=1706974614007",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mid%202000s/2041-13%20copy.jpg?updatedAt=1710367254435",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Mid%202000s/9.jpg?updatedAt=1706974608808",

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