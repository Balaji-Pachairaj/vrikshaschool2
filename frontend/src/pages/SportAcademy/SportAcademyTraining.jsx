import React from "react";

import overviewImage from "../../assets/Learning/training.png";

const content = [
  { title: "World-Class Facilities", },
  { title: "Expert Mentorship" },
  { title: "Performance Analytics" },
  { title: "Skill-Based Training" },
  { title: "Active Lifestyle Advocacy" },
  { title: "Discipline and Resilience Building" },
];

const Com = ({ content }) => {
  return (
    <div className=" w-full h-full flex flex-col justify-start p-[2rem]  gap-[0.5rem]">
      <h1 className=" lg:text-[24px] md:text-[18px] text-white font-inter  font-bold ">
        {content?.title}
      </h1>
      <p className=" lg:text-[24px] md:text-[18px] text-[#666] font-inter">
        {content?.text}
      </p>
    </div>
  );
};

const SportAcademyTraining = () => {
  return (
    <div
      style={{ backgroundImage: `url(${overviewImage})` }}
      className=" w-full h-fit pb-[10vh]  relative bg-[url('../../assets/Learning/learningOverview.webp')] bg-cover bg-center"
    >
      {/* ------------------------------------------------------ */}
      <div className=" w-full h-[50vh] border-t-[1px] border-b-[1px] border-[#3b3b3b] flex flex-row justify-center">
        <div className=" w-[30%] h-full border-s-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute top-[-2px] left-[-2px]"></div>
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] left-[-2px]"></div>
          {/* ------------------- */}

          <div className=" w-full h-full flex flex-col justify-end ps-[2rem] pe-[2rem] pb-[0rem] lg:gap-[3rem] gap-[1rem] ">
            <h1 className=" font-inter lg:text-[3.5vw]  text-[2rem] font-semibold  text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
                Why us
              </span>

            </h1>
            <p className=" lg:text-[7vw] text-[5rem] font-inter font-bold bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] text-transparent bg-clip-text">
              1
            </p>
          </div>
        </div>
        <div className=" w-[30%] h-full border-s-[1px] border-e-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute top-[-2px] left-[-2px]"></div>
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] left-[-2px]"></div>
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute top-[-2px] right-[-2px]"></div>
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] right-[-2px]"></div>
          {/* ------------------- */}
          <div className=" w-full h-full flex flex-col justify-end ps-[2rem] pe-[2rem] pb-[0rem]  ">
            <p className=" lg:text-[7vw] text-[5rem] font-inter font-bold bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] text-transparent bg-clip-text">
              2
            </p>
          </div>
        </div>
        <div className=" w-[30%] h-full border-e-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute top-[-2px] right-[-2px]"></div>
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] right-[-2px]"></div>
          {/* ------------------- */}

          <div className=" w-full h-full flex flex-col justify-end ps-[2rem] pe-[2rem] pb-[0rem] ">
            <p className=" lg:text-[7vw] text-[5rem] font-inter font-bold bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] text-transparent bg-clip-text">
              3
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full h-[20vh]  border-b-[1px] border-[#3b3b3b] flex flex-row justify-center ">
        <div className=" w-[30%] h-full border-s-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] left-[-2px]"></div>
          {/* ------------------- */}

          <Com content={content[0]}></Com>
        </div>
        <div className=" w-[30%] h-full border-s-[1px] border-e-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] left-[-2px]"></div>
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] right-[-2px]"></div>
          {/* ------------------- */}
          <Com content={content[1]}></Com>
        </div>
        <div className=" w-[30%] h-full border-e-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] right-[-2px]"></div>
          {/* ------------------- */}

          <Com content={content[2]}></Com>
        </div>
      </div>

      <div className=" w-full h-[20vh]  border-b-[1px] border-[#3b3b3b] flex flex-row justify-center ">
        <div className=" w-[30%] h-full border-s-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] left-[-2px]"></div>
          {/* ------------------- */}

          <div className=" w-full h-full flex flex-col justify-end ps-[2rem]  gap-[0.5rem]">
            <p className=" lg:text-[7vw] text-[5rem] font-inter font-bold bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] text-transparent bg-clip-text">
              4
            </p>
          </div>
        </div>
        <div className=" w-[30%] h-full border-s-[1px] border-e-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] left-[-2px]"></div>
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] right-[-2px]"></div>
          {/* ------------------- */}
          <div className=" w-full h-full flex flex-col justify-end ps-[2rem]  gap-[0.5rem]">
            <p className=" lg:text-[7vw] text-[5rem] font-inter font-bold bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] text-transparent bg-clip-text">
              5
            </p>
          </div>
        </div>
        <div className=" w-[30%] h-full border-e-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] right-[-2px]"></div>
          {/* ------------------- */}

          <div className=" w-full h-full flex flex-col justify-end ps-[2rem]  gap-[0.5rem]">
            <p className=" lg:text-[7vw] text-[5rem] font-inter font-bold bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] text-transparent bg-clip-text">
              6
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full h-[20vh]  border-b-[1px] border-[#3b3b3b] flex flex-row justify-center ">
        <div className=" w-[30%] h-full border-s-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] left-[-2px]"></div>
          {/* ------------------- */}

          <Com content={content[3]}></Com>
        </div>
        <div className=" w-[30%] h-full border-s-[1px] border-e-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] left-[-2px]"></div>
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] right-[-2px]"></div>
          {/* ------------------- */}
          <Com content={content[4]}></Com>
        </div>
        <div className=" w-[30%] h-full border-e-[1px] border-[#3b3b3b] relative ">
          {/* ------------------- */}
          <div className=" w-[4px] h-[4px] rounded-[0.5px] bg-[#c7f849] absolute bottom-[-2px] right-[-2px]"></div>
          {/* ------------------- */}

          <Com content={content[5]}></Com>
        </div>
      </div>
    </div>
  );
};

export default SportAcademyTraining;
// #3b3b3b
