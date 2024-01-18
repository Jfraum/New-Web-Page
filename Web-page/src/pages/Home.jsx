import React from "react";
import { IKContext, IKImage } from "imagekitio-react";


export default function Home() {
  
    return (
      <>
      <body className="bg-1e1e1e w-screen h-screen">
        <div className="pt-8 flex items-center justify-center">
      
          <IKContext publicKey="public_uOVFRhFppXpYrQdII5ome8vMYy0=" urlEndpoint="https://ik.imagekit.io/f10c3to17/" transformationPosition="path" authenticationEndpoint="http://www.yourserver.com/auth"/>
            
          <IKImage path=" https://ik.imagekit.io/f10c3to17/home%20photos/Logo/Logo%20SVG.svg?updatedAt=1704316803289 " transformation={[{"height": "300", "width": "400"}]} />

        </div>
        <div className="flex flex-col items-center justify-center pt-12 lg:px-96">
  
          <div className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-12 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-eacdc2 hover:bg-ffe8d6 rounded-full"> 
            <a className="text-1e1e1e font-bold lg:text-2xl 2xl:text-5xl" href="/HomeP">
              Photography
            </a>
          </div>
  
          <div className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-14 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-eacdc2  hover:bg-ffe8d6 rounded-full">
            <a className="text-1e1e1e font-bold lg:text-2xl 2xl:text-5xl" href="/HomeC">
              Code
            </a>
          </div>
  
          <div className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-14 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-eacdc2  hover:bg-ffe8d6 rounded-full">
            <a className="text-1e1e1e font-bold  lg:text-2xl 2xl:text-5xl" href="/HomeD"> 
              Design 
            </a>
          </div>
        </div>
      </body>
    </>
    )
  }

 