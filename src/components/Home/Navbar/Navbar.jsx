import React from 'react';
import '../Navbar/Navbar.css';
import DesktopLogo from '../../../assets/brand/MemeGen-M-bg_removed-cropped.png';
import {Link} from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      <nav className='main-nav'>
        <div className='sub-nav1'>
            <button className='logo'>
                <Link to="/"><img src={DesktopLogo} alt="website logo"/></Link>     
            </button>
        </div>
        <div className='nav-item'>
            <ul className='nav-link'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}
