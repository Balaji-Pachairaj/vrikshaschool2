import React from "react";

const AdmissionStepsNew = () => {
  return (
    <div className=" w-full h-fit flex sm:flex-row flex-col mt-[3rem] ">
      <div className=" md:w-[50vw] w-full h-fit bg-black text-start flex flex-col justify-start items-start p-6 md:ps-[4rem] gap-[2rem] ">
        <div className="text-white w-full">
          <h2 className="text-[24px] md:text-[2vw] font-inter font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
              Admission Process
            </span>
          </h2>
          <div className="mb-6">
            <h3 className="text-[20px] md:text-[1.5vw] font-inter font-semibold mb-2">
              Online
            </h3>
            <p className="text-[#d0d0d0] text-[14px] md:text-[16px] font-inter font-light">
              Submit the online Enquiry Form from via this link. Our admission
              in charge will get back to you to answer your questions and
              collect the required information.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] md:text-[1.5vw] font-inter font-semibold mb-2">
              On Campus
            </h3>
            <p className="text-[#d0d0d0] text-[14px] md:text-[16px] font-inter font-light">
              Visit the school admissions office and submit the Enquiry Form.
              Our admission in charge will clear all your queries and will give
              complete description about the functioning of the school
              curriculum. Parents / Guardians are invited to visit the school
              campus to understand the culture and ethos of the Institution.
            </p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className=" md:w-[45vw] w-full h-fit  md:pt-[2rem] pt-[0.5rem] md:ps-[4rem] ps-[3rem] ">
        <ul className=" list-disc flex flex-col md:gap-[2rem] gap-[1rem]">
          <li className=" text-[16px] md:text-[1.5vw] text-white font-inter font-semibold mb-2">
            ENQUIRY
          </li>
          <li className=" text-[16px] md:text-[1.5vw] text-white font-inter font-semibold mb-2">
            REGISTRATION
          </li>
          <li className=" text-[16px] md:text-[1.5vw] text-white font-inter font-semibold mb-2">
            FORM SUBMISSION AND ADMISSION CONFIRMATION
          </li>
          <li className=" text-[16px] md:text-[1.5vw] text-white font-inter font-semibold mb-2">
            PAYMENT OF FEES
          </li>
          <li className=" text-[16px] md:text-[1.5vw] text-white font-inter font-semibold mb-2">
            PARENT ORIENTATION FORM
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdmissionStepsNew;
