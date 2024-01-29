import React from 'react';
import { IKImage } from 'imagekitio-react';

const ImageGallery = ({ images }) => {
  return (
        
    <div>
        {images.map((images, index) => (
            <div key={index}>
                <IKImage urlEndpoint={images.urlEndpoint} path={images.src} />
            </div>
        ))}
    </div>
);
};

export default ImageGallery;
