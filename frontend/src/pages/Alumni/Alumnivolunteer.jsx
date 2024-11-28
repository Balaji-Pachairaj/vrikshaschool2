import React from 'react';
import all from "../../assets/alumni/all.png";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Top Content */}
          <div className="w-full max-w-3xl ">
            <h1 className="text-6xl font-bold tracking-tight">
              Give Back and Make an Impact
            </h1>
            
            <div className="mt-8">
              <p className="text-lg font-medium">
                Use your experience and expertise to mentor, inspire, and support the next generation of students and alumni.
              </p>
            </div>
          </div>
  
          {/* Centered Image with Rectangle */}
          <div className="w-full max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-white rounded-3xl h-[600px] w-[100%] mx-auto -z-10" />
            <img 
              src={all}
              alt="Alumni mentor" 
              className="w-full h-[740px] object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

