import React from "react";
import vector1 from "../assets/curricular/1.png"
import vector2 from "../assets/curricular/2.png"
import vector3 from "../assets/curricular/3.png"
import vector4 from "../assets/curricular/4.png"
import vector5 from "../assets/curricular/5.png"
import vector6 from "../assets/curricular/6.png"
import vector7 from "../assets/curricular/7.png"

const Component = ({
  content = {
    
  },
}) => {
  return (
    <div
      style={{ backgroundColor: content?.boxbg }}
      className="w-full h-[300px] overflow-visible rounded-[8px]"
    >
      <div
        style={{ background: `linear-gradient(135deg, #7c2ae8, #00c4cc)` }}
        className="w-full h-full flex flex-col justify-start gap-[1.5rem] p-6 rounded-[8px] hover:rotate-6 duration-300 relative"
      >
        <div className="relative z-10">
          <h1
            style={{ color: 'white' }}
            className="w-full font-[500] text-2xl md:text-2xl uppercase duration-300"
          >
            {content?.title}
          </h1>
          <p 
            style={{ color: content?.bodytext }}
            className="font-[300] font-poppins text-base md:text-base"
          >
            {content?.body}
          </p>
        </div>
        <img 
          src={content?.image}
          alt={content?.title}
          className="absolute bottom-4 right-4 w-36 h-36 z-0"
        />
      </div>
    </div>
  );
};

const array = [
  {
    title: "PHYSICAL DEVELOPMENT",
    body: "Drill, P.T., indoor and outdoor games, sports, exercise, NSS, athletics, etc.",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
    image: vector1
  },
  {
    title: "SOCIAL DEVELOPMENT",
    body: "Co-operative society, scouting and guiding, games and sports, school council activities, celebration of special festivals, morning assembly, etc.",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
    image: vector2
  },
  {
    title: "INTELLECTUAL DEVELOPMENT",
    body: "School magazine, science club, world affairs society, debates, seminars and discussions, essay and story writing competition, poetry recitation, newspaper reading, etc.",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
    image: vector3
  },
  {
    title: "PSYCHOMOTOR DEVELOPMENT",
    body: "Tailoring, carpentry, toy-making, soap-making, candle and incense-stick making, embroidery, knitting, spinning, gardening, sculpture making, leather work, clay work, weaving, book-binding, etc.",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
    image: vector4
  },
  {
    title: "CIVIC VALUES DEVELOPMENT",
    body: "Celebration of social, religious and national festivals, school parliament election, co-operative stores, cleanliness drive, drug and alcohol abuse programs, World Environment Day celebrations, etc",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
    image: vector5
  },
  {
    title: "CULTURAL DEVELOPMENT",
    body: "Annual day programs, music and dance, drawing and painting, fancy dress competitions",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
    image: vector6
  },
  {
    title: "excursions/ picnics/ tours",
    body: "Visits to museums, zoo, aquarium, visits to exhibitions, etc. For primary, external visits include a bank, a post-office, a hospital, a police-station, a garden, LIC office, government offices, an airport etc.",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
    image: vector7
  },
  
];

const Cooverview = () => {
  return (
    <div className="w-full min-h-screen bg-black pt-[7.5vh] pb-[2rem]">
      <div className="w-full h-fit flex flex-col items-center mb-[2vh] mt-[3vh]">
        <h1 className="font-cabin xl:text-[4vw] lg:text-[4.5vw] md:text-[5vw] sm:text-[6vw] text-[7vw] text-[white] text-center font-[600]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
          Overview
                </span>
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <Component content={array[0]} />
            <Component content={array[1]} />
          </div>
          <div className="space-y-6">
            <Component content={array[2]} />
            <Component content={array[3]} />
            <Component content={array[6]} />
          </div>
          <div className="space-y-6">
            <Component content={array[4]} />
            <Component content={array[5]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooverview;