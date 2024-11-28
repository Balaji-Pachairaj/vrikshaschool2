import React, { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const headingText = "• Overview";
  const repeatCount = 100; // Adjust based on your desired repetitions
  const marqueeRef = useRef(null);
  const [duration, setDuration] = useState(15); // Default duration in seconds

  useEffect(() => {
    if (marqueeRef.current) {
      const totalWidth = marqueeRef.current.scrollWidth;
      const visibleWidth = marqueeRef.current.offsetWidth;
      const speed = 50; // Pixels per second (adjust to control the speed)
      const newDuration = totalWidth / speed;
      setDuration(newDuration); // Update animation duration based on width
    }
  }, [repeatCount]);

  return (
    <section className="bg-black text-white min-h-screen flex items-center py-8 md:py-12">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top text with infinite loop effect */}
        <div className="relative w-full overflow-hidden mb-6 md:mb-8" ref={marqueeRef}>
          <div
            className="animate-marquee whitespace-nowrap inline-block"
            style={{ animationDuration: `${duration}s` }}
          >
            {Array.from({ length: repeatCount }, (_, index) => (
              <h2 key={index} className="text-2xl md:text-3xl lg:text-4xl font-bold inline-block ml-4">
                {headingText}
              </h2>
            ))}
          </div>
        </div>

        {/* Main heading */}
        <p className="text-lg sm:text-xl lg:text-4xl font-light leading-tight max-w-3xl mx-auto px-4 sm:px-6 text-center">
          A Legacy of Unity Born from a shared commitment to success, our alumni association is built to foster connections that empower us to leverage each other's strengths,
          <span className="bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] px-2 inline-block mt-2 md:mt-0 md:inline">grow together</span>, and create a lasting impact as a unified community. 
        </p>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
