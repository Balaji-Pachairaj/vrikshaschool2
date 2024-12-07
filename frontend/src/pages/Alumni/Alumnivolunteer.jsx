import React, { useRef, useEffect, useState } from 'react';
import all from "../../assets/alumni/all.png";

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4 sm:px-6 py-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className={`relative z-10 rounded-3xl bg-[#1a1a1a] shadow-2xl transition-all duration-1000 ease-out ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 sm:p-10 md:p-12">
            {/* Left side content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Give Back and Make an Impact
              </h1>

              <div className={`bg-gradient-to-r from-blue-500 to-purple-600 p-6 sm:p-8 rounded-2xl shadow-lg border border-white/10 transition-all duration-1000 delay-300 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed">
                  Use your experience and expertise to mentor, inspire, and support the next generation of students and alumni.
                </p>
              </div>

            </div>

            {/* Image on Right */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className={`relative w-full max-w-md transition-all duration-1000 delay-500 ease-out ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
                <img 
                  src={all}
                  alt="Alumni mentor" 
                  className="relative z-10 w-full h-auto object-contain rounded-2xl"
                  style={{ 
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
