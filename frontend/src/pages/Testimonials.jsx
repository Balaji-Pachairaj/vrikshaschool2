import React from "react";
import test1 from "../assets/testimonials/test1.png";
import test2 from "../assets/testimonials/test2.png";
import test3 from "../assets/testimonials/test3.png";
import test4 from "../assets/testimonials/test4.png";

const TestimonialCard = ({ image, name, testimonial }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center">
      <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-white text-xl font-semibold mb-3">{name}</h3>
      <p className="text-white/90 text-center text-sm leading-relaxed italic">
        "{testimonial}"
      </p>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      image: test1,
      name: "Mr. Vijay Prabhu C",
      testimonial:
        "My child thoroughly enjoys every moment at Vriksha. The school's nurturing environment and dedicated staff have created an exceptional learning atmosphere that fosters both academic excellence and personal growth.",
    },
    {
      image: test2,
      name: "Ms. Vimala G",
      testimonial:
        "The green, spacious campus and stress-free environment at Vriksha School have been instrumental in my son's development. The perfect balance of academics and sports has helped him excel in all areas.",
    },
    {
      image: test3,
      name: "Ms. Chandrakala",
      testimonial:
        "Vriksha Global School's student-centered approach has provided the perfect foundation for my child's education. The holistic development and engaging activities have made learning a joyful experience.",
    },
    {
      image: test4,
      name: "Ms. Kavitha Ramasamy",
      testimonial:
        "Being part of Vriksha Global School has been incredibly rewarding. The school's commitment to nurturing young minds beyond textbooks creates an environment where both students and educators thrive together.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] mb-16">
          Testimonials
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
