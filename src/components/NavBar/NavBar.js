import React from 'react'
import './NavBar.css'
import { Outlet, Link } from "react-router-dom";
import Button from '../Button/Button';


const NavBar = () => {
  return (
    <div className='nav-container'>
      <ul className='topnav'>
          <li><Link to="/">FTL</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className='right'><Link to="/login">Log In</Link></li>
      </ul>
      <Outlet/>
    </div>
    
    
  )
}

export default NavBar