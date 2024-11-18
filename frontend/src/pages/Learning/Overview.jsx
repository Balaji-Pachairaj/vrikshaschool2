import React from "react";
import bg from "../../assets/Learning/backgroundimage.png";
import overviewImage from "../../assets/Learning/learningOverview.webp";

import { motion, useAnimation } from "framer-motion";

const Overview = () => {
  let MoreAboutUstext1 = useAnimation();
  let MoreAboutUstext2 = useAnimation();

  return (
    <div
      className=" w-full min-h-screen  h-fit relative overflow-hidden bg-cover pb-[10vh] pt-[5vh] "
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* <img className=" w-full h-full object-cover " src={bg} /> */}

      <div className=" w-full h-fit  top-0 left-0 pt-[10vh] flex flex-col justify-center items-center ">
        <div className="w-fit h-fit border-[1px] rounded-[8px] flex md:flex-row flex-col justify-center ">
          {/* ONE */}
          <div className="lg:w-[30vw] md:w-[40vw] w-[80vw] flex-1 md:p-[2rem] p-[1rem] flex flex-col md:gap-[1rem] gap-[0.5rem] md:border-e-[1px] md:border-b-[0px] border-e-[0px] border-b-[1px] border-[white] hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <h1 className=" font-poppins lg:text-[26px] md:text-[18px] text-[24px] text-[white] font-[600] text-center ">
              Overview
            </h1>
            <p className=" lg:text-[16px] md:text-[14px] text-[12px] text-[#fbfbfb]">
              The School is affiliated to the Central Board of Secondary
              Education (CBSE).
            </p>
            <p className=" lg:text-[16px] md:text-[14px] text-[12px] text-[#fbfbfb]">
              We encourage independence in our students to develop individual
              interests and be passionate about what they wish to do.
            </p>
            <p className=" lg:text-[16px] md:text-[14px] text-[12px] text-[#fbfbfb]">
              Students are made to feel connected to everything that goes on in
              the world- through projects, curriculum related activities like
              excursions, workshops, lectures, seminars, films and national and
              international festivals and anniversaries.
            </p>
          </div>

          {/* ONE */}
          <div className="lg::w-[30vw] md:w-[40vw] w-[80vw]  flex-1 md:p-[2rem] p-[1rem] flex flex-col gap-[1rem] md:border-e-[1px] md:border-b-[0px] border-e-[0px] border-b-[1px] border-[white]  hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <h1 className=" font-poppins lg:text-[26px] md:text-[18px] text-[24px] text-[white] font-[600] text-center ">
              Academics
            </h1>
            <p className=" lg:text-[16px] md:text-[14px] text-[12px] text-[#fbfbfb]">
              The medium of instruction is English and the second language for
              all classes up to VIII is Tamil. Hindi/ French are a third choice
              from classes VI to VIII. Our students have shown excellent results
              in both our Class X Board examinations.
            </p>
            <p className=" lg:text-[16px] md:text-[14px] text-[12px] text-[#fbfbfb]">
              Physical Education and work experience are an essential part of
              the curriculum. Computer science is compulsory for classes IV to
              X. Plans are afoot to offer an additional foreign and modern
              Indian language.
            </p>
            <p className=" lg:text-[16px] md:text-[14px] text-[12px] text-[#fbfbfb]">
              In junior school the curriculum is based on the fundamentals –
              mathematics, science, language and reasoning – the basics of all
              learning. No formal examinations are held until class VI. However
              there is an assessment system based on weekly class assignments
              and projects.
            </p>
          </div>
        </div>
        {/* <div className=" w-full h-fit flex flex-col items-center">
          <h1 className=" font-cabin xl:text-[4vw] lg:text-[4.5vw] md:text-[5vw] sm:text-[6vw] text-[6.5vw] text-[white] text-center font-[500]">
           
          </h1>

          <p className=" ps-8 pe-8 md:max-w-[705px] max-w-[580px] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[#dcdcdc] text-center font-[400] mt-[1rem]">
            The School is affiliated to the Central Board of Secondary Education
            (CBSE).
          </p>
          <p className=" ps-8 pe-8 md:max-w-[75%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[#dcdcdc] text-center font-[400] mt-[1rem]">
            We encourage independence in our students to develop individual
            interests and be passionate about what they wish to do.
          </p>
          <p className=" ps-8 pe-8  md:max-w-[75%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[#dcdcdc] text-center font-[400] mt-[1rem]">
            Students are made to feel connected to everything that goes on in
            the world- through projects, curriculum related activities like
            excursions, workshops, lectures, seminars, films and national and
            international festivals and anniversaries.
          </p>
        </div>

        <div className=" w-full h-fit flex flex-col items-center mt-[5rem]">
          <h1 className=" font-cabin xl:text-[3.5vw] lg:text-[4vw] md:text-[4.5vw] sm:text-[5vw] text-[5.5vw] text-[blue] text-center font-[500]">
            Academics
          </h1>

          <p className=" ps-8 pe-8  md:max-w-[75%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[#dcdcdc] text-center font-[400] mt-[1rem]">
            The medium of instruction is English and the second language for all
            classes up to VIII is Tamil. Hindi/ French are a third choice from
            classes VI to VIII. Our students have shown excellent results in
            both our Class X Board examinations.
          </p>
          <p className=" ps-8 pe-8  md:max-w-[75%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[#dcdcdc] text-center font-[400] mt-[1rem]">
            Physical Education and work experience are an essential part of the
            curriculum. Computer science is compulsory for classes IV to X.
            Plans are afoot to offer an additional foreign and modern Indian
            language.
          </p>
          <p className=" ps-8 pe-8 md:max-w-[75%] max-w-[100%]   font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[#dcdcdc] text-center font-[400] mt-[1rem]">
            In junior school the curriculum is based on the fundamentals –
            mathematics, science, language and reasoning – the basics of all
            learning. No formal examinations are held until class VI. However
            there is an assessment system based on weekly class assignments and
            projects.
          </p>
        </div> */}

        <div className=" w-full h-fit flex flex-col justify-center items-center mt-[2.5rem] gap-[2rem] ">
          <p className=" ps-8 pe-8 md:max-w-[705px] max-w-[580px] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[gray] text-center font-[400] mt-[1rem]">
            Are you ready to give your child the education and skills to take on
            the world?
          </p>
          <button
            onMouseEnter={() => {
              MoreAboutUstext1.start({
                y: "-20px",
                transition: {
                  duration: 0.5,
                  delay: 0.1,
                },
              });
              MoreAboutUstext2.start({
                y: "-12px",
                transition: {
                  duration: 0.5,
                  delay: 0.1,
                },
              });
            }}
            onMouseLeave={() => {
              MoreAboutUstext1.start({
                y: "12px",
                transition: {
                  duration: 0.5,
                  delay: 0.1,
                },
              });
              MoreAboutUstext2.start({
                y: "20px",
                transition: {
                  duration: 0.5,
                  delay: 0.1,
                },
              });
            }}
            className="w-[170px] h-[50px] bg-[#ffffff21] overflow-hidden rounded-[20px] border-2 border-[white] flex flex-row justify-center items-center  "
          >
            <div className=" w-full h-fit pt-0 pb-0 overflow-hidden ">
              <motion.p
                initial={{ y: "12px" }}
                animate={MoreAboutUstext1}
                className="text-[16x] font-poppins font-[400] text-[white]"
              >
                Enroll Now
              </motion.p>
              <motion.p
                initial={{ y: "20px" }}
                animate={MoreAboutUstext2}
                className="text-[16x] font-poppins font-[400] text-[white]"
              >
                Enroll Now
              </motion.p>
            </div>
          </button>
        </div>

        <div className=" w-full flex flex-row justify-center ">
          <div className=" w-[80vw] sm:h-[60vh] h-[40vh] sm:mt-[4rem] mt-[1rem]">
            <img
              src={overviewImage}
              className=" w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Stat  */}
        <div className=" w-full h-fit flex flex-row justify-center mt-[2.5rem]">
          <div className=" md:w-fit w-full h-fit flex flex-row md:justify-center justify-evenly md:gap-[1rem] gap-y-[1rem] flex-wrap md:flex-nowrap ">
            {/* One */}
            {/* <div className="  font-cabin w-[45%] md:w-fit h-fit flex flex-col gap-[1.5rem] md:items-start items-center">
              <div className=" w-fit flex flex-col gap-[1.5rem]">
                <h1 className=" font-[600] text-[white] text-[24px] md:text-[3.5vw]">
                  180+
                </h1>

                <p className="font-cabin md:text-[20px] text-[16px] text-[#dcdcdc] text-start font-[400]">
                  Projects completed in<br></br>24 countries
                </p>
              </div>
            </div> */}
            {/* Sliding Div */}
            {/* <div className=" w-[100px] h-fit md:flex hidden flex-row justify-center   ">
              <motion.div
                style={{ rotate: "20deg" }}
                className=" w-[1.5px] md:h-[180px] h-[135px] bg-[white] "
              ></motion.div>
            </div> */}
            {/* One */}
            {/* <div className=" font-cabin w-[45%] md:w-fit h-fit flex flex-col gap-[1.5rem] md:items-start items-center">
              <div className=" w-fit flex flex-col gap-[1.5rem]">
                <h1 className=" font-[600] text-[white] text-[24px] md:text-[3.5vw]">
                  180+
                </h1>

                <p className="font-cabin md:text-[20px] text-[16px] text-[#dcdcdc] text-start font-[400]">
                  Projects completed in<br></br>24 countries
                </p>
              </div>
            </div> */}
            {/* Sliding Div */}
            {/* <div className=" w-[100px] h-fit md:flex hidden flex-row justify-center ">
              <motion.div
                style={{ rotate: "20deg" }}
                className=" w-[1.5px] md:h-[180px] h-[135px] bg-[white] "
              ></motion.div>
            </div> */}
            {/* One */}
            {/* <div className=" font-cabin w-[45%] md:w-fit h-fit flex flex-col gap-[1.5rem] md:items-start items-center">
              <div className=" w-fit flex flex-col gap-[1.5rem]">
                <h1 className=" font-[600] text-[white] text-[24px] md:text-[3.5vw]">
                  180+
                </h1>

                <p className="font-cabin md:text-[20px] text-[16px] text-[#dcdcdc] text-start font-[400]">
                  Projects completed in<br></br>24 countries
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className=" flex-1 min-h-[350px]">
          <img src={people} className=" w-full h-full object-cover" />
        </div> */}
      </div>
    </div>
  );
};

export default Overview;
