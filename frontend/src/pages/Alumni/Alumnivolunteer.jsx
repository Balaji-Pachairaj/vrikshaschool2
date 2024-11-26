import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-16 min-h-screen">
      <div className="container mx-auto px-4 ">
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 z-10">
            <h1 className="text-6xl font-bold mb-2">
              Give Back and
              <br />
              Make an <span className="text-gray-500">Impact</span>
            </h1>
            
            <div className="mt-8">
              <p className="uppercase text-sm font-medium mb-4">
                Support the next generation
                <br />
                of students and alumni
              </p>
            </div>
  
            <div className="bg-[#303030] rounded-3xl shadow-2xl p-8 mt-12 max-w-md">
              <p className="text-sm mb-6">
                Use your experience and expertise to mentor, inspire, and support the next generation of students and alumni.
              </p>
              
              <button className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors">
                <span>VOLUNTEER NOW</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
  
          {/* Right Content - Image */}
          <div className="lg:w-1/2 lg:absolute lg:right-0 mt-8 lg:mt-0">
            <div className="relative">
              <img 
                src="https://cdn.prod.website-files.com/65478d390c8996a757a4faaa/6593f0ccecce583b5a13a874_Header%20Img.png" 
                alt="Model wearing red t-shirt" 
                className="w-full object-cover"
              />
            </div>
          </div>
  
          {/* Background Decoration */}
          <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-[#b5afaf] rounded-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

