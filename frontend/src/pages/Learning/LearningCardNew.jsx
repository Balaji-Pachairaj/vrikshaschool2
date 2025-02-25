import React from "react";
import { Link } from "react-router-dom";

const cardContents = [
  {
    title: "Vriksha Junior",
    path: "/facilities",
  },
  {
    title: "Primary, Secondary & High School",
    path: "/higher",
  },
  {
    title: "Lead Curriculum",
    path: "/lead",
  },
];

const Card = ({ content = {} }) => {
  return (
    <Link
      to={content?.to}
      onClick={() => window.scrollTo(0, 0)}
      className=" md:w-[27%] md:h-[60vh] w-[90%] sm:h-[60vh] h-[50vh]  "
    >
      <div className="w-full h-full relative rounded-3xl shadow-lg p-6 bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] flex flex-col items-center justify-center">
        <h2 className="text-3xl uppercase font-bold text-center text-white mb-3">
          {content?.title}
        </h2>
        <p className=" text-[12px] cursor-pointer hover:-translate-y-1 duration-300 text-white">
          Know more...
        </p>
      </div>
    </Link>
  );
};

const LearningCardNew = () => {
  return (
    <div className=" w-full min-h-screen ">
      <div className=" w-full h-fit ">
        <h1 className="font-cabin xl:text-[3vw] lg:text-[3.5vw] md:text-[4vw] sm:text-[4.5vw] text-[6vw] font-[600] text-center  text-white">
          Explore Learning
        </h1>
      </div>

      {/* --- */}

      <div className=" w-full h-fit flex md:flex-row flex-col md:justify-center items-center mt-[5rem] gap-[1rem]">
        <Card content={cardContents[0]} />
        <Card content={cardContents[1]} />
        <Card content={cardContents[2]} />
      </div>
    </div>
  );
};

export default LearningCardNew;
