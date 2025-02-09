import React, { useRef, useEffect } from 'react';
import overview from "../../assets/Learning/Overview.png"
import academics from "../../assets/Learning/Academics.png"

const Card = ({ title, description, imageUrl, index, totalCards, className = "text-lg", imageOnRight = false }) => {
  const cardRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const inner = innerRef.current;
    const CARD_SPACING = 40;
    const SCALE_FACTOR = 0.08;
    
    const offsetTop = CARD_SPACING * index;
    const toScale = 1 - (totalCards - 1 - index) * SCALE_FACTOR;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const parentRect = card.parentElement.getBoundingClientRect();
          const parentHeight = parentRect.height;
          const scrollPercentage = Math.max(0, Math.min(1, 
            (parentRect.bottom - rect.top) / parentHeight
          ));
          
          const scale = 1 - (1 - toScale) * scrollPercentage;
          
          inner.style.transform = `scale(${scale})`;
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    card.style.top = `${offsetTop}px`;

    return () => window.removeEventListener('scroll', handleScroll);
  }, [index, totalCards]);

  return (
    <div ref={cardRef} className="sticky top-0 flex justify-center" style={{ paddingTop: `${20 + index * 20}px` }}>
      <div ref={innerRef} className="flex flex-col md:flex-row overflow-hidden bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] rounded-lg shadow-lg transform origin-top will-change-transform w-[1100px] h-[900px] md:h-[500px]">
        {!imageOnRight ? (
          <>
            <div className="w-full md:w-1/2 p-8">
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col">
              <h2 className="text-4xl font-semibold text-white mb-4">{title}</h2>
              <div className="overflow-y-auto pr-4 flex-1">
                <p className={`${className} text-gray-300 leading-relaxed`} dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="order-2 md:order-1 w-full md:w-1/2 p-8 flex flex-col">
              <h2 className="text-4xl font-semibold text-white mb-4">{title}</h2>
              <div className="overflow-y-auto pr-4 flex-1">
                <p className={`${className} text-gray-300 leading-relaxed`} dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
            <div className="order-1 md:order-2 w-full md:w-1/2 p-8">
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


const StackingCards = () => {
  return (
    <div className="bg-black min-h-screen py-20">
      <div className="w-full mx-auto relative">
        <Card 
          title="Overview"
          description="The School is affiliated to the Central Board of Secondary Education (CBSE).<br /><br />

We encourage independence in our students to develop individual interests and be passionate about what they wish to do.<br /><br />

Students are made to feel connected to everything that goes on in the world- through projects, curriculum related activities like excursions, workshops, lectures, seminars, films and national and international festivals and anniversaries."
          imageUrl={overview}
          index={0}
          totalCards={2}
        />
        <Card 
          title="Academics"
          description="The medium of instruction is English and the second language for all classes up to VIII is Tamil. Hindi/ French are a third choice from classes VI to VIII. Our students have shown excellent results in both our Class X Board examinations.<br /><br />

Physical Education and work experience are an essential part of the curriculum. Computer science is compulsory for classes IV to X. Plans are afoot to offer an additional foreign and modern Indian language.<br /><br />

In junior school the curriculum is based on the fundamentals – mathematics, science, language and reasoning – the basics of all learning. No formal examinations are held until class VI. However there is an assessment system based on weekly class assignments and projects."
          imageUrl={academics}
          index={1}
          totalCards={2}
          className="text-sm"
          imageOnRight={true}
        />
      </div>
    </div>
  );
};

export default StackingCards;
