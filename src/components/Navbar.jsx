import React from 'react'
import logo from "../assets/flower.jpeg"
import {FaLinkedin, FaGithub, FaTwitter, FaInstagram, } from "react-icons/fa"
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='mb-20 flex item-center justify-between py-6 pb-0'> 
        <div className='flex flex-shrink-0 items-center'>
            {/*<img className="mx-2 w-10" src={logo} alt="logo" />*/}
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl text-black'>
          <a href="https://www.linkedin.com/in/vivianzou1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/vivianzo" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:zou.v@northeastern.edu" target="_blank" rel="noopener noreferrer">
            <IoMail />
          </a>
        </div>
    </nav>
  )
}

export default Navbar
