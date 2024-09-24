import React from 'react'
import logo from "../assets/react.svg"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-[#21222A]'>
        <div className='flex space-x-2 items-center ml-3 mt-3 text-xl mb-5'>
        <img src={logo} alt="" />
        <h1 className='font-inter font-extrabold text-[#61DAFB]'>ReactFacts</h1>
    </div>
    <div className='mt-3 mr-3 mb-5'>
        <h1 className='font-inter font-bold text-xl text-white'>
            React Course - Project 1
        </h1>
    </div>
    </div>
    
  )
}

export default Navbar