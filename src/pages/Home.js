import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import SectionOne from '../components/SectionOne/SectionOne'
import SectionTwo from '../components/SectionTwo/SectionTwo'
import SectionThree from '../components/SectionThree/SectionThree'
import FooterComponent from '../components/FooterComponent/FooterComponent'

const Home = () => {

  return (
    <div>
        <NavBar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <FooterComponent/>
    </div>
  )
}

export default Home