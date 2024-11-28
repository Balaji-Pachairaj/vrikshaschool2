import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Briefcase, Users, GraduationCap, Gift } from 'lucide-react';

const BenefitCard = ({ title, description, icon: Icon, index }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
    amount: 0.4
  });

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
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="bg-zinc-900 rounded-3xl p-8 h-full"
    >
      <Icon className="w-12 h-12 mb-6 stroke-[#7c2ae8] stroke-2" strokeLinecap="round" strokeLinejoin="round" />
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400 text-lg">
        {description}
      </p>
    </motion.div>
  );
};

const benefitsData = [
  {
    title: 'CAREER RESOURCES',
    description: 'Access exclusive job boards, career counseling, and professional development workshops.',
    icon: Briefcase,
  },
  {
    title: 'NETWORKING',
    description: 'Connect with fellow alumni through events, mentorship programs, and online communities.',
    icon: Users,
  },
  {
    title: 'LEARNING ACCESS',
    description: 'Lifetime access to library resources, online courses, and continuing education programs.',
    icon: GraduationCap,
  },
  {
    title: 'SPECIAL PERKS',
    description: 'Enjoy exclusive discounts on campus facilities, events, and partner organization services.',
    icon: Gift,
  },
];

export function AlumniBenefits() {
  return (
    <section className="min-h-screen bg-black px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Exclusive Alumni Benefits
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
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

export default AlumniBenefits;