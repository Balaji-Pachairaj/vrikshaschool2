import React, { useState } from 'react';

import img1 from "../../glimps/1.jpg"
import img2 from "../../glimps/2.jpg"
import img3 from "../../glimps/3.jpg"
import img4 from "../../glimps/4.jpg"
import img5 from "../../glimps/5.jpg"
import img6 from "../../glimps/6.jpg"
import img7 from "../../glimps/7.jpg"
import img8 from "../../glimps/8.jpg"
import img9 from "../../glimps/9.jpg"
import img10 from "../../glimps/10.jpg"
import img11 from "../../glimps/11.jpg"
import img12 from "../../glimps/12.jpg"
import img13 from "../../glimps/13.jpg"
import img14 from "../../glimps/14.jpg"
import img15 from "../../glimps/15.jpg"
import img16 from "../../glimps/16.jpg"
import img17 from "../../glimps/17.jpg"

const Marathonglimpses = () => {
  const orderedImages = [
    img1, img2, img3,
    img7, img5, img6,
    img4, img8, img9,
    img10, img11, img12,
    img13, img14, img15,
    img16, img17
  ];

  const [loaded, setLoaded] = useState({});

  const handleImageLoad = (index) => {
    setLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-extrabold text-center mb-16 tracking-tight">
        
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
            Marathon Glimpses   
                </span>
      </h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4">
        {orderedImages.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 relative overflow-hidden group"
          >
            {!loaded[index] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
            )}
            <img
              src={image}
              alt={`Marathon moment ${index + 1}`}
              className={`w-full rounded-lg transition-all duration-300
                ${loaded[index] ? 'opacity-100' : 'opacity-0'}
                group-hover:scale-105 group-hover:opacity-90`}
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marathonglimpses;
