import React, { useState } from "react";
import { IKImage , IKContext } from "imagekitio-react";


const urlEndpoint = 'https://ik.imagekit.io/f10c3to17';

export default function StreetG () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/0.JPG?updatedAt=1707071842988",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/1.JPG?updatedAt=1707071846714",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/2.JPG?updatedAt=1707071845277",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/3.JPG?updatedAt=1707071844649",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/4.jpg?updatedAt=1707071856971",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/5.jpg?updatedAt=1707071848634",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/6.jpg?updatedAt=1707071846451",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/7.jpg?updatedAt=1707071846103",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/8.jpg?updatedAt=1707071860885",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/9.jpg?updatedAt=1707071850110",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/10.jpg?updatedAt=1707071847156",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/11.jpg?updatedAt=1707071852139",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Streets/12.jpg?updatedAt=1707071865069",

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