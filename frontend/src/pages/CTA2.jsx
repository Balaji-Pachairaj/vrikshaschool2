import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import img1 from "../assets/CTA/img1.jpg";
import img2 from "../assets/CTA/img2.jpg";

const Section = styled.section`
  background-color: #000000;
  color: #ffffff;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;

  @media (max-width: 768px) {
    order: -1;
    left: -2rem;
    margin-bottom: 2rem;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  position: absolute;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 180px;
    height: 220px;
  }

  &:first-child {
    left: 90px;
    top: 5px;
  }

  &:last-child {
    right: 0;
    top: 100px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    line-height: 1.1;

    @media (max-width: 768px) {
      font-size: 2.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #cccccc;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #ffffff;
    color: #1a1a1a;
  }

  svg {
    width: 20px;
    height: 20px;
  }
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
    background: #ffffff;
    color: #000000;
    transform: scale(1.1);
  }
`;

const CTA2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    timeline: "",
    budget: "",
    description: ""
  });
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (isModalOpen) {
      scrollPosition.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.position = 'relative';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      window.scrollTo(0, scrollPosition.current);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
    };
  }, [isModalOpen]);

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

  return (
    <Section>
      <Container>
        <ImageContainer>
          <Image 
            src={img1}
            alt="Fashion model in dynamic pose" 
          />
          <Image 
            src={img2}
            alt="Fashion model in elegant hat" 
          />
        </ImageContainer>
        <Content>
          <h1>Shaping Future Leaders Starts with You</h1>
          <p>Join Our School's Exceptional Teaching Team!</p>
          <Button onClick={() => setIsModalOpen(true)}>
            JOIN NOW
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </Content>
      </Container>

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
    </Section>
  );
};

export default CTA2;