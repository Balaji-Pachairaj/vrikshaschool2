// // Marathoncarousal.jsx
// import { useState, useEffect } from 'react';
// import slide1 from "../../assets/marathon/face1.png";
// import slide2 from "../../assets/marathon/face2.png";
// import slide3 from "../../assets/marathon/face3.png";

// const Marathoncarousal = () => {
//   const images = [
//     slide1,
//     slide2,
//     slide3
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => 
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen">
//       {/* Slides */}
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-500 ease-in-out
//             ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//         >
//           <img
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       ))}

//       {/* Navigation Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-4 h-4 rounded-full transition-colors duration-300
//               ${index === currentIndex ? 'bg-white' : 'bg-white/50'} hover:bg-white/75`}
//           />
//         ))}
//       </div>
//       <style>
//         {`
//           @media (max-width: 768px) {
//             .relative.w-full.h-screen {
//               height: 40vh;
//               margin-top: 100px;
//               margin-bottom: 20px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Marathoncarousal;

import React from 'react'
// Import your video - adjust the path as needed
import bgVideo from '../../assets/marathon/marathon.mp4'

function Marathonhero() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        {/* Add any hero content here if needed */}
      </div>
    </div>
  )
}

export default Marathonhero