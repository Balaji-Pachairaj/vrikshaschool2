import React from "react";
import test1 from "../../assets/alumni/test1.png";
import test2 from "../../assets/alumni/test2.png";
import test3 from "../../assets/alumni/test3.png";

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

const testimonials = [
  {
    image: test1,
    name: "Arun M E",
    testimonial:
      "From the very first day, the teachers and management of vriksha have been incredibly supportive, encouraging and inspiring. Through various club activities and leadership opportunities, I was able to develop essential skills, including problem-solving, teamwork, and leadership. Beyond academics, Vriksha has given me a close-knit community of friends and a treasure trove of lifelong memories that I will always cherish.",
    position:
      "Batch of 2020, Mobile App Developer Trainee, E2 Info Systems Limited",
  },
  {
    image: test2,
    name: "Aatithiyaa V R",
    testimonial:
      "Vriksha has played a significant role in shaping my confidence, adaptability, and decision-making skills, equipping me for future challenges. Through its well-structured curriculum, I have gained immense practical knowledge that continues to benefit me. Beyond academics, Vriksha has provided me with exposure to various co-curricular and extracurricular activities, helping me enhance my problem-solving abilities, personality development, and leadership skills—all essential in today's dynamic world.",
    position: "Batch of 2023, B.Com, Banking and Capital Markets, VIT",
  },
  {
    image: test3,
    name: "V. Shriyha",
    testimonial:
      "During my tenure, I had the privilege of nominating a School Pupil Leader, an experience that greatly shaped my growth. It enhanced my leadership, team collaboration, and management skills, preparing me for greater challenges. Additionally, Vriksha played a vital role in refining my musical and sports abilities through various training sessions and opportunities. Today, I thrive in multiple disciplines, all thanks to Vriksha and its invaluable teachings.",
    position: "Batch of 2024, B.Tech, AI & DS, Saveetha College of Engineering",
  },
  //   {
  //     image: test4,
  //     name: "Ms. Kavitha Ramasamy",
  //     testimonial:
  //       "Being part of Vriksha Global School has been incredibly rewarding. The school's commitment to nurturing young minds beyond textbooks creates an environment where both students and educators thrive together.",
  //   },
];

const AluminiTestimonial = () => {
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

export default AluminiTestimonial;
