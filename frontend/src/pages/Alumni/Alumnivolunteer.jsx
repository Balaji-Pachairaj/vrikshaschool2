import React from 'react';
import all from "../../assets/alumni/all.png";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-black relative overflow-hidden py-20"
    >
      <div 
        className="container mx-auto px-4 relative"
      >
        {/* Heading Content - Positioned behind image */}
        <div 
          className="absolute top-0 left-0 right-0 z-0 text-center pt-32"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] mb-8"
          >
            Give Back and <br/> Make an Impact
          </motion.h1>
        </div>

        {/* Centered Image with Overlapping Text Box */}
        <div 
          className="relative z-10 max-w-5xl mx-auto"
        >
          <div 
            className="relative"
          >
            {/* Background Rectangle */}
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#1a1a1a] transform rounded-2xl -z-10"
            />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-[600px] md:h-[900px]"
            >
              <img 
                src={all}
                alt="Alumni mentor" 
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* Bottom Centered Text Box */}
            <div
              className="absolute -bottom-20 left-0 right-0 mx-auto w-full flex justify-center"
            >
              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:p-10 rounded-xl shadow-lg border border-white/10 max-w-3xl w-[90%]"
              >
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="text-xl text-white font-medium leading-relaxed text-center"
                >
                  Use your experience and expertise to mentor, inspire, and support the next generation of students and alumni.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
