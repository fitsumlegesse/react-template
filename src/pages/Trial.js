import React from 'react'
import InputBox from '../components/Input/InputBox'
import SigninForm from '../components/SigninForm/SigninForm'
import NavBar from '../components/NavBar/NavBar'
import FooterComponent from '../components/FooterComponent/FooterComponent'
import './Trial.css'

const Trial = () => {
  return (
    <div className='trial'>
        <NavBar/>
        <SigninForm/>
        {/* <FooterComponent/> */}
    </div>
  )
}

export default Trial