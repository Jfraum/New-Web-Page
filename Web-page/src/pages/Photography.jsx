import React from "react";
import Navbar from "../components/navbar";
import { IKImage } from "imagekitio-react";
const urlEndpoint = 'https://ik.imagekit.io/f10c3to17';

export default function Photography() {
    
    return (
        <div className="bg-1e1e1e h-screen w-screen">
            <Navbar/>
            <IKImage           
                urlEndpoint={urlEndpoint}
                src="https://ik.imagekit.io/f10c3to17/home%20photos/Home%20images/1.jpg?updatedAt=1704073926775"
            />
        </div>
        
    );
}
