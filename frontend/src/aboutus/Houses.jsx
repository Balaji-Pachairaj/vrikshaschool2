import { useEffect, useRef } from 'react';
import styled from "styled-components";
import dolphin from "../assets/houses/Dolphin.png";
import lions from "../assets/houses/lions.png";
import hawks from "../assets/houses/hawks.png";

const CardWidth = 800;
const CardMargin = 20;

const HousesWrapper = styled.div`
  height: 300vh;
  position: relative;
`;

const HousesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 20;
`;

const ImageCardsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  transition: transform 0.1s ease-out;
  z-index: 30;
`;

const ImageCard = styled.div`
  width: 600px;
  height: 400px;
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  perspective: 1000px;
  cursor: pointer;

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  &:hover .card-inner {
    transform: rotateX(180deg);
  }

  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
  }

  .card-front {
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
  }

  .card-back {
    background: #1a1a1a;
    transform: rotateX(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`;

const BackContent = styled.div`
  padding: 20px;
  text-align: left;
  color: white;
  font-size: 14px;
  line-height: 1.6;
  overflow-y: auto;

  h1 {
    text-align: center;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 12px;
  }
`;

const Houses = () => {
  const houses = [
    {
      image: null,
      isTitle: true,
      title: "About Our Houses"
    },
    {
      image: dolphin,
      title: "Dolphin House"
    },
    {
      image: lions,
      title: "Lions House"
    },
    {
      image: hawks,
      title: "Hawks House"
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const containerElement = containerRef.current;
      if (containerElement) {
        const housesWrapper = document.getElementById("houses-wrapper");
        const wrapperRect = housesWrapper.getBoundingClientRect();
        const wrapperStart = wrapperRect.top + window.scrollY;
        const wrapperEnd = wrapperStart + wrapperRect.height - window.innerHeight;

        const scrollProgress = (scrollPosition - wrapperStart) / (wrapperEnd - wrapperStart);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        const totalCardsWidth = houses.length * (CardWidth + CardMargin) - CardMargin;
        const containerWidth = window.innerWidth;
        const scrollDistance = totalCardsWidth - containerWidth;
        const translateX = -clampedProgress * scrollDistance;

        containerElement.style.transform = `translateY(-50%) translateX(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [houses.length]);

  return (
    <HousesWrapper id="houses-wrapper">
      <HousesContainer>
        <ImageCardsContainer ref={containerRef}>
          {houses.map((house, index) => (
            <ImageCard 
              key={index} 
              imageUrl={house.image}
            >
              <div className="card-inner">
                <div className="card-front" style={house.isTitle ? { 
                  background: '#1a1a1a'
                } : {}}>
                  {house.isTitle ? (
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <h1 className="text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
                        {house.title}
                      </h1>
                    </div>
                  ) : (
                    <div className="w-full h-full"></div>
                  )}
                </div>
                <div className="card-back">
                  {house.isTitle ? (
                    <BackContent>
                      <p>
                        We have introduced House Points System for our students based on isolated achievement, sustained achievement and special achievement by our student. This system aims to encourage a real sense of pride and achievement for the children.
                      </p>
                      <p>
                        The house points are counted and announced weekly during our Assembly every Friday and added to the house points. At the end of the year, once all house points are tallied, the House Champions will be announced in our Broadway (Annual Day).
                      </p>
                      <p>
                        We have three houses namely Lion House, Dolphin House & Hawk House. The three houses are appointed with a Captain, Vice-Captain & Prefect. School Pupil Elections are conducted every year to elect the respective house leaders. A common school pupil leader is also elected from the prospective leaders.
                      </p>
                    </BackContent>
                  ) : (
                    <h1 className="text-[32px] font-bold text-white">
                      {house.title}
                    </h1>
                  )}
                </div>
              </div>
            </ImageCard>
          ))}
        </ImageCardsContainer>
      </HousesContainer>
    </HousesWrapper>
  );
};

export default Houses; 