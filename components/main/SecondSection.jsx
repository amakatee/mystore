import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'
import Carousel from './../assets/Carousel'

const SecondSection = () => {
   const images = [
       'https://i.pinimg.com/564x/23/8c/e1/238ce1a2611002e93b9f499dd029047b.jpg',
       'https://i.pinimg.com/564x/23/8c/e1/238ce1a2611002e93b9f499dd029047b.jpg',
       'https://i.pinimg.com/564x/23/8c/e1/238ce1a2611002e93b9f499dd029047b.jpg',
       'https://i.pinimg.com/564x/23/8c/e1/238ce1a2611002e93b9f499dd029047b.jpg',
       'https://i.pinimg.com/564x/23/8c/e1/238ce1a2611002e93b9f499dd029047b.jpg'


   ]

  return (

    <div className='carousel-section' >
        <div className=' ml-[13vw] mt-[20vh]'>
        <h1 className='title-text dark-color'>accessories</h1>
        <div className='white-arrow w-[50px]'>
          <svg viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill='#434343' fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path>
          <path fill='#434343' d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path>
        </svg>
        </div>
        </div>
        {/* <Carousel images={images} /> */}
        
   
  </div>
  )
}

export default SecondSection