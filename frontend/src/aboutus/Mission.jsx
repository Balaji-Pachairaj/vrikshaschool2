import React from 'react'

function Mission() {
  return (
    <div className='bg-black min-h-screen w-full p-4 sm:p-8 flex items-center justify-center'>
      <div className='max-w-6xl w-full space-y-4 sm:space-y-8'>
        <button className='w-full group bg-black hover:bg-white border-2 border-white rounded-3xl sm:rounded-full py-6 sm:py-12 px-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-around text-left transition-all duration-300 ease-in-out'>
          <h2 className='text-white group-hover:text-black text-3xl sm:text-4xl font-bold transition-colors duration-300 ease-in-out'>Powered by a Vision</h2>
          <p className='text-white group-hover:text-black text-sm sm:text-base transition-colors duration-300 ease-in-out max-w-md'>
          Vriksha Global School aims to equip the child to take on the world with confidence and blaze a trail through life independently, by its innovative and path breaking endeavors in the field of true education.
          </p>
        </button>

        <button className='w-full group bg-black hover:bg-white border-2 border-white rounded-3xl sm:rounded-full py-6 sm:py-12 px-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-around text-left transition-all duration-300 ease-in-out'>
          <p className='text-white group-hover:text-black text-sm sm:text-base transition-colors duration-300 ease-in-out max-w-md order-2 sm:order-1'>
          To develop the holistic personality of a child and instill the ability to learn, inquire, think, understand and innovate by nurturing a value based education that inculcates moral, social, emotional and intellectual values.
          </p>
          <h2 className='text-white group-hover:text-black text-3xl sm:text-4xl font-bold transition-colors duration-300 ease-in-out order-1 sm:order-2'>Driven by a Mission</h2>
        </button>
      </div>
    </div>
  )
}
export default Mission
