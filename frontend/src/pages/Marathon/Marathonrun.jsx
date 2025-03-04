import React from 'react';

const Marathonrun = () => {
  // Create an array of repeated elements for infinite loop
  const repeatCount = 10; // Adjust this number based on screen width
  const marqueeContent = Array(repeatCount).fill(null).map((_, index) => (
    <React.Fragment key={index}>
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] inline-block uppercase px-4">
        Let's Run
      </h1>
      <div className="mx-1 inline-flex items-center justify-center">
        <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 border-2 border-white rounded-full relative flex items-center justify-center">
          <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </React.Fragment>
  ));

  return (
    <div className="h-[400px] flex flex-col items-center justify-center bg-black p-6">
      {/* Marquee container */}
      <div className="w-full overflow-hidden mb-4 md:mb-8">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {marqueeContent}
        </div>
      </div>

      {/* Content container */}
      <div className="max-w-2xl text-center px-4">
        <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
          Thank you for being a part of the Vriksha Marathon 2025! Your energy and dedication made this event a great success. Let’s keep the spirit alive—lace up and get ready for an even bigger run in 2026! See you at the starting line next year! 
        </p>
      </div>
    </div>
  );
};

export default Marathonrun;
