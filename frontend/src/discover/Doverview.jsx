import React from 'react';
import backgroundImage from '../assets/discover/hero.png'; // Adjust the path as needed

const Doverview = () => {
  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center text-white text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center">
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black to-transparent/10 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] bg-clip-text text-transparent">Overview</h1>
          <p className="text-2xl max-w-3xl mx-auto">Experience a school where every detail is designed for your child's growth and happiness. From safe and seamless transport to wholesome meals and a vibrant learning ambiance, we prioritize their journey every step of the way. Scroll down to discover how we make education not just effective, but exceptional.</p>
        </div>
      </div>
    </section>
  );
};

export default Doverview;