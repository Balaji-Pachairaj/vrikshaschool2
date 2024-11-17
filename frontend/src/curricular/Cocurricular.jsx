import React, { useEffect, useRef, useState } from 'react';

const PortfolioGrid = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      title: "ALL FOR ONE",
      subtitle: "ONE FOR ALL",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1557683311-eac922347aa1",
      title: "Geometric",
      subtitle: "Purple Edition",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1",
      title: "DESIGN",
      subtitle: "PROJECTS",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      title: "MOVE",
      subtitle: "Sport Campaign",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
      title: "DIGITAL",
      subtitle: "STUDIO",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2",
      title: "Webflow",
      subtitle: "Templates",
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
            className="relative overflow-hidden rounded-lg"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[260px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Cursor Following Popup */}
      {hoveredItem && (
        <div
          className="fixed pointer-events-none z-50 bg-gray-400 text-black px-4 py-2 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        >
          <p className="font-bold whitespace-nowrap">{hoveredItem.title}</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
