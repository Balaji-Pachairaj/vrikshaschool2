import React, { useEffect, useState } from "react";
import leftcard from "../assets/aboutus/1.JPG"
import rightcard from "../assets/aboutus/2.JPG"
import centercard from "../assets/aboutus/3.JPG"

const Overview = () => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowImages(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const overviewSection = document.querySelector(".overview-section");
    if (overviewSection) {
      observer.observe(overviewSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-black min-h-screen text-white overflow-hidden pt-24 font-['Poppins']">
      <div
        className="container mx-auto flex items-center justify-center min-h-screen px-4 overview-section"
        id="overview"
      >
        <div className="relative max-w-7xl w-full">
          {/* Images Grid */}
          <div className={`relative flex flex-col lg:flex-row justify-center items-center mb-16 gap-8 lg:gap-0 ${showImages ? 'show-element' : 'hide-element'}`}>
            {/* Left Image */}
            <div className={`relative z-10 lg:-mr-24 ${showImages ? 'show-element' : 'hide-left'}`}>
              <div className="w-[280px] lg:w-100 h-[280px] lg:h-[360px] rounded-[32px] overflow-hidden shadow-2xl">
                <img 
                  src={leftcard} 
                  alt="Left profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Image */}
            <div className={`relative z-20 ${showImages ? 'show-element' : 'hide-element'}`}>
              <div className="w-[320px] lg:w-[500px] h-[320px] lg:h-[400px] rounded-[40px] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
                <img 
                  src={centercard} 
                  alt="Center profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className={`relative z-10 lg:-ml-32 ${showImages ? 'show-element' : 'hide-element'}`}>
              <div className="w-[280px] lg:w-80 h-[280px] lg:h-[300px] rounded-[32px] overflow-hidden shadow-2xl">
                <img 
                  src={rightcard} 
                  alt="Right profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`text-center flex flex-col items-center mb-8 px-4 ${showImages ? 'show-element' : 'hide-element'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-9xl font-bold mb-8 uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
                Overview
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mx-auto leading-tight max-w-3xl">
              Vriksha Global School is an educational institution in
              Tamilnadu, India, established in 2012. Since then it has been
              playing a vital role in Promoting the cause of education by
              imparting quality education with special emphasis on the
              holistic development of the child. It is an English medium
              school from class I to class XII affiliated to the Central Board
              of Secondary Education (CBSE), New Delhi.
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
          .hide-element {
            opacity: 0;
            transition: all 1.5s ease;
          }
          
          .hide-left {
            transform: translateX(-80%);
          }
          
          .hide-right {
            transform: translateX(80%);
          }
          
          .show-element {
            opacity: 1;
            transform: translateX(0);
          }
          
          @media (max-width: 1024px) {
            .overview-section {
              padding: 2rem 1rem;
            }
            
            .show-element {
              transform: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Overview;
