import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import logo from '../../assets/logo Prechy.png';

const Header = () => {
  return (
    <div className='responsive__header section__padding' id='home'>
      <div className='responsive__header-content'>
        <h1 className='gradient__text'>
        Let's get in touch
        </h1>
        <p>If you have any questions regarding motorcycle world,drop down your email and I will get in touch with you as soon as possible</p>
        <div className='responsive__header-content__input'>
          <input type='email' placeholder='Your Email Adress'></input>
          <button type='button'>Get Started
          </button>
        </div>
        <div className='responsive__header-content__people'>
          <img src={people} alt="people"/>
          <p>xxx people requested access a visit in last 24 hours</p>
        </div>
        </div>
        <div className='responsive__header-image'>
          <img src={logo} alt="logo" />
        </div>
        </div>
  )
}

export default Header