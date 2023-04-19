import React from 'react'
import './styles/footer.css'
import git from './images/github.png'
import linkdin from './images/linkedin.png'
import gmail from './images/gmail.png'


export default function Footer() {
  return (
    <>
    <footer className='footer-main'>
      
      
      <div className="line"> </div>
        <div className="adjust">

        <div className="brandname">blazingbucks@2023</div>

        <div className='icons'>
        <a href="https://github.com/suryansh-f-r-i-d-a-y"><img src={git} alt="error loading" /></a>
        <a href="https://www.linkedin.com/in/suryansh-chauhan-friday/"><img src={linkdin} alt="error loading" /></a>
        <a href="mailto:suryansh1016star@gmail.com"><img src={gmail} alt="error loading" /> </a> 
        </div>
        </div>
    </footer>
    
    </>
  )
}
