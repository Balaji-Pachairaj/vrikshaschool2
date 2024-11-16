import React from "react";
import png1 from "../../assets/1.png";
import png2 from "../../assets/2.png";
import png3 from "../../assets/3.png";
import png4 from "../../assets/4.png";

const content = [
  { text: "Child-friendly furniture (chowkis)", image: png1 },
  { text: "Outdoor area", image: png2 },
  { text: "Sports equipment", image: png3 },
  {
    text: "Separate activity centers with puppet theatre, doll house etc",
    image: png4,
  },
  { text: "Spacious classrooms", image: png1 },
  { text: "Huge airy library", image: png2 },
  { text: "Dance & music room", image: png3 },
  { text: "AV and art room", image: png4 },
  { text: "Outside play area with splash pool", image: png1 },

  { text: "Sandpit", image: png1 },
  {
    text: "Skating rink (with coaching for children above three, under the guidance of an expert)",
    image: png2,
  },
  {
    text: "Field trips, outdoor education and community participation",
    image: png3,
  },
  { text: "Nutritious lunch and drinking water", image: png4 },
  { text: "Kids based learning center", image: png1 },
];
const FacilitiesMobile = () => {
  return (
    <div className=" w-full h-fit bg-[black] flex flex-col gap-[1rem] sm:pt-[10vh] sm:pb-[10vh] pt-[3vh] pb-[3vh]  ">
      {content?.map((item) => {
        return (
          <div className=" w-full h-[40vh]  flex flex-row justify-between flex-nowrap items-center ps-2 pe-2">
            <h1 className=" w-[55%] h-full  flex flex-row justify-start items-center font-semibold font-poppins sm:text-[34px] text-[24px] text-white ">
              {item?.text}
            </h1>
            <div className=" sm:w-[40vh] sm:h-[40vh] w-[50vw] h-[50vw] border-2">
              <img src={item?.image} className=" w-full h-full object-cover" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FacilitiesMobile;
