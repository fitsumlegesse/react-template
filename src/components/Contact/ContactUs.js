import React from 'react'
import './ContactUs.css'
import Button from '../Button/Button';
import InputBox from '../Input/InputBox'
import { useState } from 'react';

const ContactUs = () => {
     const [name, setName] = useState("")
     const [phone, setPhone] = useState("")
     const [email, setEmail] = useState("")
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