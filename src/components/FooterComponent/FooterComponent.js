import React from 'react'
import './FooterComponent.css'
import fb from '../../img/facebook.png'
import ig from '../../img/instagram.png'
import fbmg from '../../img/messenger.png'
import twi from '../../img/twitter.png'

const SectionTwo = () => {
    return (
        <div className='footer-container'>
            
             <div className='social-icon'>
                    <img className="icons"src={fb}/>
                    <img className="icons"src={ig}/>
                    <img className="icons"src={fbmg}/>
                    <img className="icons"src={twi}/>
            </div>
                
        </div>
             
        
      )
}

export default SectionTwo