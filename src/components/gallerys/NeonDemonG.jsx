import React from "react";
import { IKImage , IKContext} from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function NeonDemonG () {

    const images = [
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Neon%20Demon/238-26%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg?updatedAt=1710366166790",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Neon%20Demon/238-27%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg?updatedAt=1710366167176",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Neon%20Demon/238-28%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg?updatedAt=1710366167086",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Neon%20Demon/238-29%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg?updatedAt=1710366167143",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Neon%20Demon/_MG_6451%202.jpg?updatedAt=1706984788454",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Neon%20Demon/_MG_6805%202.jpg?updatedAt=1705452647023",

        },
        {
            urlEndpoint: urlEndpoint,
            path: "/home%20photos/Neon%20Demon/_MG_6821%202.jpg?updatedAt=1705452648204",

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