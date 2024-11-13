import React from "react";
import png1 from "../../assets/1.png";
import png2 from "../../assets/2.png";
import png3 from "../../assets/3.png";
import png4 from "../../assets/4.png";

const content = [
  { text: "Brand Acemeady", image: png1 },
  { text: "Brand Acemeady", image: png2 },
  { text: "Brand Acemeady", image: png3 },
  { text: "Brand Acemeady", image: png4 },
  { text: "Brand Acemeady", image: png1 },
  { text: "Brand Acemeady", image: png2 },
  { text: "Brand Acemeady", image: png3 },
  { text: "Brand Acemeady", image: png4 },
  { text: "Brand Acemeady", image: png1 },
];

const FacilitiesMobile = () => {
  return (
    <div className=" w-full h-fit bg-[white] flex flex-col gap-[1rem] pt-[10vh] pb-[10vh] ">
      {content?.map((item) => {
        return (
          <div className=" w-full h-[30vh]  flex flex-row justify-between items-center ps-2 pe-2">
            <h1 className=" font-bold font-cabin sm:text-[42px] text-[32px] text-center ">
              {item?.text}
            </h1>
            <div className=" w-[30vh] h-[30vh] border-2">
              <img src={item?.image} className=" w-full h-full object-cover" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FacilitiesMobile;
