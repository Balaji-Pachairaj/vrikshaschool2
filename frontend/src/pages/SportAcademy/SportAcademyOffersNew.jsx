import React from "react";
import pool from "../../assets/sportsacademy/pool.jpeg";
import turf from "../../assets/sportsacademy/turf.JPG";
import basket from "../../assets/sportsacademy/basket.jpeg";
import ground from "../../assets/sportsacademy/ground.jpg";
import volley from "../../assets/sportsacademy/volley1.JPG";
import cricket from "../../assets/sportsacademy/cricket.jpg";

const CardSection = ({ content = {} }) => {
  return (
    <div>
      <div className=" sm:w-[30vw] w-[90vw] md:h-[300px] h-[250px] relative rounded-3xl overflow-hidden">
        <div className=" w-full h-full ">
          <img src={content?.image} className=" w-full h-full object-cover" />
        </div>
        <div className="  absolute w-full md:h-[30%] h-[40%] bottom-0 bg-black bg-opacity-30 left-0  flex flex-row justify-center items-center">
          <h1 className=" text-[24px] text-center text-white  font-cabin">
            {content?.heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

const contentData = [
  {
    heading: "State-of-the-art Swimming Pool",
    text: "Provides the perfect environment for both beginners and competitive swimmers to refine their skills and enhance performance.",
    image: pool,
  },
  {
    heading: "Versatile Turf",
    text: "Supporting a variety of sports like football, cricket, tennis, etc., our versatile turf withstands high-octane performances.",
    image: turf,
  },
  {
    heading: "Professional-grade Basketball Court",
    text: "The high-performance surface offers athletes the perfect platform to sharpen their shooting, agility, and teamwork skills.",
    image: basket,
  },
  {
    heading: "World-class Athletic Ground",
    text: "Designed to accommodate track and field events, our ground empowers athletes to train and compete at their peak performance.",
    image: ground,
  },
  {
    heading: "Pro-Level  Cricket Training Nets",
    text: "Sharpen your batting and bowling skills in our professional cricket nets—ideal for focused practice and peak performance training",
    image: cricket,
  },
  {
    heading: "Premier Volleyball Practice Court",
    text: "Train, play, and excel on our top-notch volleyball court—designed for champions in the making. Perfect for all skill levels, from beginners to pros!",
    image: volley,
  },
];

const SportAcademyOffersNew = () => {
  return (
    <div className=" w-full h-fit mb-[4rem] ">
      <div className=" w-full h-fit mt-[2rem] mb-[2rem] ">
        <h1 className="font-cabin xl:text-[3vw] lg:text-[3.5vw] md:text-[4vw] sm:text-[4.5vw] text-[6vw] font-[600] text-center text-[white]">
          Our Sport Academy Offers
        </h1>
      </div>

      <div className=" w-full  flex flex-col gap-[2rem]  ">
        <div className=" w-full h-fit flex sm:flex-row  flex-col flex-wrap justify-center gap-[1rem]">
          <CardSection content={contentData[0]} />
          <CardSection content={contentData[1]} />
          <CardSection content={contentData[2]} />
        </div>
        <div className=" w-full h-fit flex sm:flex-row flex-col flex-wrap justify-center gap-[1rem]">
          <CardSection content={contentData[3]} />
          <CardSection content={contentData[4]} />
          <CardSection content={contentData[5]} />
        </div>
      </div>
    </div>
  );
};

export default SportAcademyOffersNew;
