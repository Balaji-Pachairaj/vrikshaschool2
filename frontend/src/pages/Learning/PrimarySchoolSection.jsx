import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/Learning/1.png"
import img2 from "../../assets/Learning/2.png"
import img3 from "../../assets/Learning/3.png"
import img4 from "../../assets/Learning/4.png"
import well from "../../assets/Learning/well.JPG"

const PrimarySchoolSection = () => {
  const [isFlipped, setIsFlipped] = useState([false, false, false, false]);

  const handleFlip = (index) => {
    setIsFlipped(prev => prev.map((flip, i) => i === index ? !flip : flip));
  };

  const cardData = [
    {
      title: "Academics",
      description: "Academics are taught with emphasis on the global context. Rote learning is discouraged, so that students develop deep thinking and a passion to learn.",
      image: img1
    },
    {
      title: "Co Curriculars",
      description: "Participation in games and sports combines the instincts of competition and teamwork as possibly no other activity can and builds physical as well as mental endurance.",
      image: img2
    },
    {
      title: "Multimedia Content",
      description: "Classes are equipped with projectors and TV screens on which multimedia content makes learning easier.",
      image: img3
    },
    {
      title: "Collaborative Work",
      description: "Group projects promotes teamwork where complementary skills emphasise the multidisciplinary nature of real-world problem-solving.",
      image: img4
    }
  ];

  return (
    <div className=" w-full min-h-screen pt-[10vh]">
      <div className=" w-full h-fit bg-black pt-[0rem] flex flex-col items-center mb-[5vh]">
        <h1 className="font-cabin xl:text-[3vw] lg:text-[3.5vw] md:text-[4vw] sm:text-[4.5vw] text-[6vw] font-[600] text-center bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] inline-block text-transparent bg-clip-text">
          Primary, Seconday & High School
        </h1>
      </div>
      {/* ---------------------------------------------------------- */}
      <div className=" w-full h-fit flex flex-row justify-center ">
        <div className="w-fit h-fit flex md:flex-row flex-col gap-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="md:w-[20vw] w-[80vw] h-[300px] relative"
              onMouseEnter={() => handleFlip(index)}
              onMouseLeave={() => handleFlip(index)}
            >
              <motion.div
                className="w-full h-full"
                initial={false}
                animate={{ rotateY: isFlipped[index] ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <motion.div
                  className="absolute w-full h-full"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#1a1a1a] rounded-lg p-4">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-[120px] h-[120px] object-contain mb-4"
                    />
                    <h1 className="font-poppins lg:text-[26px] md:text-[18px] text-[20px] text-[white] font-[600] text-center">
                      {card.title}
                    </h1>
                  </div>
                </motion.div>

                {/* Back */}
                <motion.div
                  className="absolute w-full h-full"
                  style={{
                    backfaceVisibility: "hidden",
                    rotateY: "180deg",
                  }}
                >
                  <div className="w-full h-full flex-1 md:p-[2rem] p-[1rem] flex flex-col justify-center bg-[#1a1a1a] rounded-lg">
                    <p className="lg:text-[18px] md:text-[16px] text-[16px] text-white">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------- */}
      <div 
        className="w-full h-fit flex flex-col justify-center items-center mt-[4rem] mb-[4rem] relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${well})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="md:max-w-[85%] max-w-[100%] py-24 px-12">
          <h1 className="font-cabin text-[48px] font-[600] mb-6 text-white">
            Well Rounded Learning
          </h1>

          <p className="font-cabin text-[20px] leading-relaxed mb-8 text-white opacity-80">
            Our educational approach is your go-to destination for comprehensive development, 
            focusing on both academic excellence and personal growth. Curated by a team of 
            passionate educators with diverse backgrounds, each learning experience reflects 
            a unique blend of theoretical knowledge and practical application.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-cabin text-[18px] leading-relaxed text-white opacity-80">
                We encourage children to ask questions which their own reading and
                guided explorations or experiments can help them to answer.
                Interaction between students and teachers make learning lively and
                individually meaningful.
              </p>
            </div>
            <div>
              <p className="font-cabin text-[18px] leading-relaxed text-white opacity-80">
                The school aims at all round development of the children by bringing
                out the best in them and inculcating the qualities of self-reliance,
                mutual help, team spirit, service to community and nation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimarySchoolSection;
