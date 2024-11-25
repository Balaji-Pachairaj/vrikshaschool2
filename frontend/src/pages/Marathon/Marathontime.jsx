import React from 'react';
import img1 from "../../assets/marathon/11.png";
import img2 from "../../assets/marathon/12.png";
import img3 from "../../assets/marathon/13.png";

const Marathontime = () => {
  const events = [
    {
      name: "Date",
      content: "26th January 2025",
      image: img1,
      color: "bg-blue-600/80",
    },
    {
      name: "Day",
      content: "Sunday",
      image: img2,
      color: "bg-red-600/80",
    },
    {
      name: "Location",
      content: "Vriksha Sports Academy",
      image: img3,
      color: "bg-pink-600/80",
    }
  ];

  return (
    <section className="bg-black min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {events.map((event, index) => (
          <div 
            key={index}
            className={`group relative h-[480px] overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105
              ${index === 1 ? 'md:-translate-y-12' : ''}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${event.image})` }}
            />
            
            <div className={`absolute inset-0 ${event.color} transition-opacity duration-300 group-hover:opacity-90`} />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
              <h2 className="text-4xl font-bold mb-6">{event.name}</h2>
              <p className="text-3xl font-semibold">{event.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marathontime;

