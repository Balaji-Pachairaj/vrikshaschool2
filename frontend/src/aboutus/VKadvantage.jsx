import React from 'react'


const VKadvantage = () => {
  return (
    <div className="w-full bg-black relative">
      
      
      <div className="container mx-auto px-2 py-16 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-32">
          <div className="md:w-1/2 project-container">
            <h2 className="text-8xl font-bold font-panchang">
              <div className="transform-3d">
                <span className="block text-white uppercase tracking-tight">SEA <br />View</span>
              </div>
            </h2>
            <p className="text-sm mt-4 text-gray-300">
              INNOVATIVE WEBFLOW DESIGN AND<br />DEVELOPMENT AGENCY. BASED IN L.A.
            </p>
          </div>

          <div className="md:w-[400px]">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop"
                alt="VK Advantage"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-32">
          <div className="md:w-1/2 project-container">
            <h2 className="text-8xl font-bold font-panchang">
              <div className="transform-3d">
                <span className="block text-white uppercase tracking-tight">MOUNTAIN<br />VIEW</span>
              </div>
            </h2>
            <p className="text-sm mt-4 text-gray-300">
              BREATHTAKING LANDSCAPES AND<br />NATURAL BEAUTY AT ITS FINEST
            </p>
          </div>

          <div className="md:w-[400px]">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop"
                alt="Mountain View"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-32">
          <div className="md:w-1/2 project-container">
            <h2 className="text-8xl font-bold font-panchang">
              <div className="transform-3d">
                <span className="block text-white uppercase tracking-tight">CITY<br />LIFE</span>
              </div>
            </h2>
            <p className="text-sm mt-4 text-gray-300">
              URBAN ARCHITECTURE AND<br />METROPOLITAN EXCELLENCE
            </p>
          </div>

          <div className="md:w-[400px]">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop"
                alt="City Life"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 project-container">
            <h2 className="text-8xl font-bold font-panchang">
              <div className="transform-3d">
                <span className="block text-white uppercase tracking-tight">DESERT<br />DREAMS</span>
              </div>
            </h2>
            <p className="text-sm mt-4 text-gray-300">
              EXPLORING THE BEAUTY OF<br />ENDLESS SAND DUNES
            </p>
          </div>

          <div className="md:w-[400px]">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000&auto=format&fit=crop"
                alt="Desert Dreams"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>



            
      <style jsx global>{`
        @font-face {
          font-family: 'Akira Expanded Demo';
          src: url('assets/Akira Expanded Demo.otf') format('opentype');
          font-weight: normal;
          font-display: swap;
          font-style: normal;
        }
      `}</style>

      <style jsx>{`
        .project-container {
          z-index: 1;
          transform-origin: 0%;
          transform-style: preserve-3d;
          position: relative;
          transform: perspective(810px) rotateX(0) rotateY(30deg) rotateZ(0) perspective(1500px);
        }

        .transform-3d {
          transform: none; /* Remove previous transform */
        }

        .transform-3d span {
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          text-shadow: 
            2px 2px 0 rgba(0, 0, 0, 0.2),
            4px 4px 0 rgba(0, 0, 0, 0.3),
            6px 6px 0 rgba(0, 0, 0, 0.4);
          color: white;
          display: inline-block;
          position: relative;
          left: 0;  /* Starting position */
        }

        .transform-3d span:hover {
          color: #FFFF00;
          margin-left: 20px;  /* Reduced from 32px for subtler movement */
          transform: scale(1.02);
        }

        /* Update mobile styles if needed */
        @media (max-width: 768px) {
          .project-container {
            transform: perspective(810px) rotateX(0) rotateY(15deg) rotateZ(0);
          }
        }
      `}</style>
    </div>
  )
}

export default VKadvantage
