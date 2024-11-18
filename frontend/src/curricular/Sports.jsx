import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'CONSULTATION & ASSESSMENT:',
    description: 'UNDERSTAND CHALLENGES AND ASSESS AI OPPORTUNITIES.',
    icon: Brain,
    color: 'from-pink-500 to-rose-500',
  },
  {
    number: '02',
    title: 'CUSTOMIZED AI DEVELOPMENT:',
    description: 'DESIGN AND DEVELOP TAILORED AI SOLUTIONS.',
    icon: Code,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    number: '03',
    title: 'IMPLEMENTATION & SUPPORT:',
    description: 'INTEGRATE AI INTO WORKFLOWS AND PROVIDE ONGOING OPTIMIZATION.',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500',
  },
];

const HowItWorks = () => {
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
              HOW IT
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Works
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative pl-16 space-y-2">
                  <div className="absolute left-0 top-1 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br group-hover:scale-110 transition-transform duration-300 ease-out shadow-lg shadow-purple-500/20">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-lg font-semibold tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="AI Technology"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 to-blue-900/40 mix-blend-multiply" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;