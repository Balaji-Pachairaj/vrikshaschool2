import React from 'react';
import all from "../../assets/alumni/all.png";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen bg-black relative overflow-hidden py-20"
    >
      <div 
        className="container mx-auto px-4 relative"
      >
        {/* Heading Content - Positioned behind image */}
        <div 
          className="absolute top-0 left-0 right-0 z-0 text-center pt-32"
        >
          <h1 
            className="text-6xl md:text-8xl font-bold tracking-tight text-white/80 mb-8"
          >
            Give Back and <br/> Make an Impact
          </h1>
        </div>

        {/* Centered Image with Overlapping Text Box */}
        <div 
          className="relative z-10 max-w-5xl mx-auto"
        >
          <div 
            className="relative"
          >
            {/* Background Rectangle */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#1a1a1a] transform rounded-2xl -z-10"
            />
            
            <div 
              className="w-full h-[600px] md:h-[900px]"
            >
              <img 
                src={all}
                alt="Alumni mentor" 
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Bottom Centered Text Box */}
            <div
              className="absolute -bottom-20 left-0 right-0 mx-auto w-full flex justify-center"
            >
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:p-10 rounded-xl shadow-lg border border-white/10 max-w-3xl w-[90%]"
              >
                <p 
                  className="text-xl text-white font-medium leading-relaxed text-center"
                >
                  Use your experience and expertise to mentor, inspire, and support the next generation of students and alumni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
