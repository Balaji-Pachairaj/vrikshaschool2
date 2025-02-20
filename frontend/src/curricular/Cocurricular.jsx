import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import sports from "../assets/curricular/sports.png"
import clubs from "../assets/curricular/clubs.png"
import music from "../assets/curricular/music.png"
import creative from "../assets/curricular/creative.png"
import outdoor from "../assets/curricular/out.jpg"

const PortfolioGrid = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      image: sports,
      title: "Sports",
      subtitle: "ONE FOR ALL",
      path: "/sports"
    },
    {
      id: 2,
      image: outdoor,
      title: "Outdoor Activities",
      subtitle: "Purple Edition",
      path: "/outdoor"
    },
    {
      id: 3,
      image: clubs,
      title: "Clubs",
      subtitle: "PROJECTS",
      path: "/clubs"
    },
    {
      id: 4,
      image: music,
      title: "Music & Dance",
      subtitle: "Sport Campaign",
      path: "/music-dance"
    },
    {
      id: 5,
      image: creative,
      title: "Creative Arts",
      subtitle: "STUDIO",
      path: "/creative"
    }
  ];

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle mouse movement for cursor following effect
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Handle item click navigation
  const handleItemClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path);
  };

  return (
    <div 
      className="w-full min-h-screen bg-black p-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Modified grid container with auto-rows and justify-items-center */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-6 max-w-7xl mx-auto">
        {/* First three items */}
        {portfolioItems.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg cursor-pointer w-full"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => handleItemClick(item.path)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[260px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
        
        {/* Container for the last two items - centered */}
        <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-6">
          {portfolioItems.slice(3).map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg cursor-pointer w-full md:w-[calc(33.333%-1rem)]"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleItemClick(item.path)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[260px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {hoveredItem && (
        <div
          className="fixed pointer-events-none z-50 px-4 py-2 -rotate-6 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md bg-white/30 border border-white/20"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p className="font-bold whitespace-nowrap text-white">{hoveredItem.title}</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;