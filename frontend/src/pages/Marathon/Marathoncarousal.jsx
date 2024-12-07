import React, { useState, useEffect, useRef } from 'react';

// Marathon images from publicly available sources
const defaultMarathonImages = [
  {
    src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Marathon Start Line',
    caption: 'Runners Preparing at the Start Line'
  },
  {
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Runners in Marathon',
    caption: 'Participants Running Through City Streets'
  },
  {
    src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Marathon Finish Line',
    caption: 'Crossing the Finish Line with Determination'
  },
  {
    src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Marathon Award Ceremony',
    caption: 'Celebrating Achievements and Perseverance'
  }
];

const Marathoncarousal = ({ 
  images = defaultMarathonImages, 
  interval = 3000, 
  showNavDots = true,
  showCaptions = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Only start auto-sliding if not hovering
    if (!isHovering && images && images.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % images.length
        );
      }, interval);
    }

    // Cleanup interval on component unmount or when dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images, interval, isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="w-full flex-shrink-0 relative"
          >
            <img 
              src={image.src} 
              alt={image.alt || `Carousel image ${index + 1}`} 
              className="w-full h-[500px] object-cover" 
              loading="lazy"
            />
            {showCaptions && image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {showNavDots && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`
                h-3 w-3 rounded-full transition-colors duration-300
                ${index === currentIndex 
                  ? 'bg-gray-800' 
                  : 'bg-gray-300 hover:bg-gray-500'}
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
        className="
          absolute top-1/2 left-4 transform -translate-y-1/2 
          bg-white/50 hover:bg-white/75 rounded-full p-2 
          opacity-0 group-hover:opacity-100 transition-opacity
        "
        aria-label="Previous slide"
      >
        ←
      </button>
      <button 
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="
          absolute top-1/2 right-4 transform -translate-y-1/2 
          bg-white/50 hover:bg-white/75 rounded-full p-2 
          opacity-0 group-hover:opacity-100 transition-opacity
        "
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
};

export default Marathoncarousal;