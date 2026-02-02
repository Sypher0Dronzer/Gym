import React from 'react'
import trainer1 from './../assets/trainer1.png'

const staff=[
    {
        name:'Blake Hunter',
        pic:trainer1
    }
]
const Trainers = () => {
  return (
    <div className='maxWidthForSections py-12'>
        <h1 className="section-header text-white">Your Goals</h1>
      <h1 className="section-header text-lime">Their Expertise</h1>
      <p className="text-sm text-text-white/80 font-light text-center tracking-wider mt-1">
        Our team of certified trainers bring unparalleled expertise to help you achieve your fitness goals.
      </p>

      <div className="">
        
      </div>
      
    </div>
  )
}

export default Trainers
