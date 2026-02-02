import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import StatsCounter from './components/Counter'
import Features from './components/Features'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Trainers from './components/Trainers'

const App = () => {
  return (
    <div className='relative bg-blackbg '>
      <Navbar/>
      <Hero/>
      <StatsCounter/>
      <Features/>
<Trainers/>
      <Contact/>

      <Footer/>
    </div>
  )
}

export default App
