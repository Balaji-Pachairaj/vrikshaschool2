import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import outdoor from "../assets/curricular/out.jpg"
import sports  from "../assets/curricular/Sports2.png"

const Outdoor = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center py-20 px-4 md:px-8 space-y-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -50 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-7xl font-bold text-white tracking-tight">
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
                Outdoor Activities
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="space-y-2">
                <p className="text-white text-xl">
                  We believe that play enhances every aspect of a child's development and learning. In fact, it is the child's window to the external world and forms the foundation of social, intellectual, physical, and emotional skills that are a key requisite for success in school as well as in life.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={ref1}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView1 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src= {outdoor}
              alt="Sports Facilities"
              className="w-full h-[400px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 to-blue-900/40 mix-blend-multiply" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView2 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative md:order-none order-2"
        >
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src= {sports}
              alt="Nature Exploration"
              className="w-full h-[400px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-900/80 to-blue-900/40 mix-blend-multiply" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12 md:order-none order-1"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="space-y-2">
                <p className="text-white text-xl">
                  The very idea of including play, in the required ratio with Academics, fulfills the prime objective of enriching students with creativity and thinking skills. We have exclusive play area for the students of all age categories right from kindergarten to primary classes. We are equipped with
                </p>

                <ul className="text-white text-xl grid grid-cols-2 gap-x-4 gap-y-2 pl-6 list-disc">
                <li>Swimming Pool</li>
                <li>Basketball</li>
                <li>Volleyball</li>
                <li>Football</li>
                <li>Badminton</li>
                <li>Pickleball</li>
                <li>Table Tennis</li>
                <li>Cricket</li>
                <li>Archery</li>
                <li>Atheletics</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Outdoor;
