import React from "react";
import { ClipboardList, UserPlus, GraduationCap } from "lucide-react";

const Aoverview = () => {
  return (
    <div className="w-full bg-black min-h-screen pt-[10vh]">
      <div className="w-full h-fit bg-black pt-[0rem] flex flex-col items-center mb-[5vh]">
        <h1 className="font-cabin xl:text-[3vw] lg:text-[3.5vw] md:text-[4vw] sm:text-[4.5vw] text-[5vw] text-[white] text-center font-[600]">
          Admission Overview
        </h1>
      </div>

      <div className="w-full h-fit flex flex-row justify-center">
        <div className="w-fit h-fit border-[1px] rounded-[8px] flex md:flex-row flex-col">
          {/* Enquiry Card */}
          <div className="md:w-[20vw] w-[80vw] flex-1 md:p-[2rem] p-[1rem] flex flex-col md:gap-[1rem] gap-[0.5rem] md:border-e-[1px] md:border-b-[0px] border-e-[0px] border-b-[1px] border-[white] hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <div className="flex justify-center mb-2">
              <ClipboardList className="text-white w-8 h-8" />
            </div>
            <h1 className="font-poppins lg:text-[26px] md:text-[18px] text-[16px] text-[white] font-[600] text-center">
              Enquiry
            </h1>
          </div>

          {/* Registration Card */}
          <div className="md:w-[20vw] w-[80vw] flex-1 md:p-[2rem] p-[1rem] flex flex-col md:gap-[1rem] gap-[0.5rem] md:border-e-[1px] md:border-b-[0px] border-e-[0px] border-b-[1px] border-[white] hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <div className="flex justify-center mb-2">
              <UserPlus className="text-white w-8 h-8" />
            </div>
            <h1 className="font-poppins lg:text-[26px] md:text-[18px] text-[16px] text-[white] font-[600] text-center">
              Registration
            </h1>
          </div>

          {/* Admission Card */}
          <div className="md:w-[20vw] w-[80vw] flex-1 md:p-[2rem] p-[1rem] flex flex-col md:gap-[1rem] gap-[0.5rem] md:border-e-[1px] md:border-b-[0px] border-e-[0px] border-b-[1px] border-[white] hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <div className="flex justify-center mb-2">
              <GraduationCap className="text-white w-8 h-8" />
            </div>
            <h1 className="font-poppins lg:text-[26px] md:text-[18px] text-[16px] text-[white] font-[600] text-center">
              Admission
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex flex-col justify-center items-center mt-[4rem]">
        <p className="ps-8 pe-8 md:max-w-[85%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px] text-[white] text-center font-[400] mt-[1rem]">
          Vriksha global school provides with a high quality educational 
          experience and environment that nurtures sharp learning skills. 
          We are proud of the quality of our staff and the work that they do; 
          we are even prouder of the students with whom we work day by day. 
          We have strived to make our admission process as simple as possible to 
          ensure that all prospective parents enjoy a stress free application experience.
        </p>

        <p className="ps-8 pe-8 md:max-w-[85%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px] text-[white] text-center font-[400] mt-[2rem]">
          Our institution offers a comprehensive academic curriculum aligned with international standards, 
          complemented by state-of-the-art facilities and a modern learning environment. 
          With our experienced and dedicated teaching staff, we maintain a strong focus on holistic development 
          through co-curricular activities. We take pride in providing a safe and nurturing environment 
          for our students, ensuring their overall growth and development.
        </p>
      </div>
    </div>
  );
};

export default Aoverview;