import React from "react";
import img from "../../assets/Learning/higher.JPG"
// Import your image
const higherImage = img;

const LearningHigher = () => {
  return (
    <div className="w-full min-h-screen bg-black pt-[6rem]">
      <div className="bg-[#1a1a1a] rounded-xl p-8 max-w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image Section - Left Side */}
          <div className="md:w-1/2 h-full overflow-hidden rounded-xl">
            <img 
              src={higherImage} 
              className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110" 
              alt="Higher Learning" 
            />
          </div>

          {/* Content Section - Right Side */}
          <div className="md:w-1/2">
            <h1 className="font-bold xl:text-[2.5vw] lg:text-[3vw] md:text-[3.5vw] sm:text-[4.5vw] text-[6vw] text-[white] font-[600]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
                Welcome to Vriksha's Primary, Secondary & High School
              </span>
            </h1>
            <p className="font-cabin lg:text-[18px] md:text-[16px] text-[15px] text-[white] font-[400] mt-[1rem]">
              At Vriksha, we provide holistic education from early childhood to high school, nurturing physical, emotional, social, and intellectual growth. Our innovative teaching blends Play Way, Montessori, and experiential learning to cultivate curiosity and confidence. With a focus on values, academics, and global exposure, we shape future-ready individuals.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningHigher;
