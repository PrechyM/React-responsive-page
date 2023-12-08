import React from 'react'
import './footer.css'
import Prechylogo from '../../assets/logo Prechy.svg'

const Footer = () => {
  return (
    <div className='responsive__footer section__padding'>
      <div className='responsive__footer-heading'>
        <h1 className='gradient__text'>Hope you enjoyed my site</h1>
        </div>
        <div className='responsive__footer-btn'>
          <p>Subscribe youtube</p>
          </div>
        <div className='responsive__footer-links'>
          <div className='responsive__footer-links_logo'>
            <img src={Prechylogo} alt='responsive_logo' />
            <p>Bucharest Romania,All Rights Reserved</p>
          </div>
          <div className='responsive__footer-links_div'>
            <h4>Links</h4>
            <p>Social Media</p>
            <p>Contact</p>
          </div>
          <div className='responsive__footer-links_div'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className='responsive__footer-links_div'>
            <h4>Get in Contact</h4>
            <p>IG: PrechyMotovlog</p>
            <p>FB: PrechyMotovlog</p>
          </div>
        </div>
     </div>
  )
}

export default Footer