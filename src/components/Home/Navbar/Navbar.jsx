import React from 'react';
import '../Navbar/Navbar.css';
import DesktopLogo from '../../../assets/brand/MemeGen-M-bg_removed-cropped.png';
import TabletLogo from '../../../assets/brand/Tab_Logo-removebg.png';
import { Link } from 'react-router-dom';
// import { FaAlignJustify } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { HiDotsVertical } from "react-icons/hi";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pic, setPic] = useState(<HiMenu/>);

  const menu = () => {
    if (menuOpen) {
      setMenuOpen(!menuOpen);
      setPic(<HiMenu/>);
    } else {
      setMenuOpen(!menuOpen);
      setPic(<IoClose />);
    }
  };

  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/">
            <picture>
              <source srcSet={TabletLogo} media="(max-width:700px)" />
              <img src={DesktopLogo} alt="website logo" />
            </picture>
          </Link>
        </div>
        <div className="icon-menu">
           <HiDotsVertical className={`${menuOpen ? 'hidden':'icon'}`}/>  
          </div>

        <div className="hamburger-menu">
          <button
            onClick={() => {
              menu();
            }}
          >
            {pic}
          </button>
        </div>

        <ul className={menuOpen ? 'open' : ''}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
