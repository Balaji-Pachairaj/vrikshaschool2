import { useEffect, useRef } from 'react';

const AlumniBenefits = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const cards = [
    {
      title: "INTEGRATIONS",
      description: "SEAMLESSLY CONNECT WITH YOUR FAVORITE TOOLS FOR A UNIFIED WORKFLOW."
    },
    {
      title: "ANALYTICS", 
      description: "GAIN ACTIONABLE INSIGHTS WITH POWERFUL DATA ANALYSIS CAPABILITIES."
    },
    {
      title: "REPORTS",
      description: "GENERATE DETAILED REPORTS TO TRACK PERFORMANCE AND MAKE INFORMED DECISIONS."
    },
    {
      title: "ALL-IN-ONE",
      description: "ACCESS ALL ESSENTIAL GROWTH TOOLS IN ONE COMPREHENSIVE PLATFORM."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { top } = sectionRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - top) / window.innerHeight;

      cardsRef.current.forEach((card, index) => {
        if (!card || index === 0) return; // First card stays static

        const startPoint = index * 0.2; // Stagger the animation
        const progress = Math.max(0, Math.min(1, (scrollProgress - startPoint) * 2));
        
        if (card.style) {
          const translateY = (1 - progress) * 100;
          card.style.transform = `translateY(${translateY}vh)`;
          card.style.opacity = progress;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black">
      <div className="sticky top-1/4 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-16">
          Exclusive Alumni Benefits
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-zinc-900 p-6 rounded-lg shadow-lg transition-all duration-500"
              style={index === 0 ? {} : { 
                opacity: 0,
                transform: 'translateY(100vh)'
              }}
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-xl font-bold">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[100vh]" />
    </section>
  );
};

export default AlumniBenefits;