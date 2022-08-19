import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import SignUpForm from '../components/SigninForm/SignUpForm'
import FooterComponent from '../components/FooterComponent/FooterComponent'
import './Login.css'
const Login = () => {
  return (
    <div className='login-page'>
        <NavBar/>
        <SignUpForm/>
    </div>
  )
}

export default Login