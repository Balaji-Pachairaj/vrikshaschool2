import React from "react";
import img from "./../assets/Learning/backgroundimage.png";

const Overview = () => {
  return (
    <div className="w-full -mt-6 min-h-screen p-6 bg-black">
      <div className="text-center mb-12">
        <h1 className="text-7xl text-white font-bold mb-4">Discover Learning</h1>
       
      </div>
      <div className="relative w-full max-w-6xl mx-auto h-[800px] overflow-hidden rounded-lg shadow-lg">
        <div className="absolute inset-0">
          <img
            src={img}
            alt="Learning Overview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 p-12 text-white">
          <h2 className="text-5xl font-bold mb-8">Learning Journey</h2>
          <div className="space-y-4 text-lg">
            <ul className="list-disc list-inside">
              <li className="mb-3">
                Discover comprehensive learning paths tailored to your needs
              </li>
              <li className="mb-3">
                Access interactive tutorials and hands-on exercises
              </li>
              <li className="mb-3">
                Track your progress with detailed analytics
              </li>
              <li className="mb-3">
                Connect with expert mentors and learning community
              </li>
              <li className="mb-3">
                Earn certificates and showcase your achievements
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 p-12 text-white">
          <h2 className="text-5xl font-bold mb-8">Learning Journey</h2>
          <div className="space-y-4 text-lg">
            <ul className="list-disc list-inside">
              <li className="mb-3">
                Discover comprehensive learning paths tailored to your needs
              </li>
              <li className="mb-3">
                Access interactive tutorials and hands-on exercises
              </li>
              <li className="mb-3">
                Track your progress with detailed analytics
              </li>
              <li className="mb-3">
                Connect with expert mentors and learning community
              </li>
              <li className="mb-3">
                Earn certificates and showcase your achievements
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;