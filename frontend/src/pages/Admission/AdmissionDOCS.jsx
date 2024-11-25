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
  { icon: FaUserGraduate, title: '3 Photographs', subtitle: 'Of Student' },
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
    <div className="flex items-start space-x-3 transform transition-transform duration-700 ease-in-out hover:translate-x-4">
      <div className="bg-[#1a1a1a] p-3 rounded-full transform transition-all duration-500 ease-in-out hover:rotate-12 hover:bg-[#2a2a2a] flex-shrink-0">
        <Icon className="text-white text-xl transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="flex-grow transform transition-transform duration-500 hover:translate-x-2">
        <h3 className="text-sm font-medium text-white">{title}</h3>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}
  function AdmissionDOCS() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 4;

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % requirements.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + requirements.length) % requirements.length);
    };

    const visibleRequirements = [...requirements.slice(currentIndex), ...requirements.slice(0, currentIndex)].slice(0, visibleCount);

    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-8">
        <div className="w-full max-w-6xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border border-white rounded-[60px]"></div>

          <div className="relative flex items-center justify-center py-8">
            <button
              onClick={prevSlide}
              className="absolute left-4 z-10 p-4 text-white hover:text-gray-200 hover:scale-110"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            <div className="flex justify-between items-center px-20 overflow-hidden">
              <div className="grid grid-cols-4 gap-6">
                {visibleRequirements.map((req, index) => (
                  <RequirementIcon
                    key={index}
                    icon={req.icon}
                    title={req.title}
                    subtitle={req.subtitle}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 z-10 p-4 text-white hover:text-gray-200 hover:scale-110"
              aria-label="Next"
            >
              <FaChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    );
  }
export default AdmissionDOCS;

  