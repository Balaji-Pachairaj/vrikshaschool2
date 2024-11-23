import React from 'react';
import { motion } from 'framer-motion';

const MarathonCategories = () => {
  const cards = [
    {
      title: "U-17 CATEGORY",
      subtitle: "10 KM FOR BOYS & GIRLS",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=400&h=250&fit=crop"
    },
    {
      title: "U-12 CATEGORY",
      subtitle: "3 KM FOR BOYS & GIRLS",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=400&h=250&fit=crop"
    },
    {
      title: "OPEN CATEGORY",
      subtitle: "10 KM FOR MEN & WOMEN",
      image: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=400&h=250&fit=crop"
    },
    {
      title: "FREE RUN",
      subtitle: "5 KM FREE RUN",
      image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="bg-black min-h-screen py-16 px-4">
      <h1 className="text-6xl font-extrabold text-center mb-16 text-white tracking-tight">
        Categories
      </h1>
      
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <motion.div 
            key={index}
            className="relative h-80 perspective-1000" // Increased height
            initial={{ 
              opacity: 0,
              scale: [1, 1, 1],
              rotateX: 28,
              rotateY: -46,
              rotateZ: 0,
              skew: [0, 0]
            }}
            animate={{ 
              opacity: 1,
              scale: [1, 1, 1],
              rotateX: 8,
              rotateY: -16,
              rotateZ: 0,
              skew: [0, 0]
            }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-[#1a1a1a] rounded-2xl shadow-xl transform preserve-3d hover:shadow-2xl transition duration-300 overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 transform translate-z-12">
                <div className="w-full h-36 mb-4 relative"> {/* Modified dimensions */}
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-lg" // Changed to object-cover
                  />
                </div>
                <h2 className="text-white text-3xl font-bold mb-2 text-center">{card.title}</h2>
                <p className="text-gray-400 text-lg text-center">{card.subtitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MarathonCategories;