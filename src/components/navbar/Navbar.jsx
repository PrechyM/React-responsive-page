import React, { useState } from 'react';
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#responsive'>What is GPT3</a></p>
  <p><a href='#possibility'>Open AI</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)
/*BEM -> Block Element Modifier */
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='responsive__navbar'>
      <div className='responsive__navbar-links'>
        <div className='responsive__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='responsive__navbar-links_container'>
          <Menu />
        </div>
        </div>
        <div className='responsive__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div> 
        <div className='responsive__navbar-menu'>
            {toggleMenu 
              ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
              : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
            }
            {toggleMenu && (
               <div className="responsive__navbar-menu_container scale-up-center">
                <div className='responsive__navbar-menu_container-links'>
                <Menu />
                <div className='responsive__navbar-menu_container-links-sign'>
                 <p>Sign in</p>
                 <button type='button'>Sign up</button>
                </div> 
              </div>
              </div>
            )}
        </div>  
        </div>
        
  )
}

export default Navbar