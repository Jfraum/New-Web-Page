import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  
    return (
        <div className="bg-1e1e1e w-screen h-screen">
            <div className="pt-8 flex items-center justify-center">
                <img src="logo.png" className="flex justify-center w-20 lg:w-40 2xl:w-80" />
            </div>
            <ul className="flex flex-col items-center justify-center pt-8 lg:px-96">
                <li className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-12 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-eacdc2 hover:bg-ffe8d6 rounded-full"> 
                    <Link className="text-1e1e1e font-bold lg:text-2xl 2xl:text-5xl" to="/Photography">
                      Photography
                    </Link>
                </li>
                <li className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-14 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-eacdc2  hover:bg-ffe8d6 rounded-full">
                    <Link className="text-1e1e1e font-bold lg:text-2xl 2xl:text-5xl" to="/Code">
                      Code
                    </Link>
                </li>
                <li className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-14 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-eacdc2  hover:bg-ffe8d6 rounded-full">
                    <Link className="text-1e1e1e font-bold  lg:text-2xl 2xl:text-5xl" to="/Design"> 
                      Design 
                    </Link>
                </li>
            </ul>
        </div>
    );
  }

 
