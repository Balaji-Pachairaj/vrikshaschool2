import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { BarChart3, Link, FileText, Package } from 'lucide-react';

const BenefitCard = ({ title, description, icon: Icon, index }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="bg-zinc-900 rounded-3xl p-8"
    >
      <Icon className="w-12 h-12 mb-6 text-blue-500" />
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400 text-lg">
        {description}
      </p>
    </motion.div>
  );
};

const benefitsData = [
  {
    title: 'INTEGRATIONS',
    description: 'Seamlessly connect with your favorite tools for a unified workflow.',
    icon: Link,
  },
  {
    title: 'ANALYTICS',
    description: 'Gain actionable insights with powerful data analysis capabilities.',
    icon: BarChart3,
  },
  {
    title: 'REPORTS',
    description: 'Generate detailed reports to track performance and make informed decisions.',
    icon: FileText,
  },
  {
    title: 'ALL-IN-ONE',
    description: 'Access all essential growth tools in one comprehensive platform.',
    icon: Package,
  },
];

export function AlumniBenefits() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Exclusive Alumni Benefits
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              {...benefit}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}