import React from 'react'
import './InputBox.css'

const InputBox = (props) => {
  return (
  
    <div class="group">
          <input type={props.type} placeholder={props.label}  required />
          <span class="highlight"></span>
          <span class="bar"></span>
    </div>
  
  )
}

export default InputBox