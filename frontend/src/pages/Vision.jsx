import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import logo from "../assets/vision.gif";

const VisionWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  padding-bottom: 10rem;
  margin-top: 20vh;
`;

const VisionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 350px;
    height: auto;
  }
`;

const VisionParagraph = styled.p`
  flex: 1;
  font-size: 1.2rem;
  color: white;
  line-height: 1.8;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const Vision = () => {
  return (
    <VisionWrapper id="vision-wrapper">
      <VisionContainer>
        <LogoContainer>
          <img src={logo} alt="Vision Logo" />
        </LogoContainer>
        <VisionParagraph>
          Every kid is unique—and so is their path to success. Vriksha Global School redefines education by empowering every child to discover their unique potential. We believe in learning beyond classrooms, embracing experiences that foster creativity, critical thinking, and real-world skills. Our holistic approach ensures that sports, arts, and other creative pursuits are valued equally alongside STEM disciplines, allowing students to explore diverse careers and passions. By nurturing each child's individuality, we create an environment where every learner can thrive, follow their dreams, and contribute meaningfully to the world.
        </VisionParagraph>
      </VisionContainer>
    </VisionWrapper>
  );
};

export default Vision;
