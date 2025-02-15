import React, { useEffect, useState, useRef, useCallback, useMemo, useContext } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, useAnimation } from "framer-motion";
import { ModalContext } from '../context/ModalContext';

// Navigation link data structure containing all routes and their sub-sections
export const NavBarLinks = [
  {
    title: "Home",
    to: "/?section=start",
    sections: [
      { title: "Our vision", to: "/?section=visionandmission" },
      { title: "our Milestone", to: "/?section=milestone" },
      { title: "category", to: "/?section=category" },
      { title: "the advantages", to: "/?section=advantages" },
      { title: "why us?", to: "/?section=whyus" }, 
      { title: "the testimonals", to: "/?section=testimonals" },
    ],
  },
  {
    title: "About us",
    to: "/aboutus?section=start",
    sections: [
      { title: "overview", to: "/aboutus?section=overview" },
      { title: "Vision and mission", to: "/aboutus?section=mission" },
      { title: "the Vriksha advantage", to: "/aboutus?section=advantage" },
      { title: "houses", to: "/aboutus?section=houses" },
      { title: "leadership", to: "/aboutus?section=leadership" },
      { title: "our partners", to: "/aboutus?section=partners" },
    ],
  },
  {
    title: "Learning",
    to: "/learning?section=start",
    sections: [
      { title: "overview", to: "/learning?section=overview" },
      { title: "three sections", to: "/learning?section=learningcard" },
      { title: "vriksha junior", to: "/facilities?section=facilitessection" },
      { title: "Primary, Seconday & High School", to: "/higher?section=higher" },
      { title: "LEAD Curriculum", to: "/lead?section=lead" },
    ],
  },
  {
    title: "CO & EXTRA CURRICULARS",
    to: "/curricular?section=start",
    sections: [
      { title: "overview", to: "/curricular?section=overview" },
      { title: "curricular", to: "/curricular?section=co" },
      { title: "sports", to: "/sports?section=sports" },
      { title: "outdoor activites", to: "/outdoor?section=outdoor" },
      { title: "clubs", to: "/clubs?section=clubs" },
      { title: "Music & Dance", to: "/music-dance?section=music-dance" },
      { title: "creative arts", to: "/creative?section=creative" },
    ],
  },
  // Right side links (after logo)
  {
    title: "discover",
    to: "/discover?section=start",
    sections: [
      { title: "overview", to: "/discover?section=overview" },
      { title: "facilities", to: "/discover?section=mess" },
      { title: "discover", to: "/discover?section=content" },
    ],
  },
  {
    title: "admissions",
    to: "/admission?section=start",
    sections: [
      { title: "overview", to: "/admission?section=overview" },
      { title: "Admission Steps", to: "/admission?section=admissionsteps" },
      { title: "Documents", to: "/admission?section=admissiondocuments" },
      { title: "Terms & Conditions", to: "/admission?section=termsconditions" },
      { title: "Term Dates", to: "/admission?section=termdates" },
      { title: "FAQ's", to: "/admission?section=faq" },
    ],
  },
  {
    title: "sports academy",
    to: "/sportacademy?section=start",
    sections: [
      { title: "aboutus", to: "/sportacademy?section=aboutus" },
      { title: "program offer", to: "/sportacademy?section=programoffer" },
      { title: "training", to: "/sportacademy?section=training" },
      { title: "success", to: "/sportacademy?section=success" },
      // { title: "story", to: "/sportacademy?section=story" },
      { title: "membership", to: "/sportacademy?section=membership" },
      { title: "faq's", to: "/sportacademy?section=faqs" },
    ],
  },
  {
    title: "Others",
    to: "/alumni?section=start",
    sections: [
      {
        title: "Alumni",
        to: "/alumni?section=start",
      },
      {
        title: "Marathon",
        to: "/marathon?section=start",
      },
      {
        title: "Contact Us",
        to: "/contact?section=start",
      },
    ],
  },
];

// Custom hook to handle scrolling to specific sections when URL parameters change
const useScrollToSection = (searchParams) => {
  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      // Add a small delay to ensure the new page content is loaded
      setTimeout(() => {
        try {
          const targetElement = document.getElementById(section);
          if (targetElement) {
            const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            
            window.scrollTo({
              top: targetPosition - navbarHeight - 20, // Subtract navbar height and add some padding
              behavior: "smooth",
            });
          }
        } catch (error) {
          console.error("Error scrolling to section:", error);
        }
      }, 100);
    }
  }, [searchParams]);
};

