import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import SigninForm from '../components/SigninForm/SigninForm'
import FooterComponent from '../components/FooterComponent/FooterComponent'
import './Login.css'
const Login = () => {
  return (
    <div className='login-page'>
        <NavBar/>
        {/* <SigninForm/> */}
        <FooterComponent/>
        
    </div>
  )
}

export default Login