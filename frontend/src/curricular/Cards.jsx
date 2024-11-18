import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollCards = () => {
    const { scrollYProgress } = useScroll();
    const cardData = [
        { title: "Design", description: "Creative solutions for modern interfaces" },
        { title: "Development", description: "Robust and scalable web applications" },
        { title: "Marketing", description: "Strategic digital growth approaches" },
        { title: "Consulting", description: "Expert guidance for technology strategies" }
    ];
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-black p-4">
        <div className="flex space-x-4 w-full max-w-6xl">
          {cardData.map((card, index) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [0, index % 2 === 0 ? -200 : 200, 0]
            );
  
            return (
              <motion.div 
                key={index} 
                className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
                style={{ 
                  y: yOffset,
                  position: 'relative',
                  transition: 'transform 0.3s ease'
                }}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

export default ScrollCards;