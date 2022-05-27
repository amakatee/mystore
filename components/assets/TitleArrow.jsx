import { motion } from 'framer-motion'
import React, {useEffect, useRef} from 'react'

const TitleArrow = ({text, color}) => {

  


  return (
      <>
    <motion.h1 initial={{opacity:0, x:"-100"}} transition={{ duration: .6 }} whileInView={{x:0, opacity:1}}  className='overflow-hidden  bg-[#fff] pr-1 z-10'><span  className='block title-text dark-color'>{text}</span></motion.h1>
    <motion.div initial={{opacity:0, x:"-100"}} transition={{ duration: .8, delay: .3 }} whileInView={{x:0, opacity:1}}  className='white-arrow w-[40px]  overflow-hidden'>
      <span  className='block'>
      <svg viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path>
      <path fill={color} d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path>
    </svg>
    </span>
    </motion.div>
    </>
  )
}

export default TitleArrow