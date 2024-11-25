import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

import logo from "../assets/footer/vrikshalogo.webp";
import juniorlogo from "../assets/footer/junior.webp";
import { NavLink } from "react-router-dom";
import { NavBarLinks } from "./NavBar";

const FooterSection = () => {
  return (
    <>
      <div
        className=" w-full h-fit pt-[10vh] pb-[10vh] bg-black flex flex-row justify-center"
        id={"footer"}
      >
        {/* ------------------------------------- */}
        <div className=" w-[85vw] h-fit flex flex-col md:gap-[1rem] gap-[2rem] ">
          {/* ------------------------------------- */}
          <div className="w-full h-fit flex md:flex-row flex-wrap flex-col gap-y-[1.5rem] justify-between">
            {/* ------------------------------------- */}
            <div className=" flex flex-col gap-[2rem]">
              <div className=" w-full h-fit flex md:flex-row gap-[2rem] flex-col">
                <img className=" w-fit h-[150px] object-contain" src={logo} />
                <img
                  className=" w-fit h-[80px] object-contain"
                  src={juniorlogo}
                />
              </div>

              <h1 className=" text-[14px] font-inter text-[#eee]">
                Kozhikaalnatham road Tiruchengode,
                <br />
                Tamilnadu, India , 637211.  
              </h1>
            </div>
            {/* ------------------------ */}
            <div className=" w-fit h-fit flex md:flex-row flex-col gap-[3rem]">
              <div className=" w-fit h-fit flex flex-col items-start gap-[1.5rem]">
                <h1 className=" text-[18px]  font-inter font-bold text-[#ffd82b]">
                  Quick Links
                </h1>
                <p className=" text-[14px]  font-inter text-white">
                  Contact Us
                </p>
                <p className=" text-[14px]  font-inter text-white">Faq's</p>
              </div>
              <div className=" w-fit h-fit flex flex-col items-start gap-[1.5rem]">
                <h1 className=" text-[18px]  font-inter font-bold text-[#ffd82b]">
                  Visit Other Pages
                </h1>
                {NavBarLinks?.map((item) => {
                  return (
                    <NavLink
                      to={item?.to}
                      className={({ isActive }) => {
                        return `text-[14px] ${
                          isActive ? " border-b-2 " : ""
                        } hover:-translate-y-[2px] duration-100 uppercase  font-inter text-white`;
                      }}
                    >
                      {item?.title}
                    </NavLink>
                  );
                })}
              </div>
              <div className=" w-fit h-fit flex flex-col items-start gap-[1.5rem]">
                <h1 className=" text-[18px] font-bold font-inter text-[#ffd82b]">
                  Follows us
                </h1>
                <div className="flex flex-row gap-[1rem]">
                  <button className=" rounded-[50%] p-[0.4rem] bg-white text-[14px] font-inter text-white">
                    <FaFacebookF size={18} color={"black"} />
                  </button>
                  <button className=" rounded-[50%] p-[0.4rem] bg-white text-[14px] font-inter text-white">
                    <FaInstagram size={22} color={"black"} />
                  </button>
                  <button className=" rounded-[50%] p-[0.4rem] bg-white text-[14px] font-inter text-white">
                    <FaTwitter size={22} color={"black"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------ */}
          <div className=" w-full h-[1px] bg-white"></div>
          {/* ------------------------ */}
          {/* ------------------------ */}
          <div className=" w-full h-fit flex flex-row flex-wrap justify-between    gap-y-[1.5rem]">
            <h3 className="  md:text-[16px] text-[12px] font-inter text-[#eee] flex flex-row items-center gap-[0.5rem]">
              <MdOutlineEmail />
              info@vrikshaglobalschool.com
            </h3>

            <div className=" flex gap-[1rem] ">
              <h3 className="  md:text-[16px] text-[12px] font-inter text-[#eee] flex flex-row items-center gap-[0.5rem]">
                <FaPhoneAlt />
                +91-7373733433
              </h3>
              {/* <h3 className="  md:text-[16px] text-[12px] font-inter text-[#eee]">
                Built By Rick Mummery
              </h3> */}
            </div>
          </div>
          {/* ------------------------ */}
        </div>
      </div>
    </>
  );
};

export default FooterSection;
