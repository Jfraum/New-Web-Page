import React from "react";

export default function GleriferP () {

    const images = [

       { url: '/home/juanma/Desktop/New Web page/Web-page/public/Glerifer/0.jpg'},
       { url: "/home/juanma/Desktop/New Web page/Web-page/public/Glerifer/1.jpg"},
       { url: "/home/juanma/Desktop/New Web page/Web-page/public/Glerifer/2.jpg"},
    ];
    return (
        <div>
            {images.map ((image, index) => (
                <div key={index}>
                    <img src={image.url} alt={image.url} />
                </div>
            ))}
        </div>
    )
}