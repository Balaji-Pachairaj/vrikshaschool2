import React, { useState } from "react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    timeline: "",
    budget: "",
    description: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="w-full h-[0.1px]" id="start"></div>
      <NavBar />
      <div className="w-full min-h-screen bg-black" id="contact">
        <div className="w-full md:h-[40vh] h-[25vh] flex flex-col md:justify-center justify-end items-center">
          <h1 className="text-[8vw] font-kanit uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
            Contact Us
          </h1>
        </div>

        <div className="w-full h-fit flex flex-row justify-center pb-20">
          <form onSubmit={handleSubmit} className="md:w-[60vw] w-[90%] h-fit flex flex-col gap-[2rem] shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] backdrop-blur-[12px] border border-white/20 md:p-[3rem] p-[1.5rem] rounded-[20px] bg-black/25">
            <div className="w-full h-fit flex md:flex-row flex-col justify-between gap-[1.5rem]">
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
            </div>

            <div className="w-full h-fit flex md:flex-row flex-col justify-between gap-[1.5rem]">
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  Timeline
                </label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g., 2 weeks"
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  Budget
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., ₹5,000"
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
            </div>

            <div className="w-full h-fit">
              <label className="text-[14px] text-white font-kanit uppercase tracking-wider block mb-[0.5rem]">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                className="w-full h-[200px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit p-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full h-[52px] bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] text-white font-kanit font-[500] rounded-lg transition-all duration-300 hover:opacity-90 active:scale-[0.99] text-[16px] uppercase tracking-wider"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ContactUs;
