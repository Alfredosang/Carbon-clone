import React from 'react'
import { Navbar } from '../components/Navbar'
import Hero from '../components/Hero'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'
import SectionSix from '../components/SectionSix'
import SectionSeven from '../components/SectionSeven'
import SectionEight from '../components/SectionEight'

const Hompage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
    </div>
  )
}

export default Hompage