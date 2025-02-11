import React, { useState } from 'react';

import img1 from "../../assets/glimps/1.png"
import img2 from "../../assets/glimps/2.png"
import img3 from "../../assets/glimps/3.png"
import img4 from "../../assets/glimps/4.png"
import img5 from "../../assets/glimps/5.png"
import img6 from "../../assets/glimps/6.png"
import img7 from "../../assets/glimps/7.png"
import img8 from "../../assets/glimps/8.png"
import img9 from "../../assets/glimps/9.png"
import img10 from "../../assets/glimps/10.png"
import img11 from "../../assets/glimps/11.png"
import img12 from "../../assets/glimps/12.png"
import img13 from "../../assets/glimps/13.png"
import img14 from "../../assets/glimps/14.png"
import img15 from "../../assets/glimps/15.png"
import img16 from "../../assets/glimps/16.png"
import img17 from "../../assets/glimps/17.png"

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
        Glimpses from Runtastic 2025  
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
