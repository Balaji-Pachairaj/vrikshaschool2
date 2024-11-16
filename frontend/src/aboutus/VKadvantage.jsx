import React, { useEffect } from 'react';

const VKadvantage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px', // Triggers slightly earlier
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('font-bold');
          entry.target.classList.remove('font-normal');
          requestAnimationFrame(() => {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, 150);
          });
        } else {
          entry.target.classList.remove('font-bold');
          entry.target.classList.add('font-normal');
          entry.target.style.opacity = '0.8';
          entry.target.style.transform = 'translateY(20px)';
        }
      });
    }, observerOptions);

    // Observe all headings
    document.querySelectorAll('.heading-animate').forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-black relative">
      <div className="container mx-auto px-2 py-16 relative">
        {[
          {
            title: 'SEA VIEW',
            description: 'INNOVATIVE WEBFLOW DESIGN AND DEVELOPMENT AGENCY. BASED IN L.A.',
            imgSrc: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
          },
          {
            title: 'MOUNTAIN VIEW',
            description: 'BREATHTAKING LANDSCAPES AND NATURAL BEAUTY AT ITS FINEST',
            imgSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
          },
          {
            title: 'CITY LIFE',
            description: 'URBAN ARCHITECTURE AND METROPOLITAN EXCELLENCE',
            imgSrc: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop',
          },
          {
            title: 'DESERT DREAMS',
            description: 'EXPLORING THE BEAUTY OF ENDLESS SAND DUNES',
            imgSrc: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000&auto=format&fit=crop',
          },
        ].map((project, index) => (
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-32" key={index}>
            <div className="md:w-1/2 project-container">
              <h2 className="text-8xl font-normal heading-animate font-panchang transition-all duration-1000 ease-in-out opacity-80 transform translate-y-5">
                <div className="transform-3d">
                  <span className="block text-white uppercase tracking-tight">{project.title}</span>
                </div>
              </h2>
              <p className="text-sm mt-6
               text-gray-300">{project.description}</p>
            </div>
            <div className="md:w-[400px]">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @font-face {
          font-family: 'Akira Expanded Demo';
          src: url('assets/Akira Expanded Demo.otf') format('opentype');
          font-weight: normal;
          font-display: swap;
          font-style: normal;
        }
      `}</style>

      <style jsx>{`
        .project-container {
          z-index: 1;
          transform-origin: 0%;
          transform-style: preserve-3d;
          position: relative;
          transform: perspective(810px) rotateX(0) rotateY(30deg) rotateZ(0) perspective(1500px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .transform-3d span {
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          text-shadow: 
            1px 1px 0 rgba(0, 0, 0, 0.2),
            2px 2px 0 rgba(0, 0, 0, 0.3),
            3px 3px 0 rgba(0, 0, 0, 0.4);
          color: white;
          display: inline-block;
          position: relative;
          left: 0;
          opacity: 0.9;
          transform: translateY(10px);
        }

        .heading-animate {
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.8;
          transform: translateY(20px);
          will-change: transform, opacity;
        }

        .heading-animate.font-bold {
          opacity: 1;
          transform: translateY(0);
          transition: all 1.0s ease-in-out; /* Adjusted duration and easing function */
        }

        .transform-3d span:hover {
          color: #FFFF00;
          left: 20px;
          transform: scale(1.02);
          opacity: 1;
        }

        /* Update mobile styles if needed */
        @media (max-width: 768px) {
          .project-container {
            transform: perspective(810px) rotateX(0) rotateY(15deg) rotateZ(0);
          }
        }
      `}</style>
    </div>
  );
};

export default VKadvantage;