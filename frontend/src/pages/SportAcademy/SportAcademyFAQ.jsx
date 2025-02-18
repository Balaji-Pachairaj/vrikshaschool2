import React, { useState } from "react";

import png1 from "../../assets/sportsacademy/volley.jpg";

const Com = ({ title, body, state = "0", onClick = () => { } }) => {
  return (
    <>
      <div
        className="w-full md:h-[13%] min-h-[70px] py-3 flex flex-row justify-between items-center cursor-pointer hover:bg-white/5 transition-all duration-300 px-4 rounded-lg"
        onClick={onClick}
      >
        <h1 className="lg:text-[22px] md:text-[16px] text-[16px] font-kanit text-[white] font-[500] transition-all duration-300 flex-1 pe-4">
          {title}
        </h1>
        <button
          className="text-[40px] font-kanit text-[#d0d0d0] font-thin p-[0.5rem] transition-transform duration-300"
          style={{ transform: state === "1" ? 'rotate(-180deg)' : 'rotate(0deg)' }}
        >
          {state === "1" ? "−" : "+"}
        </button>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: state === "1" ? "500px" : "0",
          opacity: state === "1" ? 1 : 0,
          transform: state === "1" ? 'translateY(0)' : 'translateY(-20px)'
        }}
      >
        <div className="w-full h-fit pb-[1rem] text-[#d0d0d0] lg:text-[16px] md:text-[14px] text-[14px] px-4 leading-relaxed">
          {body}
        </div>
      </div>
    </>
  );
};

const faqContent = [
  {
    title: "What age groups do you accept at your academy?",
    body: "We welcome athletes of all ages, from young beginners to adults looking to improve their skills or pursue a career in sports. Our programs are tailored to different age groups and skill levels."
  },
  {
    title: "Do you offer programs for non-competitive athletes?",
    body: "Yes, we offer recreational and wellness programs for individuals who want to maintain an active lifestyle or improve their fitness without pursuing competitive sports."
  },
  {
    title: "What sports do you offer training in?",
    body: "Our academy provides specialized coaching in cricket, basketball, volleyball, swimming, and other sports, with state-of-the-art facilities to support each."
  },
  {
    title: "Can I join the academy if I'm new to sports?",
    body: "Absolutely! We have programs for beginners in all sports, focusing on building foundational skills, confidence, and a love for the game."
  },
  {
    title: "Are there career development opportunities in sports at your academy?",
    body: "Yes, we provide career-oriented programs in sports management, coaching, fitness training, and sports analytics, helping students turn their passion into a professional career."
  },
  {
    title: "What sets your academy apart from others?",
    body: "Our academy combines world-class facilities, expert mentorship, personalized training, and a focus on both athletic and personal development, offering a comprehensive approach to sports education and lifestyle."
  }
];

const SportAcademyFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen pb-[5rem] md:pb-[10rem]">

      <h1 className="md:ps-[2vw] ps-0 md:text-[6vw] text-[32px] font-bold uppercase mb-[2rem] animate-slideIn md:text-left text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
          Have a question?
        </span>
      </h1>

      <div className="w-full md:h-[90vh] h-fit md:mt-0 mt-[2rem] flex md:flex-row flex-col-reverse gap-y-[2rem] justify-center duration-500">
        <div className="md:w-[40%] w-full h-full flex flex-row justify-center items-center px-4 md:px-0">
          <div
            className="w-full md:w-[80%] h-[300px] md:h-[80%] rounded-[20px] overflow-hidden transform transition-all duration-500 hover:scale-105"
          >
            <img
              src={png1}
              alt="Sport Academy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        <div className="md:w-[60%] w-full md:h-[90vh] h-fit flex ms:flex-row flex-col justify-center items-center">
          <div className="md:w-[90%] w-full px-4 md:ps-0 h-fit space-y-3 md:space-y-2">
            {faqContent.map((item, index) => (
              <div
                key={index}
                className="transform transition-all duration-300 hover:translate-x-2"
              >
                <Com
                  title={item.title}
                  body={item.body}
                  onClick={() => handleClick(index)}
                  state={activeIndex === index ? "1" : "0"}
                />
                <div className="w-full h-[1px] bg-[#d0d0d0] transition-all duration-300 hover:bg-[#deff5f]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportAcademyFAQ;