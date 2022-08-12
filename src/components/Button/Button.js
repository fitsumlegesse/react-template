import React from 'react'
import './Button.css'

const Button = (props) => {
    const bgcolor = props.bgcolor
  return (
    <button style={{'background-color': bgcolor, 'width': props.width, 'height': props.height, 'top': props.top, }}className='main-button'>{props.text}</button>
  )
}

export default Button