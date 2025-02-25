import React from "react";

import png1 from "../../assets/Learning/22.png";
import png2 from "../../assets/Learning/23.png";
import png3 from "../../assets/Learning/24.png";
import png4 from "../../assets/Learning/25.png";
import png5 from "../../assets/Learning/26.png";
import png6 from "../../assets/Learning/27.png";
import png7 from "../../assets/Learning/28.png";
import png8 from "../../assets/Learning/29.png";
import png9 from "../../assets/Learning/30.png";
import png10 from "../../assets/Learning/31.png";
import png11 from "../../assets/Learning/32.png";
import png12 from "../../assets/Learning/33.png";
import png13 from "../../assets/Learning/34.png";
import png14 from "../../assets/Learning/35.png";

const cardcontent = [
  { text: "Child-friendly furniture (chowkis)", image: png1 },
  { text: "Outdoor area", image: png2 },
  { text: "Sports equipment", image: png3 },
  {
    text: "Separate activity centers with puppet theatre, doll house etc",
    image: png4,
  },
  { text: "Spacious classrooms", image: png5 },
  { text: "Huge airy library", image: png6 },
  { text: "Dance & music room", image: png7 },
  { text: "AV and art room", image: png8 },
  { text: "Outside play area with splash pool", image: png9 },

  { text: "Sandpit", image: png10 },
  {
    text: "Skating rink (with coaching for children above three, under the guidance of an expert)",
    image: png11,
  },
  {
    text: "Field trips, outdoor education and community participation",
    image: png12,
  },
  { text: "Nutritious lunch and drinking water", image: png13 },
  { text: "Kids based learning center", image: png14 },
];

const CardSection = ({ content = {} }) => {
  return (
    <div>
      <div className=" md:w-[20vw] w-[45vw] md:h-[300px] h-[250px] relative rounded-3xl overflow-hidden">
        <div className=" w-full h-full ">
          <img src={content?.image} className=" w-full h-full object-cover" />
        </div>
        <div className="  absolute w-full md:h-[30%] h-[40%] bottom-0 bg-black bg-opacity-30 left-0  flex flex-row justify-center items-center">
          <h1 className=" text-[16px] text-center text-white  font-cabin">
            {content?.text}
          </h1>
        </div>
      </div>
    </div>
  );
};

const FacilitiesCardsSection = () => {
  return (
    <div className=" w-full min-h-screen mt-[7.5rem] mb-[5rem]">
      <div className=" w-full h-fit mt-[2rem] mb-[2rem] ">
        <h1 className="font-cabin xl:text-[3vw] lg:text-[3.5vw] md:text-[4vw] sm:text-[4.5vw] text-[6vw] font-[600] text-center text-[#758694]">
          Facilities
        </h1>
      </div>

      <div className=" w-full  flex flex-col gap-[2rem]  ">
        <div className=" w-full h-fit flex flex-row flex-wrap justify-center gap-[1rem]">
          <CardSection content={cardcontent[0]} />
          <CardSection content={cardcontent[1]} />
          <CardSection content={cardcontent[2]} />
          <CardSection content={cardcontent[3]} />
        </div>
        <div className=" w-full h-fit flex flex-row flex-wrap justify-center gap-[1rem]">
          <CardSection content={cardcontent[4]} />
          <CardSection content={cardcontent[5]} />
          <CardSection content={cardcontent[6]} />
          <CardSection content={cardcontent[7]} />
        </div>
        <div className=" w-full h-fit flex flex-row flex-wrap justify-center gap-[1rem]">
          <CardSection content={cardcontent[8]} />
          <CardSection content={cardcontent[9]} />
          <CardSection content={cardcontent[10]} />
          <CardSection content={cardcontent[11]} />
        </div>
        <div className=" w-full h-fit flex flex-row flex-wrap justify-center gap-[1rem]">
          <CardSection content={cardcontent[11]} />
          <CardSection content={cardcontent[12]} />
          <CardSection content={cardcontent[13]} />
        </div>
      </div>
    </div>
  );
};

export default FacilitiesCardsSection;
