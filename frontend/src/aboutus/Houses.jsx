// Houses.jsx
import { useEffect, useRef } from 'react';

const CardStack = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  const cards = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      title: "BLUE HOUSE",
    },
    {
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065&auto=format&fit=crop",
      title: "GREEN HOUSE",
    },
    {
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop",
      title: "RED HOUSE",
    },
    {
      image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=2043&auto=format&fit=crop",
      title: "YELLOW HOUSE",
    }
  ];

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, cards.length);

    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        if (!card || index === cardsRef.current.length - 1) return;

        const rect = card.getBoundingClientRect();
        const nextCard = cardsRef.current[index + 1];
        const nextRect = nextCard?.getBoundingClientRect();

        if (!nextRect) return;

        const distanceToNext = nextRect.top - rect.top;
        const maxDistance = window.innerHeight * 0.8;
        const percentage = Math.max(0, Math.min(1, distanceToNext / maxDistance));
        
        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const scale = 1 - ((1 - toScale) * (1 - percentage));
        const brightness = 1 - (0.4 * (1 - percentage));
        
        if (card.style) {
          card.style.transform = `scale(${scale})`;
          card.style.filter = `brightness(${brightness})`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [cards.length]);

  return (
    <div className="min-h-screen bg-black">
      <div className="h-[40vh]" />
      
      <div 
        ref={containerRef} 
        className="max-w-[1100px] mx-auto"
        style={{
          display: 'grid',
          gap: '40px 0',
          gridTemplateRows: `repeat(${cards.length}, auto)`
        }}
      >
        {cards.map((card, index) => (
          <div 
            key={index}
            className="sticky top-0 rotate-3"
            style={{ paddingTop: `${20 + index * 20}px` }}
          >
            <div
              ref={el => cardsRef.current[index] = el}
              className="rounded-xl overflow-hidden shadow-lg transform-gpu will-change-transform relative"
              style={{ transformOrigin: 'center top' }}
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay covering the entire card */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h1 className="text-6xl font-bold text-white text-center tracking-wider">
                    {card.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[90vh]" />
    </div>
  );
};

export default CardStack;
