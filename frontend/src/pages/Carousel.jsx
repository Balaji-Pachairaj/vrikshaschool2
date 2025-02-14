// Marathoncarousal.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import slide1 from "../assets/marathon/slide1.png";
import slide2 from "../assets/marathon/slide2.png";
import slide3 from "../assets/marathon/slide3.png";

const Marathoncarousal = () => {
  const navigate = useNavigate();
  const images = [
    { src: slide1, route: '/marathon' },
    { src: slide2, route: '/sportacademy' },
    { src: slide3, route: '/alumni' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('right');
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Increased to 3s to better see the animation

    return () => clearInterval(interval);
  }, []);

  const handleSlideClick = () => {
    console.log('Current index:', currentIndex);
    console.log('Navigating to:', images[currentIndex].route);
    navigate(images[currentIndex].route);
  };

  const handleDotClick = (index) => {
    setSlideDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <div className="relative mt-20 w-full max-w-6xl mx-auto h-[250px] overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full cursor-pointer transition-all duration-500 ease-in-out
              ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              ${index === currentIndex ? 'translate-x-0' : 
                slideDirection === 'right' ? 
                  (index < currentIndex ? 'translate-x-[-100%]' : 'translate-x-[100%]') :
                  (index < currentIndex ? 'translate-x-[100%]' : 'translate-x-[-100%]')
              }`}
            onClick={handleSlideClick}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform
              ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}
              hover:scale-110`}
          />
        ))}
      </div>
    </div>
  );
};

export default Marathoncarousal;