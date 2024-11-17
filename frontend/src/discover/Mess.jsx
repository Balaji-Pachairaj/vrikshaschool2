import React from 'react';
import { motion,useInView } from 'framer-motion';


const Digit = ({ value, isInView }) => {
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    if (isInView) {
      setIsAnimating(true);
    }
  }, [isInView]);

  // Don't animate non-numeric characters
  if (isNaN(value)) {
    return (
      <div className="w-5 h-24 flex items-center justify-center">
        <span className="text-4xl font-serif italic text-white">{value}</span>
      </div>
    );
  }

  return (
    <div className="w-5 h-24 bg-black bg-opacity-80 rounded-lg overflow-hidden">
      <div className="relative h-full">
        <motion.div
          initial={{ y: '0%' }}
          animate={isAnimating ? { y: `${-(parseInt(value) + 10) * 100}%` } : { y: '0%' }}
          transition={{
            duration: 2,
            ease: 'easeOut',
            type: 'spring',
            damping: 15,
            stiffness: 30,
          }}
          className="absolute inset-0"
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-full flex items-center justify-center">
              <span className="text-4xl font-serif italic text-white">{i % 10}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const NumberDisplay = ({ value, isInView }) => {
  // Split the value into individual characters (including special characters)
  const characters = value.toString().split('');
  
  return (
    <div className="flex items-center space-x-1">
      {characters.map((char, index) => (
        <React.Fragment key={index}>
          {/* Handle special characters */}
          {char === ':' && (
            <span className="text-white text-4xl font-serif italic mx-1">:</span>
          )}
          {/* Regular digits and other characters */}
          {char !== ':' && (
            <Digit value={char} isInView={isInView} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const StatsCard = ({ number, label }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract suffix (if any) from the number
  const match = number.match(/^([\d:]+)([a-zA-Z]+)?$/);
  const numericPart = match ? match[1] : number;
  const suffix = match ? match[2] : '';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center"
    >
      <div className="flex justify-center items-center mb-2">
        <NumberDisplay value={numericPart} isInView={isInView} />
        {suffix && (
          <span className="text-white text-4xl font-serif italic ml-1">{suffix}</span>
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
    { number: '1:20', label: 'Teacher student ratio' },
    { number: '2000', label: 'Books and journals' },
    { number: '700', label: 'Dining hall capacity' },
    { number: '25m', label: 'Olympic size swimming pool' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stats.map((stat, index) => (
            <StatsCard key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;