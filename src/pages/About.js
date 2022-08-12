import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import FooterComponent from '../components/FooterComponent/FooterComponent'
import SmallCard from '../components/SmallCard/SmallCard'
import { useState, useEffect } from 'react'
import './About.css'

const About = () => {
  // const [data, setData] = useState([])
  // const url = 'C:/Users/fitsum.legesse/Documents/ftl-projects/project-react-template/client/src/db.json'
  // useEffect(()=>{
  //   fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  //   .then((data)=>{JSON.parse(data)})
  //   .then((data)=>(setData(data)))

  //   return data;
  // },[data])

  // console.log(data)

  // const data = {name:"fitsum"}
  // console.log(data)

  return (
    <>
      <NavBar/>
      <div className='about-container'>
       
         <SmallCard name={'product'} desc={'This is fitsum. I am from addis abeba ethiopia. I am glad to join react'}/>
    
      </div>
      <FooterComponent/>
    </>
  )
}

export default About