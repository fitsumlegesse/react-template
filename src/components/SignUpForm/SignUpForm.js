import React from 'react'
import './SignUpForm.css'
import Input from '../Input/InputBox'
import Button from '../Button/Button'


const SignUp = () => {
  return (
    <div className='signup-container'>
        <div className='signup-parent'>
            <div className='signup-left'>
                <h2>Sign Up</h2>
                <Input label={'Name '}/>
                <Input label={'E-mail'}/>
                <Input label={'Password'}/>
                <Input label={'Confirm Password'}/>
                <Button margtop={'17px'} text={'Sign Up'}/>
            </div>
        </div>
        
    </div>
  )
}

export default SignUp