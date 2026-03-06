import React from 'react'

function HeroSection() {
  return (
    <div className='w-full min-h-screen grid grid-cols-2'>
        <div className='w-full h-full flex flex-col items-start justify-center space-y-6 px-20'>
            <h1 className='text-4xl font-bold text-black'>Students Submit, Schools Review, Everyone Stays Informed</h1>
            
            <p className='text-lg text-gray-700'>Helping students upload assignments and schools review them efficiently.</p>
            <button className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer'>Get Started</button>
        </div>
        <div className='w-full h-full flex items-center justify-center'>
            <img src="https://via.placeholder.com/400x300" alt="Hero Image" className='w-full h-auto rounded-lg shadow-lg' />
        </div>
    </div>
  )
}

export default HeroSection