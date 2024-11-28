import React from "react";
import overviewImage from "../../assets/Learning/training.png";

const content = [
  { title: "World-Class Facilities" },
  { title: "Expert Mentorship" },
  { title: "Performance Analytics" },
  { title: "Skill-Based Training" },
  { title: "Active Lifestyle Advocacy" },
  { title: "Discipline and Resilience Building" },
];

const Com = ({ content }) => {
  return (
    <div className="w-full h-full flex flex-col justify-start p-4 gap-2">
      <h1 className="text-xl sm:text-2xl text-white font-inter font-bold">
        {content?.title}
      </h1>
      <p className="text-lg sm:text-xl text-gray-400 font-inter">
        {content?.text}
      </p>
    </div>
  );
};

const SportAcademyTrainingMobile = () => {
  return (
    <div
      style={{ backgroundImage: `url(${overviewImage})` }}
      className="w-full min-h-screen bg-cover bg-center pb-10"
    >
      <div className="w-full py-8 border-t border-b border-gray-700">
        <div className="px-6">
          <h1 className="font-inter text-4xl font-semibold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">
              Why us
            </span>
          </h1>
          
        </div>
      </div>

      {content.map((item, index) => (
        <div
          key={index}
          className="w-full border-b border-gray-700 py-6 px-6 relative"
        >
          <div className="absolute w-2 h-2 bg-emerald-400 rounded-sm top-0 left-0 transform -translate-x-1 -translate-y-1" />
          <div className="absolute w-2 h-2 bg-emerald-400 rounded-sm bottom-0 left-0 transform -translate-x-1 translate-y-1" />
          
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-inter font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">
                {index + 1}
              </span>
            </div>
            <Com content={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SportAcademyTrainingMobile;
