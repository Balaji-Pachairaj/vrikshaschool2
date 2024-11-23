import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaBook, FaPen, FaClipboardList, FaHeart } from 'react-icons/fa';

const requirements = [
  { icon: FaBook, title: 'Fiction', subtitle: 'Learning Resources' },
  { icon: FaPen, title: 'Thriller', subtitle: 'Learning Resources' },
  { icon: FaClipboardList, title: 'Textbook', subtitle: 'Learning Resources' },
  { icon: FaHeart, title: 'Fantasy', subtitle: 'Learning Resources' },
  { icon: FaBook, title: 'Science', subtitle: 'Learning Resources' },
  { icon: FaClipboardList, title: 'History', subtitle: 'Learning Resources' }
];

function RequirementIcon({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center space-y-3 transform transition-all duration-300 hover:scale-105">
      <div className="bg-[#1a1a1a] p-6 rounded-full transform transition-transform duration-300 hover:rotate-3">
        <Icon className="text-white text-2xl" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

function App() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const nextSlide = () => {
    setStartIndex((prev) => 
      prev + 1 >= requirements.length - visibleCount + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) => 
      prev - 1 < 0 ? requirements.length - visibleCount : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-6xl mx-auto relative">
        {/* Oval frame */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border border-gray-700 rounded-[60px]"></div>
        
        <div className="relative flex items-center justify-center py-8">
          <button 
            onClick={prevSlide}
            className="absolute left-4 z-10 p-4 text-gray-400 hover:text-gray-200 transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          
          <div className="flex justify-between items-center gap-16 px-20 overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}>
              {requirements.slice(startIndex, startIndex + visibleCount).map((req, index) => (
                <div key={index} className="w-48 flex-shrink-0">
                  <RequirementIcon
                    icon={req.icon}
                    title={req.title}
                    subtitle={req.subtitle}
                  />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-4 z-10 p-4 text-gray-400 hover:text-gray-200 transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;