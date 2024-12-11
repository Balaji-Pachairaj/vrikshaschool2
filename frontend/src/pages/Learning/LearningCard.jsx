import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";


const cardContents = [
  {
    title: "Vriksha Junior",
     path: "/facilities"
  },
  {
    title: "Primary, Secondary & High School",
    path: "/higher"

  },
  {
    title: "Lead Curriculum",
    path: "/lead"

  }
];

const SingleCardCom = ({ content }) => {
  return (
    <Link to={content.path} onClick={() => window.scrollTo(0, 0)}>
      <div className="w-full h-full relative rounded-3xl shadow-lg p-6 bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] flex items-center justify-center">
        <h2 className="text-5xl uppercase font-bold text-center text-white mb-3">{content.title}</h2>
      </div>
    </Link>
  );
};


const GallerySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fullRef = useRef();

  const fullRefUseScroll = useScroll({
    target: fullRef,
    offset: ["0 0", "1 1"],
  });

  

  //-------------------------------------------------------------------------
  const slide1Ref = useRef();

  const slide1RefUseScroll = useScroll({
    target: slide1Ref,
    offset: ["0 1", "1 0"],
  });

  const topSlide1UseScroll = useTransform(
    slide1RefUseScroll.scrollYProgress,
    [0, 0.5, 1],
    ["190%", "70%", "-55%"]
  );

  const leftSlide1UseScroll = useTransform(
    slide1RefUseScroll.scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    ["50%", "85%", "50%", "15%", "50%"]
  );

  const rotateYSlide1UseScroll = useTransform(
    slide1RefUseScroll.scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    ["180deg", "90deg", "0deg", "90deg", "180deg"]
  );

  //-------------------------------------------------------------------------

  const slide2Ref = useRef();

  const slide2RefUseScroll = useScroll({
    target: slide2Ref,
    offset: ["0 1", "1 0"],
  });

  const topslide2UseScroll = useTransform(
    slide2RefUseScroll.scrollYProgress,
    [0, 0.5, 1],
    ["190%", "100%", "-25%"]
  );

  const leftslide2UseScroll = useTransform(
    slide2RefUseScroll.scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    ["50%", "85%", "50%", "15%", "50%"]
  );

  const rotateYSlide2UseScroll = useTransform(
    slide2RefUseScroll.scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    ["180deg", "90deg", "0deg", "90deg", "180deg"]
  );

  //-------------------------------------------------------------------------

  const slide3Ref = useRef();

  const slide3RefUseScroll = useScroll({
    target: slide3Ref,
    offset: ["0 1", "1 0"],
  });

  const topslide3UseScroll = useTransform(
    slide3RefUseScroll.scrollYProgress,
    [0, 0.5, 1],
    ["190%", "100%", "-25%"]
  );

  const leftslide3UseScroll = useTransform(
    slide3RefUseScroll.scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    ["50%", "85%", "50%", "15%", "50%"]
  );

  const rotateYslide3UseScroll = useTransform(
    slide3RefUseScroll.scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    ["180deg", "90deg", "0deg", "90deg", "180deg"]
  );

  

  return (
    <>
      <div className="w-full h-[5vh]"></div>

      {isMobile ? (
        <div className="w-full p-4 space-y-4">
          {cardContents.map((content, index) => (
            <div key={index} className="w-full h-[450px]">
              <SingleCardCom content={content} />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full md:h-[20rem] h-[20rem]" ref={fullRef}>
          <div className="w-full lg:h-[300px] md:h-[275px] sm:h-[220px] h-[150px]" ref={slide1Ref}></div>
          <div className="w-full lg:h-[300px] md:h-[275px] sm:h-[220px] h-[150px]" ref={slide2Ref}></div>
          <div className="w-full lg:h-[300px] md:h-[275px] sm:h-[220px] h-[150px]" ref={slide3Ref}></div>

          <motion.div
            style={{
              y: "-50%",
              x: "-50%",
              top: topSlide1UseScroll,
              left: leftSlide1UseScroll,
              rotateY: rotateYSlide1UseScroll,
            }}
            className="fixed top-[90%] lg:w-[450px] lg:h-[450px] md:w-[400px] md:h-[275px] sm:w-[350px] sm:h-[220px] w-[275px] h-[150px]"
          >
            <SingleCardCom content={cardContents[0]} />
          </motion.div>

          <motion.div
            style={{
              y: "-100%",
              x: "-50%",
              top: topslide2UseScroll,
              left: leftslide2UseScroll,
              rotateY: rotateYSlide2UseScroll,
            }}
            className="fixed top-[90%] lg:w-[450px] lg:h-[450px] md:w-[400px] md:h-[275px] sm:w-[350px] sm:h-[220px] w-[275px] h-[150px]"
          >
            <SingleCardCom content={cardContents[1]} />
          </motion.div>

          <motion.div
            style={{
              y: "-100%",
              x: "-50%",
              top: topslide3UseScroll,
              left: leftslide3UseScroll,
              rotateY: rotateYslide3UseScroll,
            }}
            className="fixed top-[90%] lg:w-[450px] lg:h-[450px] md:w-[400px] md:h-[275px] sm:w-[350px] sm:h-[220px] w-[275px] h-[150px]"
          >
            <SingleCardCom content={cardContents[2]} />
          </motion.div>
        </div>
      )}
      
      <div className={`w-full ${isMobile ? 'h-[5vh]' : 'h-[140vh]'}`}></div>
    </>
  );
};

export default GallerySection;
