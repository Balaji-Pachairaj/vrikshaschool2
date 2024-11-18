import React from "react";
import img from "./../assets/Learning/backgroundimage.png";

const Overview = () => {
  return (
    <div className="w-full -mt-6 min-h-screen p-6 bg-black">
      <div className="text-center mb-12">
        <h1 className="text-7xl text-white font-bold mb-4">Discover</h1>
       
      </div>
      <div className="relative w-full max-w-6xl mx-auto h-[1350px] overflow-hidden rounded-lg shadow-lg">
        <div className="absolute inset-0">
          <img
            src={img}
            alt="Learning Overview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 p-12 text-white">
          <h2 className="text-5xl font-bold mb-8">The right environment to foster learning</h2>
          <div className="space-y-4 text-lg">
            <ul className="list-disc list-inside">
              <li className="mb-3">
                Our classrooms are spacious, integrated with smart boards, individual sitting desks and individual storage cupboards.
              </li>
              <li className="mb-3">
              Our skilled teachers provide guidance to each individual and we maintain a healthy teacher student ratio of 1:20.
              </li>
              <li className="mb-3">
                Technological support like wall mounted projectors, high quality speakers with round the clock internet connection, the emphasis is on making every classroom session interesting and interactive.
              </li>
              
              
            </ul>
          </div>
        </div>

        <div className="relative z-10 p-12 text-white">
          <h2 className="text-5xl font-bold mb-8">Mess & Menu</h2>
          <div className="space-y-4 text-lg">
            <ul className="list-disc list-inside">
              <li className="mb-3">
              The Dining Hall currently has capacity to seat over 600 students and teachers. It is serviced by a very modern and hygienic kitchen. The entire management is standardized around the best global practices from pre-washing of supplies to preparation and delivery. The menu is designed by an expert nutritionist and is managed through a software-based menu management system to provide balanced nutrition.
              </li>
              <li className="mb-3">
              The school has exclusive cooks for the food preparation and also separate helpers for the maintenance of cleanliness standards. Most of the vegetables and basic needs are grown inside the school campus by our students under the supervision of the teachers. This provides an idea to the students about the plantation, gardening and other natural process. Also the milk supply to the dining comes from our own dairy inside the campus.
              </li>
              <li className="mb-3">
              Advocating a policy of healthy eating, the school does not permit junk food and aerated soft drinks on the campus. Its dining program serves a diverse selection of tasty, nutritious food in a clean environment.
              </li>
              
            </ul>
          </div>
        </div>

        <div className="relative z-10 p-12 text-white">
          <h2 className="text-5xl font-bold mb-8">Transport</h2>
          <div className="space-y-4 text-lg">
            <ul className="list-disc list-inside">
              <li className="mb-3">
              To ensure safe travel the school has its own fleet of school buses designed as per safety, comfort standards and manned by trained drivers and personnel sensitized to the needs of small children. For supervision and monitoring a transport attendant is on board throughout the journey.
              </li>
              <li className="mb-3">
              The buses run through various routes covering most of the areas and ferry children and teachers to school. The buses are parked inside the school during the day.
              </li>
              <li className="mb-3">
              The bus staff are given periodic trainings by transport in charges and also outside resources like traffic rules, road safety etc. This works towards awareness and prevention of any avoidable accident on the roads and also ensures that safety guidelines and discipline measures for students and drivers are diligently followed.
              </li>
              <li className="mb-3">
              All the buses of the school are installed with Live GPS tracking system with artificiall intelligence which updates parents by sending alert messages at the time of each pickup and drop of their ward.
              </li>
              <li className="mb-3">
              Parents can track the movement of vehicles on road which ensures the safety of their child beyond the school campus.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;