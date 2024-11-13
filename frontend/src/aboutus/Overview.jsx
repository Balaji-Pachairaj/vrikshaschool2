import React from 'react';

const Overview = () => {
  return (
    <div className="relative bg-black min-h-screen text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="relative max-w-7xl w-full">
          {/* Left Decorative Image Card */}
          <div className="absolute left-0 top-0 -translate-x-[95%] -translate-y-32">
            <div className="w-64 h-80 relative">
              <div className="absolute inset-0 bg-blue-500 rounded-lg -rotate-12"></div>
              <div className="absolute inset-0 overflow-hidden rounded-lg -rotate-12">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3"
                  alt="Decorative art"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        
          {/* Center Content */}
          <div className="text-center flex flex-col items-center">
            <h1 className="text-5xl md:text-9xl font-bold mb-8 uppercase">
              Overview
            </h1>
            <p className="text-gray-300 text-xl mx-auto leading-tight max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ornare 
              ipsum nullam fermentum noster, posuere pharetra.
              <br /> 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ornare 
              ipsum nullam fermentum noster, posuere pharetra.
            </p>
          </div>

          {/* Right Decorative Image Card */}
          <div className="absolute right-0 top-0 translate-x-[85%] translate-y-24">
            <div className="w-64 h-80 relative">
              <div className="absolute inset-0 bg-purple-500 rounded-lg rotate-12"></div>
              <div className="absolute inset-0 overflow-hidden rounded-lg rotate-12">
                <img 
                  src="https://images.unsplash.com/photo-1608501947097-86951ad73fea?ixlib=rb-4.0.3"
                  alt="Decorative art"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
