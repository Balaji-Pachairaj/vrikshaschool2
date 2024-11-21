import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sports from "../assets/curricular/sports.png"
import clubs from "../assets/curricular/clubs.png"
import music from "../assets/curricular/music.png"
import creative from "../assets/curricular/creative.png"
import outdoor from "../assets/curricular/outdoor.png"




const PortfolioGrid = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);
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
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2",
      title: "Webflow",
      subtitle: "Templates",
      path: "/webflow"
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

  // Handle scroll animation
  useEffect(() => {
    if (isMobile) return;

    let rafId = null;
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      const newScrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - sectionTop) / (windowHeight + sectionHeight)
        )
      );

      if (Math.abs(newScrollProgress - scrollProgress) > 0.01) {
        setScrollProgress(newScrollProgress);
      }
    };

    const smoothScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (lastScrollTop === currentScrollTop) {
        rafId = requestAnimationFrame(smoothScroll);
        return;
      }
      lastScrollTop = currentScrollTop;
      handleScroll();
      rafId = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [scrollProgress, isMobile]);

  // Apply scroll animation to cards
  useEffect(() => {
    if (isMobile) {
      cardsRef.current.forEach((card) => {
        if (card) card.style.transform = "translateX(0)";
      });
      return;
    }

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const isFirstRow = index < 3;
      const maxMove = 150;
      
      const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      
      const easedProgress = easeInOutCubic(scrollProgress);
      const movement = easedProgress * maxMove * (isFirstRow ? 1 : -1);
      
      card.style.transform = `translateX(${movement}px)`;
    });
  }, [scrollProgress, isMobile]);

  // Handle mouse movement for cursor following effect
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Handle item click navigation
  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div 
      ref={sectionRef} 
      className="w-full min-h-screen bg-black p-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 h-full gap-6 max-w-7xl mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative overflow-hidden rounded-lg cursor-pointer"
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