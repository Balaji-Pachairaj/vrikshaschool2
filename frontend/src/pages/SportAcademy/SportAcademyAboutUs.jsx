import React from "react";
import png11 from "../../assets/sportsacademy/11.png"
import png12 from "../../assets/sportsacademy/12.png"
import png13 from "../../assets/sportsacademy/13.png"
import png14 from "../../assets/sportsacademy/14.png"
import png15 from "../../assets/sportsacademy/15.png"

const SportAcademyAboutUs = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center bg-black p-4">
      <div className="container mx-auto lg:w-[80%] w-full flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <div className="md:w-1/2 w-full flex flex-col">
          <div className="relative h-[300px] md:h-1/2">
            <img src={png13} className="w-full h-full object-cover" alt="Sports" />
          </div>
          <div className="bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] p-4 md:p-8 flex flex-col justify-between h-[250px] md:h-1/2">
            <p className="text-sm md:text-base lg:text-xl font-bold font-cabin text-white">
              At our sports academy, we believe in transforming the traditional narrative of sports education. We're not just an academy for athletes; we're a hub where sports meet personal growth, career aspirations, and a lifelong commitment to wellness. Our vision is to redefine sports as a mainstream career path, a tool for holistic development, and a way to inspire an active lifestyle that enriches every aspect of life.
            </p>
            
          </div>
        </div>

        {/* Middle Section */}
        <div className="md:w-1/4 w-full h-[300px] md:h-auto">
          <img src={png15} className="w-full h-full object-cover" alt="Sports" />
        </div>

        {/* Right Section */}
        <div className="md:w-1/4 w-full flex flex-col gap-4">
          <div className="h-[200px] md:h-1/2">
            <img src={png12} className="w-full h-full object-cover" alt="Sports" />
          </div>
          <div className="h-[200px] md:h-1/2">
            <img src={png11} className="w-full h-full object-cover" alt="Sports" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportAcademyAboutUs;
