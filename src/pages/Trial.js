import React from 'react'
import InputBox from '../components/Input/InputBox'
import SigninForm from '../components/SigninForm/SigninForm'
import NavBar from '../components/NavBar/NavBar'
import FooterComponent from '../components/FooterComponent/FooterComponent'
import './Trial.css'
import AlertComponent from '../components/AlertComponent/AlertComponent'

const Trial = () => {
  return (
    <div className='trial'>
        <NavBar/>
        {/* <SigninForm/> */}
        <AlertComponent/>
        {/* <FooterComponent/> */}
    </div>
  )
}

export default Trial