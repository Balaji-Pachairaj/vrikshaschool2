import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import why1 from "../assets/whyus/2.png";
import why2 from "../assets/whyus/3.png";
import why3 from "../assets/whyus/4.png";
import why4 from "../assets/whyus/5.png";
import why5 from "../assets/whyus/6.png";
import why6 from "../assets/whyus/7.png";
import why7 from "../assets/whyus/8.png";
import why8 from "../assets/whyus/9.png";

// Set these values to match your design
const CardWidth = 500; // width of each card
const CardMargin = 20; // right margin between cards
const TotalCards = 8;  // total number of cards

const EventsWrapper = styled.div`
  height: 300vh;
  position: relative;
`;

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: hidden;
`;

const EventsText = styled.h1`
  font-size: 20vw;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.8;
  white-space: nowrap;
  transform: scaleY(1.2);
  position: absolute;
`;

const ImageCardsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 100%;  /* Start with the container’s left edge at the viewport’s right edge */
  transform: translateY(-50%);
  transition: transform 0.1s ease-out;
`;

const ImageCard = styled.div`
  width: ${CardWidth}px;
  height: 400px;
  margin-right: ${CardMargin}px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const Events = () => {
  const containerRef = useRef(null);
  const imageUrls = [why1, why2, why3, why4, why5, why6, why7, why8];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const wrapper = document.getElementById("events-wrapper");
      const wrapperRect = wrapper.getBoundingClientRect();
      const startScroll = wrapperRect.top + window.scrollY;
      const endScroll = startScroll + wrapperRect.height - window.innerHeight;

      const progress = Math.min(1, Math.max(0, (window.scrollY - startScroll) / (endScroll - startScroll)));
      
      const totalCardsWidth = TotalCards * (CardWidth + CardMargin) - CardMargin;
      
      const translateX = -progress * totalCardsWidth;
      
      containerRef.current.style.transform = `translateY(-50%) translateX(${translateX}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <EventsWrapper id="events-wrapper">
      <EventsContainer>
        <EventsText>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
            Why Us?
          </span>
        </EventsText>
        <ImageCardsContainer ref={containerRef}>
          {imageUrls.map((image, index) => (
            <ImageCard key={index} imageUrl={image} />
          ))}
        </ImageCardsContainer>
      </EventsContainer>
    </EventsWrapper>
  );
};

export default Events;
