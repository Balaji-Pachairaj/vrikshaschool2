import React from "react";

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
        {content?.title === "PHYSICAL DEVELOPMENT" ? (
          <svg
            className="absolute bottom-4 right-4 w-12 h-12 opacity-30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 16V8h10v8M7 12h10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        ) : content?.title === "SOCIAL DEVELOPMENT" ? (
          <svg
            className="absolute bottom-4 right-4 w-12 h-12 opacity-30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="8"
              r="4"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : content?.title === "INTELLECTUAL DEVELOPMENT" ? (
          <svg
            className="absolute bottom-4 right-4 w-12 h-12 opacity-30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3v3M3 12h3m13 0h3M12 18v3M5.6 5.6l2.1 2.1m8.6-2.1l-2.1 2.1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        ) : content?.title === "PSYCHOMOTOR DEVELOPMENT" ? (
          <svg
            className="absolute bottom-4 right-4 w-12 h-12 opacity-30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : content?.title === "CIVIC VALUES DEVELOPMENT" ? (
          <svg
            className="absolute bottom-4 right-4 w-12 h-12 opacity-30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : content?.title === "CULTURAL DEVELOPMENT" ? (
          <svg
            className="absolute bottom-4 right-4 w-12 h-12 opacity-30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : content?.title === "excursions/ picnics/ tours" ? (
          <svg
            className="absolute bottom-4 right-4 w-12 h-12 opacity-30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
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