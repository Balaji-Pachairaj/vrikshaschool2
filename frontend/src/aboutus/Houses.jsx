import styled from "styled-components";
import dolphin from "../assets/houses/Dolphin.png";
import lions from "../assets/houses/lions.png";
import hawks from "../assets/houses/hawks.png";

const HousesWrapper = styled.div`
  padding: 2rem 2rem;
  background-color: black;
  min-height: 100vh;
`;

const ContentSection = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem auto;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #7c2ae8, #00c4cc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 1.6;
  text-align: center;

  p {
    margin-bottom: 1rem;
  }
`;

const HousesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const HouseCard = styled.div`
  width: 300px;
  background: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const HouseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const HouseName = styled.h2`
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 24px;
  font-weight: bold;
`;

const Houses = () => {
  const houses = [
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

  return (
    <HousesWrapper>
      <ContentSection>
        <Title>About Our Houses</Title>
        <Description>
          <p>
            We have introduced House Points System for our students based on isolated achievement, sustained achievement and special achievement by our student. This system aims to encourage a real sense of pride and achievement for the children.
          </p>
          <p>
            The house points are counted and announced weekly during our Assembly every Friday and added to the house points. At the end of the year, once all house points are tallied, the House Champions will be announced in our Broadway (Annual Day).
          </p>
          <p>
            We have three houses namely Lion House, Dolphin House & Hawk House. The three houses are appointed with a Captain, Vice-Captain & Prefect. School Pupil Elections are conducted every year to elect the respective house leaders. A common school pupil leader is also elected from the prospective leaders.
          </p>
        </Description>
      </ContentSection>

      <HousesContainer>
        {houses.map((house, index) => (
          <HouseCard key={index}>
            <HouseImage src={house.image} alt={house.title} />
            <HouseName>{house.title}</HouseName>
          </HouseCard>
        ))}
      </HousesContainer>
    </HousesWrapper>
  );
};

export default Houses; 