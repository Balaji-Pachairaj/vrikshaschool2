import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create more precise rotation control
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [-15, -5, 0, 5, 15]
  );

  // Enhanced scale effect
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.9, 0.95, 1, 0.95, 0.9]
  );

  // Smooth opacity transition
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.7, 0.9, 1, 0.9, 0.7]
  );

  // Parallax effect for the image
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '20%']
  );

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const steps = [
    {
      number: "01",
      title: "CONSULTATION & ASSESSMENT",
      description: "UNDERSTAND CHALLENGES AND ASSESS AI OPPORTUNITIES."
    },
    {
      number: "02",
      title: "CUSTOMIZED AI DEVELOPMENT",
      description: "DESIGN AND DEVELOP TAILORED AI SOLUTIONS."
    },
    {
      number: "03",
      title: "IMPLEMENTATION & SUPPORT",
      description: "INTEGRATE AI INTO WORKFLOWS AND PROVIDE ONGOING OPTIMIZATION."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-7xl font-bold tracking-tight"
            >
              HOW IT
              <span className="block italic text-pink-500 font-serif">Works</span>
            </motion.h1>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="relative z-10">
                    <h2 className="text-xl font-bold mb-2 flex items-center">
                      <span className="text-pink-500 mr-2">{step.number}</span>
                      <span>{step.title}</span>
                    </h2>
                    <p className="text-gray-300 pl-8">
                      {step.description}
                    </p>
                  </div>
                  <motion.div
                    className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500"
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[350px] w-[350px] perspective-1000">
            {/* Animated gradient background */}
            <motion.div 
              style={{ rotate, scale }}
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg filter blur-[2px]"
            />
            
            {/* Main image container with enhanced animations */}
            <motion.div
              style={{ 
                rotate,
                scale,
                opacity,
                y
              }}
              className="relative h-full w-full overflow-hidden rounded-lg transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 mix-blend-overlay z-10" />
              <motion.img
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1"
                alt="Futuristic VR headset"
                className="object-cover w-full h-full transform-gpu"
                style={{
                  scale: useTransform(scrollYProgress, [0, 1], [1.1, 1])
                }}
              />
              
              {/* Animated overlay effects */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                style={{
                  opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0, 0.3])
                }}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  x: useTransform(scrollYProgress, [0, 1], ['-100%', '200%']),
                  opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0])
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;