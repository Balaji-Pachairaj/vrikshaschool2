import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import milestone1 from "../assets/milestones/1.png";
import milestone2 from "../assets/milestones/2.png";
import milestone3 from "../assets/milestones/3.png";
import milestone4 from "../assets/milestones/4.png";
import milestone5 from "../assets/milestones/5.png";

const src1 = milestone1;
const src2 = milestone2;
const src3 = milestone3;
const src4 = milestone4;
const src5 = milestone5;

const MobileSection = styled.section`
  width: 100%;
  background-color: black;
  color: white;
  overflow-x: hidden;
  z-index: 20;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  z-index: 20;
`;

const ImageContainer = styled.div`
  width: 90%;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 20;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Figure = styled.figure`
  width: 100%;
  margin: 0;
  z-index: 20;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 0.375rem;
  z-index: 20;
`;

const MilestoneText = styled.h2`
  font-size: 10vw;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.8;
  text-align: center;
  margin-bottom: 2rem;
  z-index: 20;
`;

const MobileMillestones = () => {
  const images = [src1, src2, src3, src4, src5];
  const containerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    containerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      containerRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <MobileSection>
      <ScrollContainer>
        <MilestoneText>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
            Milestones
          </span>
          
        </MilestoneText>
        {images.map((image, index) => (
          <ImageContainer
            key={index}
            ref={(el) => (containerRefs.current[index] = el)}
          >
            <Figure>
              <Image src={image} alt={`Milestone ${index + 1}`} />
            </Figure>
          </ImageContainer>
        ))}
      </ScrollContainer>
    </MobileSection>
  );
};

export default MobileMillestones;
