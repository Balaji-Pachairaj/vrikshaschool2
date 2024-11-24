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
    <section className="bg-black text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 text-left">
        {/* Top text with infinite loop effect */}
        <div className="relative w-[400px] overflow-hidden mb-4" ref={marqueeRef}>
          <div
            className="animate-marquee whitespace-nowrap inline-block"
            style={{ animationDuration: `${duration}s` }}
          >
            {Array.from({ length: repeatCount }, (_, index) => (
              <h2 key={index} className="text-4xl font-bold inline-block ml-4">
                {headingText}
              </h2>
            ))}
          </div>
        </div>

        {/* Main heading */}
        <p className="text-xl md:text-xl lg:text-4xl font-light leading-tight max-w-3xl">
         A Legacy of Unity Born from a shared commitment to success, our alumni association is built to foster connections that empower us to leverage each other's strengths,
        <span className="bg-red-400/90 px-2 -pt-2">grow together</span>, and create a lasting impact as a unified community. 
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
