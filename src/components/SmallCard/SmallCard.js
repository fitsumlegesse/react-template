import React from 'react'
import './SmallCard.css'
import img from '../../img/contact-wallpaper.png'

const SmallCard = (props) => {
  return (
    <div className='sm-card-container'>
        <div className='sm-card-img'>
            <img className='sm-card-img' src={img}/>
        </div>
        <div className='sm-card-des'>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
            <p>$</p>
        </div>
    </div>
  )
}

export default SmallCard