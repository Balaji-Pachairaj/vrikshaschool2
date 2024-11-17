import React, { useEffect } from 'react';

const VKadvantage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
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

    document.querySelectorAll('.heading-animate').forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-black relative">
      <div className="container mx-auto px-2 py-16 relative">
        <h1 className="text-6xl font-bold py-8 text-white mb-16 text-center">
          The Vriksha Advantage
        </h1>
        {[
          {
            title: 'microcosm of the modern world',
            description: 'A coeducation school, which stands as the perfect learning ground for every child. The vast expanse of the campus inspires a child in treating the world as his / her domain. When young minds are opened to the exceptional world of talent that lies inside them, they will surely lead the world to a greater tomorrow.',
            imgSrc: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop',
          },
          {
            title: 'A welcoming, family atmosphere',
            description: 'At Vriksha there exists a welcoming, family atmosphere of warmth, security, trust and friendliness where firmness is mixed with encouragement and challenge to stimulate the child. Every child is equipped with his bravado to meet the challenges of the world, and rewrite his/her future.',
            imgSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
          },
          {
            title: 'high standards for students',
            description: 'We set very high standards, not only for teaching and learning, but also for behaviour and attitude towards others. We believe that the behaviour of students will have a huge impact not only on the quality of their own lives, but also on the lives of others. We want our students to develop confidence in themselves and their abilities, so that they can learn to handle new situations and accept the challenges that life offers.',
            imgSrc: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
          },
          {
            title: 'LIVELY INTERESt AND CURIOSITY',
            description: 'We work to give students a thorough grounding in basic skills, to develop a lively interest and curiosity about the world in which they live, to experience a wide curriculum that includes the creative arts and physical activities and to develop a love of learning that will stay with them throughout their life.',
            imgSrc: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop',
          },
        ].map((project, index) => (
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-32" key={index}>
            <div className="md:w-1/2 project-container">
              <h2 className="text-8xl font-normal heading-animate font-panchang transition-all duration-1000 ease-in-out opacity-80 transform translate-y-5">
                <div className="transform-3d">
                  <span className="block text-white uppercase tracking-tight">{project.title}</span>
                </div>
              </h2>
              <p className="text-sm mt-6 text-gray-300">{project.description}</p>
            </div>
            <div className="md:w-[400px]">
              <div className="rounded-lg overflow-hidden shadow-lg image-container group">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-[300px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
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
          transition: all 1.0s ease-in-out;
        }

        .transform-3d span:hover {
          color: #FFFF00;
          left: 20px;
          transform: scale(1.02);
          opacity: 1;
        }

        .image-container {
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease-in-out;
        }

        .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 0.7s ease-in-out;
          z-index: 1;
        }

        .image-container:hover::before {
          opacity: 1;
        }

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