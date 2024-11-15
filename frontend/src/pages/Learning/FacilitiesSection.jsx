import React from "react";
import Facilities from "./Facilities";
import FacilitiesMobile from "./FacilitiesMobile";
import { useMediaQuery } from "react-responsive";


import junior from "../../assets/Learning/JuniorImage.webp";

const FacilitiesSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <div className=" w-full h-fit bg-black pt-[4rem] flex flex-col items-center">
        <h1 className=" font-cabin xl:text-[4vw] lg:text-[4.5vw] md:text-[5vw] sm:text-[6vw] text-[6.5vw] text-[white] text-center font-[600] ">
          Vriksha Junior
        </h1>
        <p className=" ps-8 pe-8  md:max-w-[85%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[white] text-center font-[400] mt-[1rem]">
          Admission is given for children between 2 to 6 years of age.
        </p>
        <p className=" ps-8 pe-8  md:max-w-[85%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[white] text-center font-[400] mt-[1rem]">
          Unique ‘Kiducation’ to promote physical, emotional, social, emotional,
          language and intellectual development in the child. Setting the right
          foundation, we unfold your child’s conceptual, cognitive, motor,
          creative, & language skills.
        </p>
        <p className=" ps-8 pe-8  md:max-w-[85%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[white] text-center font-[400] mt-[1rem]">
          We follow a teaching methodology based on Play Way, Montessori &
          Reggio Emilia models with a teacher-student ratio of 1:15. Active
          parental involvement is always encouraged in our school.
        </p>

        <div className=" md:w-[80vw] md:h-[40vw] w-[90vw] h-[40vh] mt-[2rem]">
          <img src={junior} className=" w-full h-full object-contain" />
        </div>
      </div>
      {isMobile ? <FacilitiesMobile /> : <Facilities />}
  
    </>
  );
};

export default FacilitiesSection;
