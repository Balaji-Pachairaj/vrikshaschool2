import React from "react";

const List = ({ text = "" }) => {
  return (
    <div className=" w-full flex flex-row justify-start items-center gap-[2rem]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="11.5" stroke="white" stroke-opacity="0.2" />
        <path
          d="M8 12.6923L10.4615 15.1538L16.6154 9"
          stroke="#B5B4B4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className=" font-kanit text-[white] lg:text-[20px] text-[14px] ">
        {text}
      </p>
    </div>
  );
};

const Com = ({ content = {} }) => {
  return (
    <div className=" md:w-[30vw] w-[90%] min-h-[90vh] h-fit rounded-[10px] bg-[#131415] flex flex-col justify-between p-[2rem]">
      <div className=" w-full h-fit flex flex-col lg:gap-[2rem] gap-[1rem] ">
        <h1 className=" font-kanit text-[white] text-[18px]">
          {content?.plan}
        </h1>

        <div className=" w-full h-fit flex flex-row justify-between flex-wrap ">
          <p className="font-kanit text-[white] lg:text-[32px] md:text-[24px]  text-[24px] font-bold ">
            {content.title}
          </p>
          <p className="text-[#d0d0d0] font-light font-kanit lg:text-[28px] md:text-[20px] text-[16px] ">
            {content?.money}
          </p>
        </div>

        <p className=" font-kanit text-[#d0d0d0] lg:text-[16px]  md:text-[14px] ">
          {content?.body}
        </p>

        <div className=" w-full h-[1px] bg-[#d0d0d0] "></div>

        <div className=" w-full h-fit gap-[1rem] flex flex-col">
          {content?.list?.map((item) => {
            return <List text={item} />;
          })}
        </div>
      </div>
      <div className=" w-full flex flex-row justify-center">
        <div className="w-[90%] h-[50px] bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] font-kanit font-bold flex flex-row justify-center items-center text-white">
          GET STARTED
        </div>
      </div>
    </div>
  );
};

const content = [
  {
    title: "Pro",
    plan: "Standard",
    money: "$ 900.00 USD",
    body: "Experience personalized training, group classes, and essential resources.",
    list: [
      "Personalized Training",
      "Group Fitness Access",
      "Nutrition Guidance",
      "Exclusive Events",
    ],
  },
  {
    title: "Pro",
    plan: "Standard",
    money: "$ 900.00 USD",
    body: "Experience personalized training, group classes, and essential resources.",
    list: [
      "Personalized Training",
      "Group Fitness Access",
      "Nutrition Guidance",
      "Exclusive Events",
    ],
  },
  {
    title: "Pro",
    plan: "Standard",
    money: "$ 900.00 USD",
    body: "Experience personalized training, group classes, and essential resources.",
    list: [
      "Personalized Training",
      "Group Fitness Access",
      "Nutrition Guidance",
      "Exclusive Events",
    ],
  },
];

const SportAcademyMemberShip = () => {
  return (
    <div className=" w-full h-fit bg-black text-white  mt-[10vh]">
      <h1 className=" ps-[2vw] font-kanit text-[6vw] font-bold uppercase mb-[2rem]">
        Membership Plans
      </h1>

      <div className=" w-full h-fit flex md:flex-row flex-col md:justify-center items-center  pb-[10vh] gap-[1vw] gap-y-[2rem]">
        {content?.map((item) => {
          return <Com content={item} />;
        })}
      </div>
    </div>
  );
};

export default SportAcademyMemberShip;
