import React from "react";
import img1 from "../assets/home/1.JPG";
import img2 from "../assets/home/2.JPG";
import img3 from "../assets/home/3.JPG";
import img4 from "../assets/home/4.JPG";

const accordionData = [
  {
    title: "Learning",
    image: img1,
  },
  {
    title: "Co & Extra Curiculuars",
    image: img2,
  },
  {
    title: "Facilities",
    image: img3,
  },
  {
    title: "Admissions",
    image: img4,
  },
];

const AccordionItem = ({ title, image }) => {
  return (
    <div className="group relative h-20 sm:h-24 md:h-28 bg-green-300 hover:h-40 sm:hover:h-48 md:hover:h-56 transition-all duration-500 ease-in-out overflow-hidden rounded-lg">
      <div className="absolute inset-0 z-10">
        <div className="p-4 sm:p-6 text-xl sm:text-2xl md:text-3xl font-bold group-hover:text-white transition-colors duration-500 text-left flex items-center h-full">
          {title}
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
      <h2 className="text-5xl sm:text-1xl md:text-7xl font-bold mb-6 md:mb sm:mb-6 text-white text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
          Categories
        </span>
      </h2>
      <div className="space-y-2 sm:space-y-4">
        {accordionData.map((item, index) => (
          <AccordionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
