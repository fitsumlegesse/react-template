import React from 'react'
import './ContactUs.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '../Button/Button';
import InputBox from '../Input/InputBox'

const ContactUs = () => {
  return (
    <div className='contact-container'>
        <div className='contact-parent'>
            <div className='contact-form'>
                <div className='form-ellements'>
                   <div className='input-element'>
                        <InputBox type={"text"} label={"Name"}/>
                   </div> 
                   <div className='input-element'>
                        <InputBox type={"text"} label={"Phone"} />
                   </div> 
                   <div className='input-element'>
                        <InputBox  type={"email"} label={"E-mail"}/>
                   </div>  
                   <div className='input-element'>
                        <InputBox type={"text"} label={"Message"}/>
                   </div>  
                   <Button text= {"Submit"}/>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default ContactUs