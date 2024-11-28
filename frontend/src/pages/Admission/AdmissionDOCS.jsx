import { useState, useEffect } from 'react';
import {
  FaUserGraduate,
  FaUsers,
  FaFileAlt,
  FaHome,
  FaCertificate,
  FaTrophy,
  FaPassport,
  FaBookOpen,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

const requirements = [
  { icon: FaUserGraduate, title: '3 Photographs', subtitle: 'Of the Student' },
  { icon: FaUsers, title: '3 Photographs', subtitle: 'Of Parent' },
  { icon: FaFileAlt, title: 'Original TC', subtitle: 'From Previous School' },
  { icon: FaHome, title: 'Proof of Residence', subtitle: 'Family card' },
  {
    icon: FaCertificate,
    title: 'Original Certificates',
    subtitle: 'To be produced for verification',
  },
  {
    icon: FaTrophy,
    title: 'Achievement Certificates',
    subtitle: 'Academics, Sports & Extra-Curricular',
  },
  {
    icon: FaPassport,
    title: 'Photocopy of Passport',
    subtitle: 'Mandatory for overseas students',
  },
  {
    icon: FaBookOpen,
    title: 'Admission Documentation',
    subtitle: 'Duly signed by both Parents',
  },
];

function RequirementIcon({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start space-x-3 transform transition-transform duration-700 ease-in-out hover:translate-x-4 p-2">
      <div className="bg-[#1a1a1a] p-2 sm:p-3 rounded-full transform transition-all duration-500 ease-in-out hover:rotate-12 hover:bg-[#2a2a2a] flex-shrink-0">
        <Icon className="text-white text-lg sm:text-xl transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="flex-grow transform transition-transform duration-500 hover:translate-x-2">
        <h3 className="text-xs sm:text-sm font-medium text-white">{title}</h3>
        <p className="text-[10px] sm:text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

function AdmissionDOCS() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + visibleCount >= requirements.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? requirements.length - visibleCount : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
          Documents Required
        </h2>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+1rem)] sm:w-[calc(100%+2rem)] h-[calc(100%+1rem)] sm:h-[calc(100%+2rem)] border border-white rounded-[30px] sm:rounded-[60px]"></div>

          <div className="relative flex items-center justify-center py-4 sm:py-8">
            <button
              onClick={prevSlide}
              className="absolute left-1 sm:left-4 z-10 p-2 sm:p-4 text-white hover:text-gray-200 hover:scale-110"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-xl sm:text-2xl" />
            </button>

            <div className="flex justify-between items-center px-8 sm:px-20 overflow-hidden w-full">
              <div className="w-full relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
                >
                  {requirements.map((req, index) => (
                    <div 
                      key={index} 
                      className={`flex-shrink-0 px-2 sm:px-3`}
                      style={{ width: `${100 / visibleCount}%` }}
                    >
                      <RequirementIcon
                        icon={req.icon}
                        title={req.title}
                        subtitle={req.subtitle}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-1 sm:right-4 z-10 p-2 sm:p-4 text-white hover:text-gray-200 hover:scale-110"
              aria-label="Next"
            >
              <FaChevronRight className="text-xl sm:text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdmissionDOCS;