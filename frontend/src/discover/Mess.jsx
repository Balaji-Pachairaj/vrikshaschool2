import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Digit = ({ finalValue, isInView }) => {
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    if (isInView) {
      setIsAnimating(true);
    }
  }, [isInView]);

  return (
    <div className="w-5 h-24 bg-black bg-opacity-80 rounded-lg overflow-hidden">
      <div className="relative h-full">
        <motion.div
          initial={{ y: '0%' }}
          animate={isAnimating ? { y: `${-(finalValue + 10) * 100}%` } : { y: '0%' }} // 10 full rotations before stopping
          transition={{
            duration: 2, // Reduced duration for faster scrolling
            ease: 'easeOut',
            type: 'spring',
            damping: 15,
            stiffness: 30,
          }}
          className="absolute inset-0"
        >
          {[...Array(20)].map((_, i) => ( // 20 items for multiple full rotations
            <div key={i} className="h-full flex items-center justify-center">
              <span className="text-4xl font-serif italic text-white">{i % 10}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const NumberDisplay = ({ number, isInView }) => {
  const digits = number.toString().padStart(2, '0').split('');

  return (
    <div className="flex space-x-1">
      {digits.map((digit, index) => (
        <Digit key={index} finalValue={parseInt(digit)} isInView={isInView} />
      ))}
    </div>
  );
};

const StatsCard = ({ number, label }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center"
    >
      <div className="flex justify-center items-center mb-2">
        <NumberDisplay number={number.replace(/[^0-9]/g, '')} isInView={isInView} />
        {number.includes('k') && (
          <span className="text-white text-4xl font-serif italic ml-1">k</span>
        )}
        {number.includes('M') && (
          <span className="text-white text-4xl font-serif italic ml-1">M</span>
        )}
      </div>
      <p className="text-gray-400 text-lg">{label}</p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 border-t border-gray-800 w-full origin-left"
      />
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { number: '50', label: 'Acres Campus' },
    { number: '24', label: 'Research Labs' },
    { number: '12', label: 'Academic Blocks' },
    { number: '5000', label: 'Seating Capacity' },
    { number: '4', label: 'Sports Grounds' },
    { number: '3', label: 'Student Hostels' },
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl font-bold text-center mb-12"
        >
          Our Campus & Facilities
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <StatsCard key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
