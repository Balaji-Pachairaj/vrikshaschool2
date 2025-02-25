import React from "react";
import Facilities from "./Facilities";
import FacilitiesMobile from "./FacilitiesMobile";
import { useMediaQuery } from "react-responsive";

import junior from "../../assets/Learning/JuniorImage.webp";
import FacilitiesCardsSection from "./FacilitiesCardsSection";

const FacilitiesSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <div className="w-full h-fit bg-black pt-[4rem]">
        <div className="bg-[#1a1a1a] rounded-xl p-8 max-w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Content Section - Left Side */}
            <div className="md:w-1/2">
              <h1 className="font-cabin xl:text-[4.5vw] lg:text-[5vw] md:text-[5.5vw] sm:text-[7vw] text-[9.5vw] text-[white] font-[600]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
                  Vriksha Junior
                </span>
              </h1>
              <p className="font-cabin lg:text-[20px] md:text-[16px] text-[16px] text-[white] font-[400] mt-[1rem]">
                Admission is given for children between 2 to 6 years of age.
              </p>
              <p className="font-cabin lg:text-[20px] md:text-[16px] text-[16px] text-[white] font-[400] mt-[1rem]">
                Unique 'Kiducation' to promote physical, emotional, social,
                emotional, language and intellectual development in the child.
                Setting the right foundation, we unfold your child's conceptual,
                cognitive, motor, creative, & language skills.
              </p>
              <p className="font-cabin lg:text-[20px] md:text-[16px] text-[16px] text-[white] font-[400] mt-[1rem]">
                We follow a teaching methodology based on Play Way, Montessori &
                Reggio Emilia models with a teacher-student ratio of 1:15.
                Active parental involvement is always encouraged in our school.
              </p>
            </div>

            {/* Image Section - Right Side */}
            <div className="md:w-1/2 h-full overflow-hidden rounded-xl">
              <img
                src={junior}
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                alt="Vriksha Junior"
              />
            </div>
          </div>
        </div>
      </div>
      {/* {isMobile ? <FacilitiesMobile /> : <Facilities />} */}
      <FacilitiesCardsSection />
    </>
  );
};

export default FacilitiesSection;
