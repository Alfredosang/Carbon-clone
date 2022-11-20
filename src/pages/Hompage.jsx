import React from 'react'
import { Navbar } from '../components/Navbar'
import Hero from '../components/Hero'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'

const Hompage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
    </div>
  )
}

export default Hompage