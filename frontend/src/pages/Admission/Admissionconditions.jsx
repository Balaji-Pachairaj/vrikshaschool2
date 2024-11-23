import React from 'react';
import { Code2, Palette, Laptop, BrainCircuit } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left side - Terms and Conditions */}
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Terms and Conditions
            </h2>
          </div>
          
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-lg">
                Students are admitted on First Come, First Served basis depending on vacancies
              </li>
              
              <li className="text-lg">
                We conduct no formal interviews with the child or the parent
              </li>
              
              <li className="text-lg">
                The school reserves the right to admissions. In all matters pertaining to admission, 
                the decision of the Admission Committee will be final
              </li>
              
              <li className="text-lg">
                Parents will be intimated of the date and time of uniform & textbook issue
              </li>
              
              <li className="text-lg">
                School reopening date will be intimated to you in advance. And all other details 
                will be intimated to you on timely basis
              </li>
            </ul>
          </div>
        </div>

        {/* Right side - 3D Image */}
        <div className="lg:w-1/2">
  <div className="relative perspective-[1000px] transform-style-preserve-3d">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-3xl rounded-3xl transform rotate-12 skew-y-6"></div>
    <img
      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000&h=1500"
      alt="Abstract Design"
      className="relative rounded-3xl shadow-2xl transform 
        hover:rotate-y-12 hover:-rotate-x-12 
        hover:scale-[1.05] 
        transition-all duration-500 ease-out
        hover:shadow-xl hover:shadow-purple-500/20"
    />
  </div>
  </div>
      </div>
    </div>
  );
}

export default App;