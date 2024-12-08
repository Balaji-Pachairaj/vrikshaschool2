import React from 'react';
import { Link } from 'react-router-dom';

const LearningCard = () => {
  return (
    <section className="bg-black min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link to="/facilities" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-gradient-to-br from-[#7c2ae8] to-[#00c4cc] rounded-lg shadow-lg p-6 h-96 flex items-center justify-center cursor-pointer hover:opacity-90 transition-all">
              <h3 className="text-3xl font-bold text-white text-center">Vriksha Junior</h3>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/higher" onClick={() => window.scrollTo(0, 0)}>
          <div className="bg-gradient-to-br from-[#7c2ae8] to-[#00c4cc] rounded-lg shadow-lg p-6 h-96 flex items-center justify-center cursor-pointer hover:opacity-90 transition-all">
            <h3 className="text-3xl font-bold text-white text-center">Primary, Secondary & High Shool</h3>
          </div>
          </Link>


          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#7c2ae8] to-[#00c4cc] rounded-lg shadow-lg p-6 h-96 flex items-center justify-center cursor-pointer hover:opacity-90 transition-all">
            <h3 className="text-3xl font-bold text-white text-center">Lead Curriculum</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningCard;
