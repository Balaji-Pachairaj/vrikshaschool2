import React from "react";

const MobileOverview = ({ leftcard, rightcard }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      {/* Content */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 uppercase heading">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
            Overview
          </span>
        </h1>
        <p className="text-gray-300 text-lg leading-tight">
          Vriksha Global School is an educational institution in
          Tamilnadu, India, established in 2012. Since then it has been
          playing a vital role in Promoting the cause of education by
          imparting quality education with special emphasis on the
          holistic development of the child. It is an English medium
          school from class I to class XII affiliated to the Central Board
          of Secondary Education (CBSE), New Delhi.
        </p>
      </div>

      {/* Image Cards */}
      <div className="flex flex-col items-center space-y-8">
        {/* Left Card */}
        <div className="w-64 h-80 relative card-hover-effect">
          <div className="absolute inset-0 bg-blue-500 rounded-lg shadow-hover-blue"></div>
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <img
              src={leftcard}
              alt="Decorative art"
              className="w-full h-full object-cover image-hover-effect"
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="w-64 h-80 relative card-hover-effect">
          <div className="absolute inset-0 bg-purple-500 rounded-lg shadow-hover-purple"></div>
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <img
              src={rightcard}
              alt="Decorative art"
              className="w-full h-full object-cover image-hover-effect"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileOverview;

