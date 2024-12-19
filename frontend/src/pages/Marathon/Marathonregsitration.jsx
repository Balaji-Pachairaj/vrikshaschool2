import { ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ContactSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div 
        className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
        style={{
          transform: 'perspective(100vh) rotateX(32deg) rotateY(0) rotateZ(0)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Small label */}
        <div className="flex items-center gap-2 text-white/80 mb-6 transform -rotate-x-32">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4"
            stroke="currentColor"
          >
            <path
              d="M13 10V3L4 14h7v7l9-11h-7z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base md:text-lg tracking-wider">GET IN TOUCH</span>
        </div>

        {/* Main heading */}
        <div className="text-center transform -rotate-x-32">
          <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
            REGISTER
          </h1>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent" style={{
            WebkitTextStroke: '1px white',
          }}>
            TODAY
          </h1>
        </div>

        {/* Contact button */}
        <div className="mt-6 transform -rotate-x-32">
          <button 
            onClick={handleContactClick}
            className="group flex items-center gap-4 text-white border border-white/20 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="text-xl md:text-2xl">CONTACT</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:bg-black">
              <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactSection