import React, { useEffect } from "react";
import leftcard from "../assets/aboutus/card.jpg"
import rightcard from "../assets/aboutus/about-overview.webp"

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
          * {
            font-family: 'Poppins', sans-serif;
          }
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

          @media (max-width: 768px) {
            .left-card-mobile {
              position: static !important;
              transform: none !important;
              margin: 0 !important;
            }
            .right-card-mobile {
              position: static !important;
              transform: none !important;
              margin: 0 !important;
            }
            .card-mobile-container {
              position: relative;
              width: 100%;
              height: 300px;
              overflow: hidden;
              margin-top: 4rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 1rem;
            }
            .card-mobile-container > div > div {
              transform: none !important;
              width: 160px !important;
              height: 220px !important;
            }
            .content-mobile {
              padding: 0 1rem;
              margin-bottom: 2rem;
            }
            .overview-section {
              margin-top: 6rem !important;
            }
          }
        `}
      </style>
      <div className="relative bg-black min-h-screen text-white overflow-hidden font-['Poppins']">
        <div
          className="container mx-auto flex items-center justify-center min-h-screen px-4 overview-section"
          id={"overview"}
        >
          <div className="relative max-w-7xl w-full">
            {/* Center Content */}
            <div className="text-center flex flex-col items-center hide-element mb-8 content-mobile">
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

            <div className="card-mobile-container">
              {/* Left Decorative Image Card */}
              <div className="left-card-mobile absolute left-[-220px] top-[-140px] -translate-y-32 hide-element hide-left">
                <div className="w-64 h-80 relative card-hover-effect">
                  <div className="absolute inset-0 bg-blue-500 rounded-lg -rotate-12 shadow-hover-blue"></div>
                  <div className="absolute inset-0 overflow-hidden rounded-lg -rotate-12">
                    <img
                      src={leftcard}
                      alt="Decorative art"
                      className="w-full h-full object-cover image-hover-effect"
                    />
                  </div>
                </div>
              </div>

              {/* Right Decorative Image Card */}
              <div className="right-card-mobile absolute right-[-220px] top-[140px] translate-y-24 hide-element hide-right">
                <div className="w-64 h-80 relative card-hover-effect">
                  <div className="absolute inset-0 bg-purple-500 rounded-lg rotate-12 shadow-hover-purple"></div>
                  <div className="absolute inset-0 overflow-hidden rounded-lg rotate-12">
                    <img
                      src={rightcard}
                      alt="Decorative art"
                      className="w-full h-full object-cover image-hover-effect"
                    />
                  </div>
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
