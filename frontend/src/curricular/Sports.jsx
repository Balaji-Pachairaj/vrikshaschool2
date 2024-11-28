import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardData = [
  { title: "Qualified trainers and coaches", description: "monitor the progress of every child, to ensure that they learn, and excel in sports. Keeping this in view, the school has invested heavily in creating world - class sports infrastructure" },
  { title: "indoor sports", description: "A huge indoor sports Auditorium set up is under progress which aims to provide extensive training to the students in Table Tennis, Badminton, Basketball and many other indoor games." },
  { title: "martial arts and yoga", description: "Martial arts are also taught for self-defense. Yoga is regular features of the senior school's schedule. The School encourages students and provides them with opportunities to participate in different inter school competitions at the national and international levels. Sports Day is celebrated every year with great zeal and enthusiasm." },
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

function Sportscard() {
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

const Sports = () => {
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
                  Sports
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
                    Vriksha is home to some truly outstanding sports facilities, geared up to help aspiring sports professionals to discover their true potential. The school provides playgrounds of international size for these games.
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
                src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Sports Facilities"
                className="w-full h-[400px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 to-blue-900/40 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </section>
      <Sportscard />
    </>
  );
};

export default Sports;