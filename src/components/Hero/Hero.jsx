import React from 'react'
import zannyFace from'./Assests/ZannyFace/icons8-funny-96.png'
import clownFace from './Assests/JokerFace/icons8-funny-96.png'
import smileFace from './Assests/SmileFace/icons8-smiling-96.png'
import laughFace from './Assests/LaughFace/icons8-funny-97.png'
import heartFace from './Assests/HeartFace/icons8-funny-64.png'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (<>

  <div className='container text-center tracking-wider py-6'>
    <div className='text-3xl sm:text-7xl '>
      Welcome To MemeGen
    </div>
    <p className=' sm:text-3xl text-gray-500'>This is a Meme generator Web App</p>
    <ul className='list-none flex justify-center items-center'>
      <li >
        <img src={laughFace} alt="" className='sm:w-[100px] w-[48px] pt-6'/>
      </li>
      <li className='hidden sm:block'>
        <img src={clownFace} alt="" className='sm:w-[100px] w-[48px] pt-6'/>
      </li>
      <li>
        <img src={zannyFace} alt="" className='sm:w-[200px] w-[96px] '/>
      </li>
      <li className='sm:hidden'>
        <img src={clownFace} alt="" className='sm:w-[100px] w-[48px] pt-6'/>
      </li>
      <li className='hidden sm:block'>
        <img src={smileFace} alt="" className='sm:w-[100px] pt-6'/>
      </li>
      <li className='hidden sm:block'>
        <img src={heartFace} alt="" className='sm:w-[100px] pt-5'/>
      </li>
    </ul>
    <p className=' sm:text-sm text-black font-bold'>Easy to understand UI and start making memes right now!</p>
    <Link to='/'>
      <button className="bg-slime text-white text-xl py-2 my-6 px-4 border border-green-700 rounded-lg">
        Get Started <span className='font-bold'>{'>'}</span>
      </button>
    </Link>
    </div>
    
    </>
  )
}
