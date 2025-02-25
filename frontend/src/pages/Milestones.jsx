import React from "react";
import milestone1 from "../assets/milestones/1.png";
import milestone2 from "../assets/milestones/2.png";
import milestone3 from "../assets/milestones/3.png";
import milestone4 from "../assets/milestones/4.png";
import milestone5 from "../assets/milestones/5.png";

const Milestone_Card = ({ src = "" }) => {
  return (
    <div className="w-full max-w-[400px] aspect-[7/4] rounded-[20px] overflow-hidden">
      <img src={src} className="w-full h-full object-cover" alt="milestone" />
    </div>
  );
};

const Milestones = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center p-3 sm:p-6">
      <div className="w-full max-w-[1400px] flex flex-col gap-4 sm:gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
            Milestones
          </span>
        </h1>

        <div className="flex-1 flex flex-col gap-3 sm:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 justify-items-center">
            <Milestone_Card src={milestone1} />
            <Milestone_Card src={milestone2} />
            <Milestone_Card src={milestone3} />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 justify-items-center lg:px-[16.67%]">
            <Milestone_Card src={milestone4} />
            <Milestone_Card src={milestone5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
