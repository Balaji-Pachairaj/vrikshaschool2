import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

import img1 from "../assets/aboutus/1.jpg";
import img2 from "../assets/aboutus/2.png";
import img3 from "../assets/aboutus/3.png";
import img4 from "../assets/aboutus/4.png";
import img5 from "../assets/aboutus/5.png";

const ImageComponents = ({ team }) => {
  return (
    <div className="w-full h-full relative bg-dharangradient">
      <img 
        src={team.image} 
        alt={team.name}
        className="w-full h-full object-cover absolute"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
        <h3 className="text-sm font-semibold">{team.name}</h3>
        <p className="text-xs">{team.position}</p>
      </div>
    </div>
  );
};

const MeetOurTeam3 = () => {
  const dharan = {
    image: img5,
    name: "Dr. Krishnakumari S",
    position: "Executive officer"
  };
  const teammember = [
    {
      image: img1,
      name: "Mr. Rajasekaran R",
      position: "Chairman"
    },
    {
      image: img2,
      name: "Mr. Harinivas Rajasekaran",
      position: "Correspondent"
    },
    {
      image: img3,
      name: "Mr. Nivedha Harinivas",
      position: "Directress"
    },
    {
      image: img4,
      name: "Ms. Yamini Radhakrishnan",
      position: "Senior Principal"
    }
  ];
  const fullRef = useRef();

  const fullRefUseScroll = useScroll({
    target: fullRef,
    offset: ["0 0.5", "1 0"],
  });

  const endTopState = "70%";
  const endLeftState = "50%";
  const endScale = 1.5;

  const upState = "-50%";
  const point = "0.88";

  //-------------------------------------------------------------------
  const timing1 = [0, 0.1, 0.12, 0.3, point, 1];

  const topSection1 = useTransform(fullRefUseScroll.scrollYProgress, timing1, [
    "175%",
    "25%",
    "25%",
    endTopState,
    endTopState,
    upState,
  ]);

  const leftSection1 = useTransform(fullRefUseScroll.scrollYProgress, timing1, [
    "20%",
    "20%",
    "20%",
    endLeftState,
    endLeftState,
    endLeftState,
  ]);

  const scaleSection1 = useTransform(
    fullRefUseScroll.scrollYProgress,
    timing1,
    [1, 1, 1, endScale, endScale, endScale]
  );

///--------------------------------------------------------------------

const timing2 = [0, 0.1, 0.3, 0.48, point, 1];

const topSection2 = useTransform(fullRefUseScroll.scrollYProgress, timing2, [
  "175%",
  "25%",
  "25%",
  endTopState,
  endTopState,
  upState,
]);

const leftSection2 = useTransform(fullRefUseScroll.scrollYProgress, timing2, [
  "40%",
  "40%",
  "40%",
  endLeftState,
  endLeftState,
  endLeftState,
]);

const scaleSection2 = useTransform(
  fullRefUseScroll.scrollYProgress,
  timing2,
  [1, 1, 1, endScale, endScale, endScale]
);

///--------------------------------------------------------------------

const timing3 = [0, 0.1, 0.48, 0.66, point, 1];

const topSection3 = useTransform(fullRefUseScroll.scrollYProgress, timing3, [
  "175%",
  "25%",
  "25%",
  endTopState,
  endTopState,
  upState,
]);

const leftSection3 = useTransform(fullRefUseScroll.scrollYProgress, timing3, [
  "60%",
  "60%",
  "60%",
  endLeftState,
  endLeftState,
  endLeftState,
]);

const scaleSection3 = useTransform(
  fullRefUseScroll.scrollYProgress,
  timing3,
  [1, 1, 1, endScale, endScale, endScale]
);

///--------------------------------------------------------------------

const timing4 = [0, 0.1, 0.66, 0.78, point, 1];

const topSection4 = useTransform(fullRefUseScroll.scrollYProgress, timing4, [
  "175%",
  "25%",
  "25%",
  endTopState,
  endTopState,
  upState,
]);

const leftSection4 = useTransform(fullRefUseScroll.scrollYProgress, timing4, [
  "80%",
  "80%",
  "80%",
  endLeftState,
  endLeftState,
  endLeftState,
]);

const scaleSection4 = useTransform(
  fullRefUseScroll.scrollYProgress,
  timing4,
  [1, 1, 1, endScale, endScale, endScale]
);

const timing8 = [0, 0.1, 0.8, 0.87, point, 1];

const left8 = "90%";

const topSection8 = useTransform(fullRefUseScroll.scrollYProgress, timing8, [
  "225%",
  "75%",
  "75%",
  endTopState,
  endTopState,
  upState,
]);

const leftSection8 = useTransform(fullRefUseScroll.scrollYProgress, timing8, [
  left8,
  left8,
  left8,
  endLeftState,
  endLeftState,
  endLeftState,
]);

const scaleSection8 = useTransform(
  fullRefUseScroll.scrollYProgress,
  timing8,
  [1, 1, 1, endScale, endScale, endScale]
);

//---------------------------------------------------------------------

const topSection9 = useTransform(
  fullRefUseScroll.scrollYProgress,
  [0, 0.1, 0.86, 0.88, 1],
  ["100%", "100%%", "100%", "60%", "-75%"]
);

//------------------------------------------------------------------------

  const lastRef = useRef();

  return (
    <>
      <div ref={fullRef} className="w-full min-h-screen lg:block hidden">
        <div className="w-full h-[50vh]"></div>
        <div className="w-full h-[50vh]"></div>
        <div className="w-full h-[50vh]"></div>
        <div className="w-full h-[50vh]"></div>
        <div className="w-full h-[50vh]"></div>
        <div className="w-full h-[50vh]"></div>
      </div>

      <div ref={lastRef} className="w-full h-screen lg:block hidden"></div>
      
      {/* Desktop Animated Cards */}
      <motion.div
        style={{
          top: topSection1,
          x: "-50%",
          y: "-50%",
          scale: scaleSection1,
          left: leftSection1,
        }}
        className="xl:w-[200px] xl:h-[300px] lg:w-[180px] lg:h-[250px] bg-dharangradient3 fixed rounded-[15px] overflow-hidden"
      >
        <ImageComponents team={teammember[0]} />
      </motion.div>

      <motion.div
        style={{
          top: topSection2,
          x: "-50%",
          y: "-50%",
          scale: scaleSection2,
          left: leftSection2,
        }}
        className="xl:w-[200px] xl:h-[300px] lg:w-[180px] lg:h-[250px] bg-red-200 fixed rounded-[15px] overflow-hidden"
      >
        <ImageComponents team={teammember[1]} />
      </motion.div>

      <motion.div
        style={{
          top: topSection3,
          x: "-50%",
          y: "-50%",
          scale: scaleSection3,
          left: leftSection3,
        }}
        className="xl:w-[200px] xl:h-[300px] lg:w-[180px] lg:h-[250px] bg-red-300 fixed rounded-[15px] overflow-hidden"
      >
        <ImageComponents team={teammember[2]} />
      </motion.div>
     
      <motion.div
        style={{
          top: topSection4,
          x: "-50%",
          y: "-50%",
          scale: scaleSection4,
          left: leftSection4,
        }}
        className=" xl:w-[200px] xl:h-[300px] lg:w-[180px] lg:h-[250px] bg-red-400 fixed rounded-[15px] overflow-hidden"
      >
        <ImageComponents team={teammember[3]} />
      </motion.div>

      <motion.div
        style={{
          top: topSection8,
          x: "-50%",
          y: "-50%",
          scale: scaleSection8,
          left: leftSection8,
        }}
        className="xl:w-[200px] xl:h-[300px] lg:w-[180px] lg:h-[250px] bg-red-800 fixed rounded-[15px] overflow-hidden"
      >
        <ImageComponents team={{ image: dharan.image, name: dharan.name, position: dharan.position }} />
      </motion.div>

      <motion.div
        style={{
          top: topSection9,
          left: "62%",
        }}
        className="w-[300px] h-[285px] fixed rounded-[15px]"
      >
        <h1 className="text-[3vw] leading-[4.2vw] text-[#fff]">
          Leaders Democratising Education
        </h1>
      </motion.div>

      {/* Mobile Version */}
      <div className="lg:hidden block p-4">
        <h1 className="text-2xl text-white mb-8">Leaders Democratising Education</h1>
        <div className="flex flex-col gap-6">
          
          {teammember.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full h-[420px] rounded-[15px] overflow-hidden"
            >
              <ImageComponents team={member} />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: teammember.length * 0.2 }}
            className="w-full h-[420px] rounded-[15px] overflow-hidden"
          >
            <ImageComponents team={{ image: dharan.image, name: dharan.name, position: dharan.position }} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam3;
