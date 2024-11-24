const HeroSection = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 z-10">
            <h1 className="text-6xl font-bold mb-2">
              RELEASE STYLE
              <br />
              WITH <span className="text-gray-500">CONFIDENCE</span>
            </h1>
            
            <div className="mt-8">
              <p className="uppercase text-sm font-medium mb-4">
                Perfect blend of fashion
                <br />
                and comfortable cloths.
              </p>
            </div>
  
            <div className="bg-gray-100 rounded-3xl p-8 mt-12 max-w-md">
              <p className="text-sm mb-6">
                INDULGE IN PURE COMFORT WITH OUR T-SHIRTS. SOFT, BREATHABLE FABRICS GUARANTEE AN UNMATCHED COZY FIT FOR YOUR EVERYDAY RELAXATION.
              </p>
              
              <button className="flex items-center space-x-2 bg-white px-6 py-2 rounded-full text-sm">
                <span>SHOP NOW</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
  
          {/* Right Content - Image */}
          <div className="lg:w-1/2 lg:absolute lg:right-0 mt-8 lg:mt-0">
            <div className="relative">
              <img 
                src="https://cdn.prod.website-files.com/65478d390c8996a757a4faaa/6593f0ccecce583b5a13a874_Header%20Img.png" 
                alt="Model wearing red t-shirt" 
                className="w-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-white px-4 py-2 rounded-full text-sm">
                  COMFORT
                </span>
              </div>
            </div>
          </div>
  
          {/* Background Decoration */}
          <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gray-100 rounded-tl-[100px] -z-10" />
        </div>
      </div>
    );
  };

  export default HeroSection