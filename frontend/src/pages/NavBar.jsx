import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, useAnimation } from "framer-motion";

export const NavBarLinks = [
  {
    title: "Home",
    to: "/?section=start",
    sections: [
      { title: "Hero", to: "/?section=hero" },
      { title: "Our vision", to: "/?section=visionandmission" },
      { title: "our Milestone", to: "/?section=milestone" },
      { title: "category", to: "/?section=category" },
      { title: "the advantages", to: "/?section=advantages" },
      { title: "our events", to: "/?section=events" },
      { title: "the testimonals", to: "/?section=testimonals" },
      { title: "our partners", to: "/?section=partners" },
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
      { title: "our partners", to: "/aboutus?section=partners" },
      // { title: "cta", to: "/aboutus?section=cta" },
    ],
  },
  {
    title: "Learning",
    to: "/learning?section=start",
    sections: [
      { title: "overview", to: "/learning?section=overview" },
      { title: "our facilities", to: "/learning?section=facilities" },
      {
        title: "Primary, Seconday & High School",
        to: "/learning?section=primaryschool",
      },
      { title: "LEAD Curriculum", to: "/learning?section=lead" },
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
      { title: "Music & Dance", to: "/curricular?section=outdoor" },
      { title: "creative arts", to: "/creative?section=creative" },
    ],
  },
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
    title: "sport academy",
    to: "/sportacademy?section=start",
    sections: [
      { title: "hero", to: "/sportacademy?section=hero" },
      { title: "aboutus", to: "/sportacademy?section=aboutus" },
      { title: "program offer", to: "/sportacademy?section=programoffer" },
      { title: "training", to: "/sportacademy?section=training" },
      { title: "success", to: "/sportacademy?section=success" },
      { title: "story", to: "/sportacademy?section=story" },
      { title: "membership", to: "/sportacademy?section=membership" },
      { title: "faq's", to: "/sportacademy?section=faqs" },
    ],
  },
  {
    title: "Alum",
    to: "/alumni?section=start",
    sections: [
      { title: "hero", to: "/alumni?section=hero" },
      { title: "overview", to: "/alumni?section=overview" },
      { title: "Opportunities", to: "/alumni?section=network" },
      { title: "Volunteer", to: "/alumni?section=volunteer" },
      { title: "Noteable alumni", to: "/alumni?section=noteable" },
      { title: "Connect", to: "/alumni?section=connect" },
    ],
  },
  {
    title: "Marathon",
    to: "/marathon?section=start",
    sections: [
      { title: "hero", to: "/marathon?section=hero" },
      { title: "about", to: "/marathon?section=about" },
      { title: "categories", to: "/marathon?section=categories" },
      { title: "time", to: "/marathon?section=time" },
      { title: "sponsor", to: "/marathon?section=sponsor" },
      { title: "goodies", to: "/marathon?section=goodies" },
      { title: "registration", to: "/marathon?section=registration" },
    ],
  },
  {
    title: "contact us",
    to: "/contact?section=start",
    sections: [],
  },
];

const NavLap = ({ content = {} }) => {
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
        } text-white text-[12px] font-[600] font-inter h-fit w-fit ps-[0.25rem] pe-[0.25rem] pt-[0.5rem] pb-[0.5rem] text-nowrap relative`;
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
};
const NavMobile = ({ content = {}, toggle = () => {}, isActive, setActiveMenu }) => {
  const controls = useAnimation();
  const navigate = useNavigate();

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
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const controls = useAnimation();
  const navRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        window.cancelAnimationFrame(scrollTimeout.current);
      }

      scrollTimeout.current = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY.current;
        
        // Only trigger animation if scroll is significant
        if (Math.abs(scrollDelta) < 10) return;
        
        if (scrollDelta < 0 || currentScrollY < 50) { // Scrolling up or near top
          setIsVisible(true);
        } else if (scrollDelta > 0 && currentScrollY > 100) { // Scrolling down and past threshold
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
  }, []);

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      try {
        const targetElement = document.getElementById(section);
        if (targetElement) {
          const targetPosition = targetElement?.offsetTop;

          // Scroll to the target section
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      } catch {}
    }
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, controls]);

  const toggle = () => {
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
  };

  return (
    <>
      <motion.div 
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.95
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }}
        className="fixed left-0 right-0 mx-auto top-[1.5rem] w-fit max-w-[90%] z-[20000] backdrop-blur-lg bg-black/70 border border-white/20 shadow-xl rounded-[20px] h-fit px-6 md:flex hidden items-center justify-center flex-row gap-[1.5rem]"
      >
        {NavBarLinks?.map((item) => {
          return <NavLap key={item.title} content={item} />;
        })}
      </motion.div>

      <motion.div 
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.95
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }}
        className="md:hidden fixed left-0 right-0 mx-auto top-[1.5rem] w-fit max-w-[90%] z-[200001] backdrop-blur-lg bg-black/70 border border-white/20 shadow-xl rounded-[20px] h-fit px-6 flex items-center justify-center flex-row gap-[1.5rem]"
      >
        <button onClick={toggle} className="p-[0.5rem]">
          {isOpen ? (
            <IoMdClose size={30} color="white" />
          ) : (
            <RxHamburgerMenu size={30} color={"white"} />
          )}
        </button>
      </motion.div>

      <motion.div
        ref={navRef}
        initial={{ y: "-100%" }}
        animate={isOpen ? { 
          y: 0,
          opacity: 1,
          scale: 1
        } : { 
          y: "-100%",
          opacity: 0,
          scale: 0.98
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }}
        className="w-full max-h-[80vh] overflow-y-auto z-[20000] fixed top-0 pb-[2vh] backdrop-blur-lg bg-black/70 border border-white/20 shadow-xl flex flex-col gap-[0.5rem] md:hidden"
      >
        <div className=" w-full h-[5rem]"></div>

        {NavBarLinks?.map((item) => {
          return (
            <NavMobile
              key={item.title}
              content={item}
              toggle={toggle}
              isActive={activeMenu === item.title}
              setActiveMenu={setActiveMenu}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default NavBar;