// Desktop navigation link component
const NavLap = React.memo(({ content = {} }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <NavLink
      to={content?.to}
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
      className={({ isActive }) => {
        return `cursor-pointer uppercase ${
          isActive ? "border-b-2 border-white" : ""
        } text-white text-[13px] font-[600] font-inter h-fit w-fit ps-[0.25rem] pe-[0.25rem] pt-[0.5rem] pb-[0.5rem] text-nowrap relative`;
      }}
    >
      {content?.title}
      {content?.sections?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: onHover ? 1 : 0,
            y: onHover ? 0 : -10,
            display: onHover ? "flex" : "none",
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className={`w-[200px] h-fit pb-[2rem] gap-[0.5rem] pt-[2rem] left-[-20px] backdrop-blur-lg bg-black/70 border border-white/20 shadow-xl flex-col absolute top-[101%] rounded-[8px]`}
        >
          {content?.sections?.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <NavLink
                  to={item?.to}
                  smooth
                  className=" ps-[1rem] pe-[1rem] uppercase text-wrap flex flex-col justify-center min-h-[30px] h-fit text-white font-[600] text-[12px] font-inter "
                >
                  <p
                    className={`p-[0.5rem] w-fit h-fit rounded-[8px] hover:bg-white/15 duration-300 hover:text-white`}
                  >
                    {item?.title}
                  </p>
                </NavLink>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </NavLink>
  );
});

// Mobile navigation link component with dropdown functionality
const NavMobile = React.memo(({ content = {}, toggle = () => {}, isActive, setActiveMenu }) => {
  const controls = useAnimation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  useScrollToSection(searchParams);

  useEffect(() => {
    if (isActive) {
      controls.start({
        height: content?.sections?.length * 25 + "px",
        transition: {
          duration: 0.3,
        },
      });
    } else {
      controls.start({
        height: "0.5px",
        transition: {
          duration: 0.1,
        },
      });
    }
  }, [isActive, content?.sections?.length, controls]);

  const handleClick = () => {
    if (!isActive) {
      setActiveMenu(content.title);
    } else {
      setActiveMenu(null);
    }

    if (!content?.sections?.length) {
      navigate(content?.to);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className=" w-full h-[40px] flex flex-row items-center  duration-500 uppercase  gap-[0.3rem] hover:bg-white/15 flex-shrink-0 "
      >
        <h1 className="text-white text-[10px] font-[600] font-inter ps-[2rem] flex flex-row gap-[0.5rem] items-center">
          {content?.title}
          <TbTriangleInvertedFilled size={10} color={"white"} />
        </h1>
      </button>
      <motion.div
        initial={{ height: "0px" }}
        animate={controls}
        onClick={() => {
          setActiveMenu(null);
          toggle();
        }}
        className={`w-full flex flex-col gap-[0.5rem] flex-shrink-0 overflow-hidden`}
      >
        {content?.sections?.map((item) => {
          return (
            <NavLink
              to={item?.to}
              className="ps-[4rem]   text-[12px] text-white font-[600] font-inter uppercase hover:ps-[4.5rem] duration-300"
            >
              {item?.title}
            </NavLink>
          );
        })}
      </motion.div>
    </>
  );
});

// Custom hook to handle navbar visibility on scroll
const useNavbarScroll = (setIsVisible) => {
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    // Handle scroll events with requestAnimationFrame for performance
    const handleScroll = () => {
      if (scrollTimeout.current) {
        window.cancelAnimationFrame(scrollTimeout.current);
      }

      scrollTimeout.current = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY.current;
        
        if (Math.abs(scrollDelta) < 10) return;
        
        if (scrollDelta < 0 || currentScrollY < 50) {
          setIsVisible(true);
        } else if (scrollDelta > 0 && currentScrollY > 100) {
          setIsVisible(false);
        }
        
        lastScrollY.current = currentScrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        window.cancelAnimationFrame(scrollTimeout.current);
      }
    };
  }, [setIsVisible]);
};

