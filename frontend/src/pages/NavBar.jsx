import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, useAnimation } from "framer-motion";

const NavBar_links = [
  { title: "Home", to: "/#hero" },
  { title: "Admission", to: "/admission" },
  { title: "Learning", to: "/learning" },
  { title: "Discover", to: "/discover" },
  { title: "Co-curriculam", to: "/curricular" },
  { title: "Sport Academy", to: "/sportacademy" },
  { title: "About Us", to: "/aboutus" },
  { title: "Contact", to: "/contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  return (
    <>
      <div className=" fixed top-[1.5rem] max-w-[90%]  z-[20000] left-[50%] -translate-x-1/2 bg-gray-800 bg-opacity-80 shadow-xl w-fit rounded-[20px] h-fit  ps-[1rem] pe-[1rem] md:flex  hidden flex-row gap-[1.5rem]">
        {NavBar_links?.map((item) => {
          return (
            <NavLink
              to={item?.to}
              className={({ isActive }) => {
                return ` ${
                  isActive
                    ? "text-white text-[14px] border-b-2 border-gray-500"
                    : "text-[#ffffffb3] text-[14px] "
                }  font-[500] font-inter h-fit w-fit ps-[0.25rem] pe-[0.25rem] pt-[0.5rem] pb-[0.5rem] text-nowrap `;
              }}
            >
              {item?.title}
            </NavLink>
          );
        })}
      </div>

      <div className=" md:hidden fixed z-[200001] top-[1.5rem] left-[50%] -translate-x-1/2 bg-gray-800 bg-opacity-80 shadow-xl w-fit rounded-[20px] h-fit  ps-[1rem] pe-[1rem] flex flex-row gap-[1.5rem]">
        <button
          onClick={() => {
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
                top: "5rem",
                transition: {
                  duration: 1,
                },
              });
              setIsOpen(true);
            }
          }}
          className=" p-[0.5rem]"
        >
          {isOpen ? (
            <IoMdClose size={30} color="white" />
          ) : (
            <RxHamburgerMenu size={30} color={"white"} />
          )}
        </button>
      </div>

      <motion.div
        animate={controls}
        className="w-full h-[40vh] z-[20000] fixed top-[-100%] pb-[2vh] bg-black shadow-xl flex flex-col gap-[0.5rem] md:hidden "
      >
        {NavBar_links?.map((item) => {
          return (
            <NavLink
              to={item?.to}
              className=" w-full h-[40px] flex flex-col justify-center hover:ps-[1rem] duration-500 "
            >
              <h1 className="text-[white] text-[12px] font-inter ps-[2rem]">
                {item?.title}
              </h1>
            </NavLink>
          );
        })}
      </motion.div>
    </>
  );
};

export default NavBar;
