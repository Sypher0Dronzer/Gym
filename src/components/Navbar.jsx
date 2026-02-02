import React from 'react'

const Navbar = () => {
  return (
    <div className=' fixed z-20 top-0 w-full bg-blackbg/50 backdrop-blur-md  text-text-white'>
        <div className="maxWidthForSections py-3 flex justify-between items-center">
            <h2>LOGO Image</h2>

            <div className="">
                <ul className='uppercase flex gap-3 text-sm'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Trainers</li>
                </ul>
            </div>
            <div className="flex gap-3">
                <button className='btn btn-primary'>
                    Contact Us
                </button>
                <button className='btn btn-outline'>
                    Get Started
                </button>
                
            </div>

        </div>

    </div>
  )
}

export default Navbar
