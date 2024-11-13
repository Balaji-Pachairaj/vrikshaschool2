import React from 'react'

function Mission() {
  return (
    <div className='bg-black min-h-screen w-full p-4 sm:p-8'>
      <div className='max-w-6xl mx-auto space-y-4 sm:space-y-8'>
        <button className='w-full group bg-black hover:bg-white border-2 border-white rounded-3xl sm:rounded-full py-6 sm:py-12 px-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-around text-left transition-all duration-300 ease-in-out'>
          <h2 className='text-white group-hover:text-black text-3xl sm:text-4xl font-bold transition-colors duration-300 ease-in-out'>Vision</h2>
          <p className='text-white group-hover:text-black text-sm sm:text-base transition-colors duration-300 ease-in-out max-w-md'>
            Highly skilled product designers whose focus goes beyond UI & UX
          </p>
        </button>

        <button className='w-full group bg-black hover:bg-white border-2 border-white rounded-3xl sm:rounded-full py-6 sm:py-12 px-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-around text-left transition-all duration-300 ease-in-out'>
          <p className='text-white group-hover:text-black text-sm sm:text-base transition-colors duration-300 ease-in-out max-w-md order-2 sm:order-1'>
            Highly skilled product designers whose focus goes beyond UI & UX
          </p>
          <h2 className='text-white group-hover:text-black text-3xl sm:text-4xl font-bold transition-colors duration-300 ease-in-out order-1 sm:order-2'>Mission</h2>
        </button>
      </div>
    </div>
  )
}
export default Mission
