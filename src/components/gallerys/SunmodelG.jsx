import React from "react";
import { IKImage , IKContext } from "imagekitio-react";



const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function SunmodelG () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/0.jpg?updatedAt=1707067766768",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/1.jpg?updatedAt=1707067765474",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/2.jpg?updatedAt=1707067768571",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/3.jpg?updatedAt=1707067765699",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/4.jpg?updatedAt=1707067768764",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/5.jpg?updatedAt=1707067768036",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/6.jpg?updatedAt=1707067768583",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/7.jpg?updatedAt=1707067762209",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/8.jpg?updatedAt=1707067760696",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/9.jpg?updatedAt=1707067767283",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/10.jpg?updatedAt=1707067771967",

        },

        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/11.jpg?updatedAt=1707067780065",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Sun%20Model/12.jpg?updatedAt=1707067775532",

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