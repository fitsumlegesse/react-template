import React from 'react'
import fb from '../../img/fb-icon.png'
import ln from '../../img/ln-icon.png'
import tw from '../../img/tw-icon.png'
import sc from '../../img/sc-icon.png'
import './FooterComponent.css'

const SectionTwo = () => {
    return (
        <div className='footer-container'>
             <div className='social-icon'>
                <img className='icons' src={fb} alt='hh'/>
                <img className='icons' src={ln} alt='hh'/>
                <img className='icons' src={tw} alt='hh'/>
                <img className='icons' src={sc} alt='hh'/>
            </div>
            <div className='footer-text'>
                <h1>Hello</h1>
                <p>Hellosafdadsfdsa asfsasdfdasf fsadf dsfasd ftl </p>
                <p>Hellosafdadsfdsa asfsasdfdasf fsadf dsfasd ftl </p>
                <p>Hellosafdadsfdsa asfsasdfdasf fsadf dsfasd ftl </p>
            </div>
                
        </div>
             
        
      )
}

export default SectionTwo