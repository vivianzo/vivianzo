import React from 'react'
import { motion } from 'framer-motion'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 
            className="my-10 text-center text-4xl"
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
            >Feel Free to Reach Out!</motion.h1>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl text-black">
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
      
    </div>
  )
}

export default Contact