// Main NavBar component
const NavBar = () => {
  // State for mobile menu
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const controls = useAnimation();
  const navRef = useRef(null);
  // State for navbar visibility
  const [isVisible, setIsVisible] = useState(true);
  const [searchParams] = useSearchParams();
  
  // Initialize scroll handling and section scrolling
  useNavbarScroll(setIsVisible);
  useScrollToSection(searchParams);

  const { isModalOpen } = useContext(ModalContext);

  // Handle clicks outside mobile menu to close it
  const handleClickOutside = useCallback((event) => {
    if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
      controls.start({
        top: "-100%",
        transition: {
          duration: 0.5,
        },
      });
      setIsOpen(false);
      setActiveMenu(null);
    }
  }, [isOpen, controls]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  // Toggle mobile menu open/closed
  const toggle = useCallback(() => {
    if (isOpen) {
      controls.start({
        top: "-100%",
        transition: {
          duration: 0.5,
        },
      });
      setIsOpen(false);
    } else {
      controls.start({
        top: "0rem",
        transition: {
          duration: 0.5,
        },
      });
      setIsOpen(true);
    }
  }, [isOpen, controls]);

  // Memoized desktop navigation links
  const navBarLinksElements = useMemo(() => 
    NavBarLinks?.map((item) => (
      <NavLap key={item.title} content={item} />
    ))
  , []);

  // Memoized mobile navigation links
  const mobileNavBarLinksElements = useMemo(() => 
    NavBarLinks?.map((item) => (
      <NavMobile
        key={item.title}
        content={item}
        toggle={toggle}
        isActive={activeMenu === item.title}
        setActiveMenu={setActiveMenu}
      />
    ))
  , [toggle, activeMenu]);

  // Split navigation links for desktop view
  const leftSideLinks = navBarLinksElements.slice(0, 4);
  const rightSideLinks = navBarLinksElements.slice(4);

  return (
    <>
      {/* Desktop Navigation Bar */}
      <motion.div 
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible && !isModalOpen ? 0 : -100,
          opacity: isVisible && !isModalOpen ? 1 : 0,
          scale: isVisible ? 0.95 : 0.95
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }}
        className="fixed left-0 right-0 mx-auto top-[1.5rem] w-fit max-w-[100%] z-[20000] backdrop-blur-lg bg-black/70 border border-white/20 shadow-xl rounded-[20px] h-fit px-4 md:flex hidden items-center justify-center flex-row gap-[1.2rem]"
      >
        {/* Left side navigation links */}
        <div className="flex items-center gap-[1rem]">
          {leftSideLinks}
        </div>
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src="/navlogo.png" alt="Vriksha School Logo" className="h-[6rem] w-auto" />
        </NavLink>
        
        {/* Right side navigation links */}
        <div className="flex items-center gap-[1.2rem]">
          {rightSideLinks}
        </div>
      </motion.div>

      {/* Mobile Navigation Toggle Button */}
      <motion.div 
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible && !isModalOpen ? 0 : -100,
          opacity: isVisible && !isModalOpen ? 1 : 0,
          scale: isVisible ? 1 : 0.95
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }}
        className="md:hidden fixed left-0 right-0 mx-auto top-[1.5rem] w-[95%] z-[200001] backdrop-blur-lg bg-black/70 border border-white/20 shadow-xl rounded-[20px] h-fit px-3 flex items-center justify-between"
      >
        <NavLink to="/" className="flex items-center">
          <img 
            src="/navlogo.png"
            alt="Vriksha School Logo" 
            className="h-20 w-auto py-2" 
            loading="eager"
            style={{ 
              objectFit: 'contain',
              maxWidth: '120px',
              minWidth: '60px',
              filter: 'brightness(1.02)'
            }}
            onError={(e) => {
              console.error('Logo failed to load');
              e.target.style.display = 'none';
            }}
          />
        </NavLink>
        <button onClick={toggle} className="p-2">
          {isOpen ? (
            <IoMdClose size={24} color="white" />
          ) : (
            <RxHamburgerMenu size={24} color={"white"} />
          )}
        </button>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <motion.div
        ref={navRef}
        initial={{ x: "100%" }}
        animate={{
          x: isOpen ? "0%" : "100%",
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-lg z-50 flex flex-col overflow-y-auto"
      >
        <div className="w-full h-[5rem]"></div>
        {mobileNavBarLinksElements}
      </motion.div>
    </>
  );
};

export default NavBar;
