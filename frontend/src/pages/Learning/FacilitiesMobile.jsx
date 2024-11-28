import React from "react";
import png1 from "../../assets/Learning/22.png"
import png2 from "../../assets/Learning/23.png"
import png3 from "../../assets/Learning/24.png"
import png4 from "../../assets/Learning/25.png"
import png5 from "../../assets/Learning/26.png"
import png6 from "../../assets/Learning/27.png"
import png7 from "../../assets/Learning/28.png"
import png8 from "../../assets/Learning/29.png"
import png9 from "../../assets/Learning/30.png"
import png10 from "../../assets/Learning/31.png"
import png11 from "../../assets/Learning/32.png"
import png12 from "../../assets/Learning/33.png"
import png13 from "../../assets/Learning/34.png"
import png14 from "../../assets/Learning/35.png"

const content = [
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

const FacilitiesMobile = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col gap-8 py-10 px-4 sm:py-16">
      {content?.map((item, index) => {
        return (
          <div 
            key={index}
            className="w-full min-h-[40vh] flex flex-col sm:flex-row justify-between items-center gap-6 hover:bg-black/30 transition-all duration-300 rounded-lg p-4"
          >
            <h1 className="w-full sm:w-[55%] text-center sm:text-left font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              {item?.text}
            </h1>
            <div className="w-full sm:w-[40%] aspect-square overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src={item?.image} 
                alt={item?.text}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300" 
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FacilitiesMobile;
