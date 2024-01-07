import React from 'react';
import Gallery from '../../public/Glerifer/Gallery';

const GleriferP = () => {
  const images = [
    {
      url: 'public/Glerifer/0.jpg',
    },
    {
      url: 'public/Glerifer/1.jpg',
    },
    {
      url: 'public/Glerifer/2.jpg',
    },
  ];

  return (
    <div>
      <Gallery images={images} />
    </div>
  );
};

export default GleriferP;
