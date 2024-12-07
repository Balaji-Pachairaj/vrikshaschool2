import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Std1 from '../assets/1.png';
import Std2 from '../assets/2.png';
import Std3 from '../assets/3.png';
import Std4 from '../assets/4.png';

const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #000000;
  position: relative;
  min-height: 100vh; // Changed from height to min-height
  overflow: hidden; // Add this to hide overflowing content
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-align: center;
  color: white;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%; // Reduced from 100% to give some side padding
  z-index: 10; // Increased z-index to ensure it's above the cards
  opacity: 0;
  transition: opacity 0s; // Changed from 0.6s to 0s
  white-space: normal; // Changed from nowrap to normal
  word-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 4vw, 1.5rem);
    top: 42%; // Adjust vertical position for mobile
  }
`;

const JoinButton = styled.button`
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translateX(-50%) scale(var(--scale, 0.9));
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  background-color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  opacity: var(--opacity, 0);
  transition: opacity 0s, transform 0s, box-shadow 0.3s ease; // Changed opacity and transform to 0s
  z-index: 10; // Increased z-index to ensure it's above the cards

  &:hover {
    transform: translateX(-50%) scale(calc(var(--scale, 1) * 1.05)) rotate(5deg);
    box-shadow: 0 8px 15px -5px rgba(255, 255, 255, 0.5);
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  perspective: 1000px;
  z-index: 1; // Ensure this is lower than the button's z-index
`;

const StudentCard = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.4s ease-out, opacity 0.4s ease-out; // Added easing
  backface-visibility: hidden;

  &:hover {
    transform: scale(1.1) translateZ(30px) rotate(5deg); // Enhanced hover effect
    z-index: 20; // Bring hovered card to front
  }
`;

const StudentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(${props => props.isOpen ? '4px' : '0px'});

  @keyframes fadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(4px);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      backdrop-filter: blur(4px);
    }
    to {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
  }

  animation: ${props => props.isOpen ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.3s ease-out'};
`;

const ModalContent = styled.div`
  width: 90%;
  max-width: 600px;
  background-color: black;
  border-radius: 20px;
  padding: 1.5rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  transform: scale(${props => props.isOpen ? 1 : 0.9});
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), 
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;

  @keyframes slideIn {
    from {
      transform: scale(0.9) translateY(20px);
      opacity: 0;
    }
    to {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    to {
      transform: scale(0.9) translateY(20px);
      opacity: 0;
    }
  }

  animation: ${props => props.isOpen ? 'slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)'};
`;

const CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  background: #000000;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: rotate(90deg) scale(1.1);
    border-color: rgba(255, 255, 255, 0.4);
    background: linear-gradient(135deg, #7c2ae8, #00c4cc);
  }
`;

const CTA = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldSpread, setShouldSpread] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    timeline: "",
    budget: "",
    description: ""
  });
  const sectionRef = useRef(null);
  const lastScrollTop = useRef(0);
  const scrollPosition = useRef(0);

  const students = [
    { id: 1, name: 'Student 1', image: Std1 },
    { id: 2, name: 'Student 2', image: Std2 },
    { id: 3, name: 'Student 3', image: Std3 },
    { id: 4, name: 'Student 4', image: Std4 },
    { id: 5, name: 'Student 5', image: Std1 },
    { id: 6, name: 'Student 6', image: Std2 },
    { id: 7, name: 'Student 7', image: Std3 },
    { id: 8, name: 'Student 8', image: Std4 },
  ];

  // Handle scroll lock when modal is open
  useEffect(() => {
    if (isModalOpen) {
      // Save current scroll position
      scrollPosition.current = window.scrollY;
      // Disable scroll
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.position = 'relative';
    } else {
      // Re-enable scroll
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      window.scrollTo(0, scrollPosition.current);
    }

    return () => {
      // Cleanup styles when component unmounts
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
    };
  }, [isModalOpen]);

  const presetPositions = [
    { x: -25, y: -25, scale: 0.75 },   // Top left, large
    { x: 30, y: -25, scale: 0.4 },      // Top right
    { x: 8, y: -30, scale: 0.8 },    // Top center, small
    { x: -36, y: 10, scale: 0.6 },    // Middle left
    { x: 0, y: 35, scale: 0.8 },      // Bottom center, large
    { x: 20, y: 30, scale: 0.5 },    // Bottom right
    { x: -20, y: 25, scale: 0.4 },   // Bottom left
    { x: 35, y: 5, scale: 0.75 },     // Middle right, small
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const sectionTop = rect.top;
        const viewportHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Determine scroll direction
        const currentScrollingDown = scrollTop > lastScrollTop.current;
        setIsScrollingDown(currentScrollingDown);
        lastScrollTop.current = scrollTop;

        if (sectionTop <= viewportHeight && sectionTop > -sectionHeight) {
          setIsVisible(true);
          const scrolledPastSection = Math.max(0, viewportHeight - sectionTop);
          const progress = Math.min(1, scrolledPastSection / (sectionHeight + viewportHeight));
          setScrollProgress(progress);
          setShouldSpread(progress > 0.1);
        } else {
          setIsVisible(false);
          setScrollProgress(0);
          setShouldSpread(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const getCardPosition = (index) => {
    const { x, y, scale } = presetPositions[index % presetPositions.length];
    
    // Using the new spreadFactor calculation
    const spreadFactor = 1 + (shouldSpread ? scrollProgress * 2 : 0);
    
    let xPixels = (x / 100) * window.innerWidth * scrollProgress * spreadFactor;
    let yPixels = (y / 100) * window.innerHeight * scrollProgress * spreadFactor;
    const z = 50 * scrollProgress;

    // Adjust the scale range
    const maxScale = scale;
    const minScale = 0.4;
    const currentScale = maxScale - (maxScale - minScale) * (scrollProgress * 1.2);
    
    return {
      transform: `translate3d(${xPixels}px, ${yPixels}px, ${z}px) scale(${currentScale})`,
      opacity: 1 - scrollProgress * 0.7, // Adjusted for a smoother fade-out
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleJoinClick = () => {
    setIsModalOpen(true);
  };

  // Helper function to calculate opacity
  const calculateOpacity = (progress) => {
    if (!isScrollingDown) {
      return Math.max(0, progress - 0.3);
    }
    // Start fade-in earlier and make it more gradual
    return Math.min(1, progress * 2);
  };

  return (
    <CTAContainer ref={sectionRef}>
      <Title style={{ 
        opacity: calculateOpacity(scrollProgress),
        transition: isScrollingDown 
          ? 'opacity 0.3s ease-in' 
          : 'opacity 0.08s ease-out'
      }}>
        Are You Ready To Give Wings To Your Child?
      </Title>
      <JoinButton 
        onClick={handleJoinClick} 
        style={{ 
          '--opacity': calculateOpacity(scrollProgress),
          '--scale': scrollProgress > 0.5 ? 1 : 0.9,
          transition: isScrollingDown 
            ? 'opacity 0.3s ease-in, transform 0.3s ease-in' 
            : 'opacity 0.08s ease-out, transform 0.08s ease-out'
        }}
      >
        Join Now
      </JoinButton>
      <Modal isOpen={isModalOpen}>
        <ModalContent isOpen={isModalOpen}>
          <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[1rem]">
            <div className="w-full flex md:flex-row flex-col justify-between gap-[1rem]">
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[12px] text-white font-kanit uppercase tracking-wider">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full h-[45px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[14px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[12px] text-white font-kanit uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full h-[45px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[14px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
            </div>

            <div className="w-full flex md:flex-row flex-col justify-between gap-[1rem]">
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[12px] text-white font-kanit uppercase tracking-wider">
                  Timeline
                </label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g., 2 weeks"
                  className="w-full h-[45px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[14px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[12px] text-white font-kanit uppercase tracking-wider">
                  Budget
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., ₹5,000"
                  className="w-full h-[45px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[14px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="text-[12px] text-white font-kanit uppercase tracking-wider block mb-[0.5rem]">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                className="w-full h-[100px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[14px] text-white font-kanit p-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full h-[45px] bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] rounded-lg text-[14px] text-white font-kanit uppercase tracking-wider transition-all duration-300 hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </ModalContent>
      </Modal>

      <CardContainer>
        {students.map((student, index) => (
          <StudentCard
            key={student.id}
            style={{
              ...getCardPosition(index),
              zIndex: students.length - index,
            }}
          >
            <StudentImage src={student.image} alt={student.name} />
          </StudentCard>
        ))}
      </CardContainer>
    </CTAContainer>
  );
};

export default CTA;
