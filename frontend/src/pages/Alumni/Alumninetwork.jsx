"use client"

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import alumn1 from "../../assets/alumni/15.png"
import alumn2 from "../../assets/alumni/16.png"
import alumn3 from "../../assets/alumni/17.png"
import alumn4 from "../../assets/alumni/18.png"
import alumn5 from "../../assets/alumni/19.png"




const images = [
  alumn1,
  alumn2,
  alumn3,
  alumn4,
  alumn5,
 
];

const faceTransforms = [
  'translate3d(-7.5rem, 0, 7.5rem) rotateY(45deg)',
  'translateX(10.6rem)',
  'translateZ(-10.6rem) rotateY(90deg)',
  'translateX(-10.6rem)',
  'translate3d(-7.5rem, 0, 7.5rem) rotateY(45deg)',
  'translate3d(7.5rem, 0, -7.5rem) rotateY(45deg)',
  'translate3d(-7.5rem, 0, -7.5rem) rotateY(-45deg)',
  'translate3d(7.5rem, 0, 7.5rem) rotateY(-45deg)'
];

const styles = {
  wrapper3d: {
    perspective: '1000px',
    transformStyle: 'preserve-3d',
    width: '10rem',
    height: '10rem',
    position: 'relative',
    transform: 'rotateX(10deg) rotateY(10deg) rotateZ(12deg)'
  },
  part3d: {
    transformOrigin: '50%',
    transformStyle: 'preserve-3d',
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  face: {
    position: 'absolute',
    width: '21rem',
    height: '21rem',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transformStyle: 'preserve-3d'
  }
};

function RotatingCube() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotateY: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, []);

  return (
    <div className="w-40 h-40">
      <div style={styles.wrapper3d}>
        <motion.div animate={controls} style={styles.part3d}>
          {images.map((imageUrl, index) => (
            <div
              key={index}
              style={{
                ...styles.face,
                transform: faceTransforms[index],
                backgroundImage: `url(${imageUrl})`,
                zIndex: index === 0 ? 1 : 'auto'
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <main className="relative min-h-[600px] bg-black overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="relative flex items-center p-8 md:p-16">
          <div className="max-w-lg">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
            >
            Unlock New Opportunities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg mb-12 max-w-md"
            >Our alumni network opens doors to valuable placement opportunities, mentorship, upskilling programs, and career-oriented support, helping you advance professionally and succeed in your chosen field.
            </motion.p>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute">
            <RotatingCube />
          </div>
        </div>
      </div>
    </main>
  );        
}

export default Hero;

