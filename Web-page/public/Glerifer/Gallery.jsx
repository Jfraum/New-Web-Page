import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="flex flex-wrap bg-1e1e1e pt-12">
      {images.map((image, index) => (
        <div key={index} className="p-5">
          <img src={image.url} alt="image" className="w-32" />
          <p className="text-lg">{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
