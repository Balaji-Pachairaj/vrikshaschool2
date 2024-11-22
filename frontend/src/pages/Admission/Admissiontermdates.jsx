import React from "react";

const Admissiontermdates = () => {
  return (
    <div className="w-full bg-black min-h-screen pb-24 pt-[10vh]">
      <div className="w-full h-fit bg-black pt-[0rem] flex flex-col items-center mb-[5vh]">
        <h1 className="font-cabin xl:text-[3vw] lg:text-[3.5vw] md:text-[4vw] sm:text-[4.5vw] text-[5vw] text-[white] text-center font-[600]">
          Term Dates
        </h1>
      </div>

      <div className="w-full h-fit flex flex-row justify-center">
        <div className="w-fit h-fit border-[1px] rounded-[8px] flex md:flex-row flex-col">
          {/* First Term Card */}
          <div className="md:w-[20vw] w-[80vw] flex-1 md:p-[2rem] p-[1rem] flex flex-col md:gap-[1rem] gap-[0.5rem] md:border-e-[1px] md:border-b-[0px] border-e-[0px] border-b-[1px] border-[white] hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <h1 className="font-poppins lg:text-[26px] md:text-[18px] text-[16px] text-[white] font-[600] text-center">
              First Term
            </h1>
            <p className="text-white text-center text-lg">
              1st - 10th April
            </p>
          </div>

          {/* Second Term Card */}
          <div className="md:w-[20vw] w-[80vw] flex-1 md:p-[2rem] p-[1rem] flex flex-col md:gap-[1rem] gap-[0.5rem] md:border-e-[1px] md:border-b-[0px] border-e-[0px] border-b-[1px] border-[white] hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <h1 className="font-poppins lg:text-[26px] md:text-[18px] text-[16px] text-[white] font-[600] text-center">
              Second Term
            </h1>
            <p className="text-white text-center text-lg">
              1st - 10th August
            </p>
          </div>

          {/* Third Term Card */}
          <div className="md:w-[20vw] w-[80vw] flex-1 md:p-[2rem] p-[1rem] flex flex-col md:gap-[1rem] gap-[0.5rem] md:border-e-[1px] md:border-b-[0px] border-e-[0px] border-b-[1px] border-[white] hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <h1 className="font-poppins lg:text-[26px] md:text-[18px] text-[16px] text-[white] font-[600] text-center">
              Third Term
            </h1>
            <p className="text-white text-center text-lg">
              1st - 10th December
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissiontermdates;