import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import creative from "../assets/curricular/creative.png";

const Creative = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
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
              Creative Arts
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
                The School has an Arts and Crafts room to help students discover their latent potential. In this pleasing ambience, the splashes of color and the imaginative props & models reverberate with the diversity and complexity of human emotions.
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
              src= {creative}
              className="w-full h-[400px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 to-blue-900/40 mix-blend-multiply" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Creative;