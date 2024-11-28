import React from "react";

const PrimarySchoolSection = () => {
  return (
    <div className=" w-full min-h-screen pt-[10vh]">
      <div className=" w-full h-fit bg-black pt-[0rem] flex flex-col items-center mb-[5vh]">
        <h1 className=" font-cabin xl:text-[3vw] lg:text-[3.5vw] md:text-[4vw] sm:text-[4.5vw] text-[6vw] text-[white] text-center font-[600] ">
          Primary, Seconday & High School
        </h1>
      </div>
      {/* ---------------------------------------------------------- */}
      <div className=" w-full h-fit flex flex-row justify-center ">
        <div className="w-fit h-fit border-[1px] rounded-[8px] flex md:flex-row flex-col ">
          {/* ONE */}
          <div className="md:w-[20vw] w-[80vw] flex-1 md:p-[2rem] p-[1rem] flex flex-col md:gap-[1rem] gap-[0.5rem] md:border-e-[1px] md:border-b-[0px] border-e-[0px] border-b-[1px] border-[white] hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <h1 className=" font-poppins lg:text-[26px] md:text-[18px] text-[20px] text-[white] font-[600] text-center ">
              Academics
            </h1>
            <p className=" lg:text-[16px] md:text-[14px] text-[14px] text-[#fbfbfb]">
              Academics are taught with emphasis on the global context. Rote
              learning is discouraged, so that students develop deep thinking
              and a passion to learn.
            </p>
          </div>

          {/* ONE */}
          <div className="md:w-[20vw] w-[80vw]  flex-1 md:p-[2rem] p-[1rem] flex flex-col gap-[1rem] md:border-e-[1px] md:border-b-[0px] border-e-[0px] border-b-[1px] border-[white]  hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <h1 className=" font-poppins lg:text-[26px] md:text-[18px] text-[20px] text-[white] font-[600] text-center ">
              Co Curriculars
            </h1>
            <p className=" lg:text-[16px] md:text-[14px] text-[14px] text-[#fbfbfb]">
              Participation in games and sports combines the instincts of
              competition and teamwork as possibly no other activity can and
              builds physical as well as mental endurance.
            </p>
          </div>

          {/* ONE */}
          <div className="md:w-[20vw] w-[80vw] flex-1 md:p-[2rem] p-[1rem] flex flex-col gap-[1rem] md:border-e-[1px] md:border-b-[0px] border-e-[0px] border-b-[1px] border-[white]  hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <h1 className=" font-poppins lg:text-[26px] md:text-[18px] text-[20px] text-[white] font-[600] text-center ">
              Multimedia Content
            </h1>
            <p className=" lg:text-[16px] md:text-[14px] text-[14px] text-[#fbfbfb]">
              Classes are equipped with projectors and TV screens on which
              multimedia content makes learning easier.
            </p>
          </div>

          {/* ONE */}
          <div className="md:w-[20vw] w-[80vw] flex-1 md:p-[2rem] p-[1rem] flex flex-col gap-[1rem]  hover:bg-gray-100 hover:bg-opacity-15 duration-150">
            <h1 className=" font-poppins lg:text-[26px] md:text-[18px] text-[20px] text-[white] font-[600] text-center ">
              Collaborative Work
            </h1>
            <p className="lg:text-[16px] md:text-[14px] text-[14px] text-[#fbfbfb]">
              Group projects promotes teamwork where complementary skills
              emphasise the multidisciplinary nature of real-world
              problem-solving.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------- */}
      <div className=" w-full h-fit flex flex-col justify-center items-center mt-[4rem] mb-[4rem] ">
        <h1 className=" font-cabin xl:text-[2vw] lg:text-[2.5vw] md:text-[3vw] sm:text-[3.5vw] text-[5vw] text-[white] text-center font-[600] ">
          Well Rounded Learning
        </h1>

        <p className=" ps-8 pe-8  md:max-w-[85%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[16px]  text-[white] text-center font-[400] mt-[1rem]">
          We encourage children to ask questions which their own reading and
          guided explorations or experiments can help them to answer.
          Interaction between students and teachers make learning lively and
          individually meaningful. On the other hand it is the application of
          skills and techniques that is treated as important. We believe that
          this stands our students in good stead when they are preparing for
          examinations, both in school and after.
        </p>

        <p className=" ps-8 pe-8  md:max-w-[85%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[16px]  text-[white] text-center font-[400] mt-[1rem]">
          The school aims at all round development of the children by bringing
          out the best in them and inculcating the qualities of self-reliance,
          mutual help, team spirit, service to community and nation, general
          awareness and leadership.
        </p>

        <p className=" ps-8 pe-8  md:max-w-[85%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[16px]  text-[white] text-center font-[400] mt-[1rem]">
          The traits of character, confidence, curiosity and compassion are what
          we aim to inculcate in Vriksha Global School. Our role, quite simply
          is to develop the potential and proclivities within each individual
          student, leading to a life of individual fulfillment.
        </p>
      </div>
    </div>
  );
};

export default PrimarySchoolSection;
