import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ImageComponents = ({ team }) => {
  return (
    <div className="w-full h-full relative bg-dharangradient">
      <img 
        src={team.image} 
        alt="Team member"
        className="w-full h-full object-cover absolute"
      />
    </div>
  );
};

const MeetOurTeam3 = () => {
  const dharan = {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop",
  };
  const teammember = [
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop",
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop",
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop",
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop",
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop",
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop",
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=870&auto=format&fit=crop",
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
      
      <motion.div
        style={{
          top: topSection1,
          x: "-50%",
          y: "-50%",
          scale: scaleSection1,
          left: leftSection1,
        }}
        className="xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-dharangradient3 fixed rounded-[15px] overflow-hidden"
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
        className="xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-200 fixed rounded-[15px] overflow-hidden"
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
        className="xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-300 fixed rounded-[15px] overflow-hidden"
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
        className="xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-400 fixed rounded-[15px] overflow-hidden"
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
        className="xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-800 fixed rounded-[15px] overflow-hidden"
      >
        <ImageComponents
          team={{
            image: dharan.image,
          }}
        />
      </motion.div>

      <motion.div
        style={{
          top: topSection9,
          left: "62%",
        }}
        className="w-[300px] h-[285px] fixed rounded-[15px] overflow-hidden"
      >
        <h1 className="text-[4vw] leading-[4.2vw] text-[#fff]">
          Enriching Lives
        </h1>
      </motion.div>

      <div className="lg:hidden block p-4">
        <h1 className="text-3xl text-white mb-8">Enriching Lives</h1>
        <div className="flex flex-col gap-6">
          {teammember.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full h-[300px] rounded-[15px] overflow-hidden"
            >
              <ImageComponents team={member} />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: teammember.length * 0.2 }}
            className="w-full h-[300px] rounded-[15px] overflow-hidden"
          >
            <ImageComponents team={{ image: dharan.image }} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam3;
