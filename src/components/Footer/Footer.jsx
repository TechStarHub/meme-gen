import React from 'react'
import FooterLogo from '../../assets/brand/MemeGen-M-bg_removed-cropped.png'
import Tablogo from '../../assets/brand/Tab_Logo-removebg.png'
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
    <div className='bg-slime'>
      <div className=' sm:flex text-xl font-bold items-center justify-between text-white'>
        <div className='inline-block'>
          <div className='container'>
            <img src={FooterLogo} alt="" 
              className='max-w-[200px] md:max-w-[300px] hidden sm:block py-2'
            />
            <img src={Tablogo} alt="" 
              className='max-w-[50px]  sm:hidden py-2'
            />
          </div>
          <div className='sm:block hidden container text-center'>
            <p className='font bold text-sm text-white md:text-xl'>MemeGen @ Copyright 2024</p>
          </div>
        </div>
        <div className='sm:pt-8'>
        <ul className='grid grid-cols-3 '>
          <li className='px-3 py-1'>Home</li>
          <li className='px-3 py-1'>About</li>
          <li className='px-3 py-1'>Contact</li>
          <li className='px-3 '>Resources</li>
          <li className='px-3 '>Copyright</li>
          <li className='px-3 '>FAQ</li>
        </ul>
        <p className='px-3 py-2'>Contributers</p>
        </div>
      </div>
      
      <hr  className='text-white h-[10px] font-bold  py-1'/>

      <div className='flex items-center sm:justify-end justify-center gap-3 px-3'>
        <Link to='/'  className='flex items-center justify-center gap-2'>
          <FaGithub className='text-4xl ' />
          <span className='hidden gap-2 sm:block'>Github</span>
        </Link>
        <Link to='/'  className='flex items-center justify-center gap-2'>
          <FaSquareXTwitter className='text-4xl '/>
          <span className='hidden gap-2 sm:block'>Twitter</span>
        </Link>
        <Link to='/'  className='flex items-center justify-center gap-2'>
          <FaLinkedin className='text-4xl '/>
          <span className='hidden  sm:block'>Linkedin</span>
        </Link>
      </div>



      </div>  
    </>
  )
}
