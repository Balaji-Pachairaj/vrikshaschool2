import React, { useEffect } from "react";
const Overview = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-element");
            if (entry.target.classList.contains("heading")) {
              entry.target.classList.add("animate-heading");
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const hiddenElements = document.querySelectorAll(".hide-element");
    hiddenElements.forEach((el) => observer.observe(el));

    // Manually trigger the observer callback for initially intersecting elements
    hiddenElements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("show-element");
        if (el.classList.contains("heading")) {
          el.classList.add("animate-heading");
        }
      }
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <style>
        {`
          .hide-element {
            opacity: 0;
            transition: all 1.5s ease;
          }
          .hide-left {
            transform: translateX(-80%);
          }
          .hide-right {
            transform: translateX(80%);
          }
          .show-element {
            opacity: 1;
            transform: translateX(0);
          }
          .card-hover-effect {
            transition: all 0.5s ease;
          }
          .card-hover-effect:hover {
            transform: scale(1.05);
          }
          .image-hover-effect {
            transition: transform 0.5s ease;
          }
          .image-hover-effect:hover {
            transform: scale(1.1);
          }
          .shadow-hover-blue:hover {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          .shadow-hover-purple:hover {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
          }
          @keyframes rotate3D {
            0% {
              transform: perspective(500px) rotateY(0deg) rotateX(0deg);
            }
            100% {
              transform: perspective(500px) rotateY(20deg) rotateX(10deg);
            }
          }
          .animate-heading {
            animation: rotate3D 1s ease forwards;
          }
            // Update the @keyframes in your style tag

  @keyframes fadeInRotate {
    0% {
      opacity: 0;
      transform: perspective(500px) rotateY(0deg) rotateX(0deg);
    }
    50% {
      opacity: 1;
      transform: perspective(500px) rotateY(0deg) rotateX(0deg);
    }
    100% {
      opacity: 1;
      transform: perspective(500px) rotateY(20deg) rotateX(10deg);
    }
  }

  .animate-heading {
    animation: fadeInRotate 2s ease forwards;
    background: linear-gradient(45deg, #4f46e5, #7c3aed, #2563eb);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

        `}
      </style>
      <div className="relative bg-black min-h-screen text-white overflow-hidden">
        <div
          className="container mx-auto flex items-center justify-center min-h-screen"
          id={"overview"}
        >
          <div className="relative max-w-7xl w-full">
            {/* Left Decorative Image Card */}
            <div className="absolute left-[-220px] top-[-140px] -translate-y-32 hide-element hide-left">
              <div className="w-64 h-80 relative card-hover-effect">
                <div className="absolute inset-0 bg-blue-500 rounded-lg -rotate-12 shadow-hover-blue"></div>
                <div className="absolute inset-0 overflow-hidden rounded-lg -rotate-12">
                  <img
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3"
                    alt="Decorative art"
                    className="w-full h-full object-cover image-hover-effect"
                  />
                </div>
              </div>
            </div>
            {/* Center Content */}
            <div className="text-center flex flex-col items-center hide-element">
              <h1 className="text-5xl md:text-9xl font-bold mb-8 uppercase heading">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
                  Overview
                </span>
              </h1>
              <p className="text-gray-300 text-xl mx-auto leading-tight max-w-3xl">
                Vriksha Global School is an educational institution in
                Tamilnadu, India, established in 2012. Since then it has been
                playing a vital role in Promoting the cause of education by
                imparting quality education with special emphasis on the
                holistic development of the child. It is an English medium
                school from class I to class XII affiliated to the Central Board
                of Secondary Education (CBSE), New Delhi.
              </p>
            </div>
            {/* Right Decorative Image Card */}
            <div className="absolute right-[-220px] top-[140px] translate-y-24 hide-element hide-right">
              <div className="w-64 h-80 relative card-hover-effect">
                <div className="absolute inset-0 bg-purple-500 rounded-lg rotate-12 shadow-hover-purple"></div>
                <div className="absolute inset-0 overflow-hidden rounded-lg rotate-12">
                  <img
                    src="https://images.unsplash.com/photo-1608501947097-86951ad73fea?ixlib=rb-4.0.3"
                    alt="Decorative art"
                    className="w-full h-full object-cover image-hover-effect"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Overview;
