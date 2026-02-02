import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import StatsCounter from './components/Counter'
import Features from './components/Features'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Trainers from './components/Trainers'
import Courses from './components/Courses'

const App = () => {
  return (
    <div className='relative  '>
      <div className="bg-blackbg fixed w-screen h-screen -z-10"></div>
      <Navbar/>
      <Hero/>
      <StatsCounter/>
      <Features/>
      <Courses/>
<Trainers/>
      <Contact/>

      <Footer/>
    </div>
  )
}

export default App
