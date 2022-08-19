import React from 'react'
import './SigninForm.css'
import Input from '../Input/InputBox'
import Button from '../Button/Button'


const ContactUs = () => {
  return (
    <div className='login-container'>
        <div className='login-parent'>
            <div className='login-left'>
                <h2>Login</h2>
                <Input label={'E-mail'}/>
                <Input label={'Password'}/>
                <Button margtop={'15px'} text={'Signin'}/>
            </div>
        </div>
        
    </div>
  )
}

export default ContactUs