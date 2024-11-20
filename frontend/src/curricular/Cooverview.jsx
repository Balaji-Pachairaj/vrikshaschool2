import React from "react";

const Component = ({
  content = {
    title: "Art & Craft",
    body: "Nurturing creativity and artistic expression through various mediums",
    boxbg: "#000000",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
    bodytext: "white",
  },
}) => {
  return (
    <div
      style={{ backgroundColor: content?.boxbg }}
      className="w-full h-[300px] overflow-visible rounded-[8px]"
    >
      <div
        style={{ backgroundColor: content?.bg }}
        className="w-full h-full flex flex-col justify-start gap-[1.5rem] p-6 rounded-[8px] hover:rotate-6 duration-300"
      >
        <h1
          style={{ color: content?.text }}
          className="w-full font-[500] text-xl md:text-2xl uppercase hover:text-[#ff643d] duration-300"
        >
          {content?.title}
        </h1>
        <p 
          style={{ color: content?.bodytext }}
          className="font-[300] font-poppins text-sm md:text-base"
        >
          {content?.body}
        </p>
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
  },
  {
    title: "SOCIAL DEVELOPMENT",
    body: "Co-operative society, scouting and guiding, games and sports, school council activities, celebration of special festivals, morning assembly, etc.",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
  {
    title: "INTELLECTUAL DEVELOPMENT",
    body: "School magazine, science club, world affairs society, debates, seminars and discussions, essay and story writing competition, poetry recitation, newspaper reading, etc.",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
  {
    title: "PSYCHOMOTOR DEVELOPMENT",
    body: "Tailoring, carpentry, toy-making, soap-making, candle and incense-stick making, embroidery, knitting, spinning, gardening, sculpture making, leather work, clay work, weaving, book-binding, etc.",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
  {
    title: "CIVIC VALUES DEVELOPMENT",
    body: "Celebration of social, religious and national festivals, school parliament election, co-operative stores, cleanliness drive, drug and alcohol abuse programs, World Environment Day celebrations, etc",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
  {
    title: "CULTURAL DEVELOPMENT",
    body: "Annual day programs, music and dance, drawing and painting, fancy dress competitions",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
  {
    title: "excursions/ picnics/ tours",
    body: "Visits to museums, zoo, aquarium, visits to exhibitions, etc. For primary, external visits include a bank, a post-office, a hospital, a police-station, a garden, LIC office, government offices, an airport etc.",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
  
];

const Cooverview = () => {
  return (
    <div className="w-full min-h-screen bg-black pt-[7.5vh] pb-[2rem]">
      <div className="w-full h-fit flex flex-col items-center mb-[2vh] mt-[3vh]">
        <h1 className="font-cabin xl:text-[4vw] lg:text-[4.5vw] md:text-[5vw] sm:text-[6vw] text-[6.5vw] text-[white] text-center font-[600]">
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