import React from 'react';
import './Navbar.css';
import navLogo from '../../assets/logo.png';
import navProfile from '../../assets/profile.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo-main'>
            <div className='nav-logo-main-left'>
                <img src={navLogo} alt="" className="nav-logo" />
            </div>
            <div className='nav-logo-main-right'>
                <h1>SHOPHUB</h1>
                <p>Admin Panel</p>
            </div>
        </div>
        <img src={navProfile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar
