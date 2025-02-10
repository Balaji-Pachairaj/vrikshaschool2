import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import music from "../assets/curricular/music.png";


const cardData = [
    { title: "Expert Faculty", description: "Learn from industry professionals and experienced instructors." },
    { title: "Holistic Learning", description: "Blend of theory, practical training, and live performances." },
    { title: "State-of-the-Art Facilities", description: "Well-equipped studios for music and dance training." },
  ];
  
  function Card({ title, description, index, scrollYProgress }) {
    const isEven = index % 2 === 0;
    const yOffset = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [isEven ? 100 : -100, 0, isEven ? -100 : 100]
    );
  
    return (
      <motion.div 
        className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
        style={{ y: yOffset }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <h3 className="text-xl font-bold mb-2 text-white uppercase">{title}</h3>
        <p className="text-white">{description}</p>
      </motion.div>
    );
  }
  
  function Musiccard() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
    });
  
    return (
      <div ref={containerRef} className="flex justify-center items-center min-h-screen bg-black p-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full max-w-6xl">
          {cardData.map((card, index) => (
            <Card key={index} index={index} scrollYProgress={scrollYProgress} {...card} />
          ))}
        </div>
      </div>
    );
  }
  
  const Music = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    return (
      <>
        <section className="relative min-h-screen bg-black flex items-center py-20 px-4 md:px-8">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-7xl font-bold text-white tracking-tight">
                  <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
                    Music & Dance
                  </span>
                </h2>
              </div>
  
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="space-y-2">
                    <p className="text-white text-xl">
                    Immerse yourself in the world of rhythm and expression with our Music & Dance program. From classical melodies to contemporary beats, we nurture talent at every level. Our expert instructors guide students in mastering instruments, vocal techniques, and diverse dance forms. Experience the joy of creativity through performances, workshops, and competitions. Join us and let your passion for music and dance shine!
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl group">
                <img
                  src= {music}
                  alt="Sports Facilities"
                  className="w-full h-[400px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 to-blue-900/40 mix-blend-multiply" />
              </div>
            </motion.div>
          </div>
        </section>
        <Musiccard />
      </>
    );
  };
  
  export default Music;