import React from "react";
import img1 from "../assets/discover/1.png"
import img2 from "../assets/discover/3.png"
import img3 from "../assets/discover/bus.jpeg"

const sections = [
  {
    title: "The right environment to foster learning",
    image: img1,
    items: [
      "Our classrooms are spacious, integrated with smart boards, individual sitting desks and individual storage cupboards.",
      "Our skilled teachers provide guidance to each individual and we maintain a healthy teacher student ratio of 1:20.",
      "Technological support like wall mounted projectors, high quality speakers with round the clock internet connection, the emphasis is on making every classroom session interesting and interactive."
    ]
  },
  {
    title: "Mess & Menu",
    image: img2,
    items: [
      "The Dining Hall currently has capacity to seat over 600 students and teachers. It is serviced by a very modern and hygienic kitchen. The entire management is standardized around the best global practices from pre-washing of supplies to preparation and delivery. The menu is designed by an expert nutritionist and is managed through a software-based menu management system to provide balanced nutrition.",
      "The school has exclusive cooks for the food preparation and also separate helpers for the maintenance of cleanliness standards. Most of the vegetables and basic needs are grown inside the school campus by our students under the supervision of the teachers. This provides an idea to the students about the plantation, gardening and other natural process. Also the milk supply to the dining comes from our own dairy inside the campus.",
      "Advocating a policy of healthy eating, the school does not permit junk food and aerated soft drinks on the campus. Its dining program serves a diverse selection of tasty, nutritious food in a clean environment."
    ]
  },
  {
    title: "Transport",
    image: img3,
    items: [
      "To ensure safe travel the school has its own fleet of school buses designed as per safety, comfort standards and manned by trained drivers and personnel sensitized to the needs of small children. For supervision and monitoring a transport attendant is on board throughout the journey.",
      "The buses run through various routes covering most of the areas and ferry children and teachers to school. The buses are parked inside the school during the day.",
      "The bus staff are given periodic trainings by transport in charges and also outside resources like traffic rules, road safety etc. This works towards awareness and prevention of any avoidable accident on the roads and also ensures that safety guidelines and discipline measures for students and drivers are diligently followed.",
      "All the buses of the school are installed with Live GPS tracking system with artificiall intelligence which updates parents by sending alert messages at the time of each pickup and drop of their ward.",
      "Parents can track the movement of vehicles on road which ensures the safety of their child beyond the school campus."
    ]
  }
];

const Overview = () => {
  return (
    <div className="w-full -mt-6 min-h-screen p-6 bg-black">
      <div className="text-center">
        <h1 className="text-7xl text-white font-bold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
            Discover
          </span>
        </h1>
      </div>
      <div className="relative w-full max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="px-6 md:px-12 py-8 text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {index === 1 ? (
              <>
                <div className="order-1 rounded-lg overflow-hidden shadow-lg image-container group">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[250px] md:h-[350px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="order-2">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] mb-6">{section.title}</h2>
                  <div className="space-y-4 text-base">
                    <ul className="list-disc list-inside">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-3">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={`order-2 md:order-none ${index % 2 === 0 ? '' : 'md:order-last'}`}>
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] mb-6">{section.title}</h2>
                  <div className="space-y-4 text-base">
                    <ul className="list-disc list-inside">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-3">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg image-container group">
                  <img
                    src={section.image}
                    alt={section.title}
                    className={`w-full h-[480px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110`}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;