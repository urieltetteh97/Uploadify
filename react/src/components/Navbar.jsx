import React from 'react'

function Navbar() {
  return (
    <nav className='w-full h-fit px-5.5 py-6.5'>
        <div className='w-full h-fit grid grid-cols-3 space-x-10 px-3 rounded-lg '>
          
              <div className="text-start px-4">
            <h1 className="text-2xl font-bold text-black">MyApp</h1>
          </div>
          <ul className="flex flex-nowrap items-center justify-center space-x-8">
            <li className="text-black font-semibold cursor-pointer hover:text-blue-500 transition-all duration-120 hover:scale-110 text-lg ">Home</li>
            <li className="text-black font-semibold cursor-pointer hover:text-blue-500 transition-all duration-120 hover:scale-110 text-lg ">Features</li>
            <li className="text-black font-semibold cursor-pointer hover:text-blue-500 transition-all duration-120 hover:scale-110 text-lg whitespace-nowrap">How It Works</li>
            <li className="text-black font-semibold cursor-pointer hover:text-blue-500 transition-all duration-120 hover:scale-110 text-lg">About</li>
            <li className="text-black font-semibold cursor-pointer hover:text-blue-500 transition-all duration-120 hover:scale-110 text-lg ">Contact</li>
            </ul>
          <div className="text-end px-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer">Sign Up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar