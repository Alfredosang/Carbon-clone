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
import SectionNine from '../components/SectionNine'
import SectionTen from '../components/SectionTen'

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
        <SectionNine />
        <SectionTen />
    </div>
  )
}

export default Hompage