import { useEffect, useRef, useState } from 'react';
import dolphin from "../assets/houses/dolphin.png"
import lions from "../assets/houses/lions.png"
import hawks from "../assets/houses/hawks.png"

const CardStack = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const [isStacked, setIsStacked] = useState(false);

  const cards = [
    {
      image: dolphin,
      title: "-Dolphin House-",
    },
    {
      image: lions,
      title: "-Lions House-",
    },
    {
      image: hawks,
      title: "-Hawks House-",
    },
  ];

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, cards.length);

    const handleScroll = () => {
      let allCardsStacked = true;

      cardsRef.current.forEach((card, index) => {
        if (!card || index === cardsRef.current.length - 1) return;

        const rect = card.getBoundingClientRect();
        const nextCard = cardsRef.current[index + 1];
        const nextRect = nextCard?.getBoundingClientRect();

        if (!nextRect) return;

        const distanceToNext = nextRect.top - rect.top;
        const maxDistance = window.innerHeight * 0.8;
        const percentage = Math.max(0, Math.min(1, distanceToNext / maxDistance));
        
        // Check if this card is stacked
        if (distanceToNext > 20) {
          allCardsStacked = false;
        }

        // Calculate brightness
        const brightness = 1 - (0.4 * (1 - percentage));
        
        if (card.style) {
          card.style.filter = `brightness(${brightness})`;
        }
      });

      setIsStacked(allCardsStacked);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [cards.length]);

  return (
    <div className="min-h-screen bg-black">
      <div/>
      
      <div 
        ref={containerRef} 
        className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          display: 'grid',
          gap: '0',
          gridTemplateRows: `repeat(${cards.length}, auto)`
        }}
      >
        {cards.map((card, index) => (
          <div 
            key={index}
            className={`sticky top-0 transition-transform duration-700 ease-in-out ${
              isStacked ? 'rotate-0' : 'rotate-2 sm:rotate-3'
            }`}
            style={{ 
              paddingTop: `${index * 2}px`,
              top: '-5vh'
            }}
          >
            <div
              ref={el => cardsRef.current[index] = el}
              className="rounded-xl mt-8 sm:mt-16 lg:mt-32 overflow-hidden shadow-lg transform-gpu will-change-transform relative"
              style={{ transformOrigin: 'center top' }}
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-center tracking-wider">
                    {card.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[30vh] sm:h-[40vh]" />
    </div>
  );
};

export default CardStack; 