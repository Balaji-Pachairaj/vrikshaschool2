import React, { useEffect, useState } from "react";
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
    title: "curricular",
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
    sections: [],
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
          isActive ? "border-b-2" : ""
        } text-[#ffffffb3] text-[14px] font-[500] font-inter h-fit w-fit ps-[0.25rem] pe-[0.25rem] pt-[0.5rem] pb-[0.5rem] text-nowrap relative`;
      }}
    >
      {content?.title}
      {content?.sections?.length > 0 && (
        <div
          className={`w-[200px] h-fit pb-[2rem] ${
            onHover ? "opacity-100 flex " : "opacity-0 hidden"
          } gap-[0.5rem] pt-[2rem] left-[-20px] bg-black border-s-[1px] border-e-[1px]  flex flex-col absolute top-[101%] duration-500 `}
        >
          {content?.sections?.map((item) => {
            return (
              <NavLink
                to={item?.to}
                smooth
                className=" ps-[1rem] pe-[1rem] uppercase text-wrap  flex flex-col justify-center min-h-[30px] h-fit text-[#ffffffb3] text-[12px] font-[500] font-inter "
              >
                <p
                  className={`p-[0.5rem] w-fit h-fit rounded-[8px]  hover:bg-gray-800  duration-300`}
                >
                  {item?.title}
                </p>
              </NavLink>
            );
          })}
        </div>
      )}
    </NavLink>
  );
};
const NavMobile = ({ content = {}, toggle = () => {} }) => {
  const [onHover, setOnHover] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();

  const open = () => {
    setOnHover(true);
    controls.start({
      height: content?.sections?.length * 25 + "px",
      transition: {
        duration: 0.5,
      },
    });
  };
  const close = () => {
    setOnHover(false);
    controls.start({
      height: "0.5px",
      transition: {
        duration: 0.1,
      },
    });
  };

  return (
    <>
      <button
        onMouseEnter={() => {
          // open();
        }}
        onClick={() => {
          if (!onHover) {
            open();
          } else {
            close();
          }

          if (!content?.sections?.length) {
            navigate(content?.to);
          }
        }}
        className=" w-full h-[40px] flex flex-row items-center  duration-500 uppercase  gap-[0.3rem] hover:bg-gray-900 flex-shrink-0 "
      >
        <h1 className="text-[white] text-[12px] font-inter ps-[2rem] flex flex-row gap-[0.5rem] items-center">
          {content?.title}

          <TbTriangleInvertedFilled size={10} color={"white"} />
        </h1>
      </button>
      <motion.div
        initial={{ height: "0px" }}
        animate={controls}
        onMouseEnter={() => {
          open();
        }}
        onMouseLeave={() => {}}
        onClick={() => {
          close();
          toggle();
        }}
        className={` ${
          onHover ? "" : ""
        }  w-full  flex flex-col gap-[0.5rem] flex-shrink-0  overflow-hidden`}
      >
        {content?.sections?.map((item) => {
          return (
            <NavLink
              to={item?.to}
              className="ps-[4rem]   text-[12px] text-white font-poppins uppercase hover:ps-[4.5rem] duration-300"
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
  const controls = useAnimation();

  const [searchParams] = useSearchParams();

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

  const toggle = () => {
    if (isOpen) {
      controls.start({
        top: "-100%",
        transition: {
          duration: 1,
        },
      });
      setIsOpen(false);
    } else {
      controls.start({
        top: "0rem",
        transition: {
          duration: 1,
        },
      });
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className=" fixed top-[1.5rem] max-w-[90%]  z-[20000] left-[50%] -translate-x-1/2 bg-gray-800 bg-opacity-80 shadow-xl w-fit rounded-[20px] h-fit  ps-[1rem] pe-[1rem] md:flex  hidden flex-row gap-[1.5rem]">
        {NavBarLinks?.map((item) => {
          return <NavLap content={item} />;
        })}
      </div>

      <div className=" md:hidden fixed z-[200001] top-[1.5rem] left-[50%] -translate-x-1/2 bg-gray-800 bg-opacity-80 shadow-xl w-fit rounded-[20px] h-fit  ps-[1rem] pe-[1rem] flex flex-row gap-[1.5rem]">
        <button onClick={toggle} className=" p-[0.5rem]">
          {isOpen ? (
            <IoMdClose size={30} color="white" />
          ) : (
            <RxHamburgerMenu size={30} color={"white"} />
          )}
        </button>
      </div>

      <motion.div
        animate={controls}
        className="w-full max-h-[80vh] overflow-y-auto z-[20000] fixed top-[-100%] pb-[2vh] bg-black shadow-xl flex flex-col gap-[0.5rem] md:hidden "
      >
        <div className=" w-full h-[5rem]"></div>

        {NavBarLinks?.map((item) => {
          return <NavMobile content={item} toggle={toggle} />;
        })}
      </motion.div>
    </>
  );
};

export default NavBar;
