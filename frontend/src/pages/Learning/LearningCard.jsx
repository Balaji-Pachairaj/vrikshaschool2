import React, { useEffect } from "react";
import { gsap } from "gsap";

const OurExpertise = () => {
  useEffect(() => {
    gsap.fromTo(
      ".expertise-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
    );
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Our Expertise
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We deliver innovative solutions that drive your business forward,
          ensuring measurable success in a constantly evolving landscape.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Strategy", description: "Crafting tailored strategies for success." },
            { title: "Design", description: "Delivering stunning and user-friendly designs." },
            { title: "Development", description: "Building scalable and robust applications." },
            { title: "Analytics", description: "Transforming data into actionable insights." },
            { title: "Marketing", description: "Driving growth with effective campaigns." },
            { title: "Support", description: "Ensuring seamless operations 24/7." },
          ].map((expertise, index) => (
            <div
              key={index}
              className="expertise-item bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {expertise.title}
              </h3>
              <p className="text-gray-600">{expertise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
