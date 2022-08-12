import React from 'react'
import './ContactUs.css'
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