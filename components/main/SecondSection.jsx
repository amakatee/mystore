import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'
import Carousel from './../assets/Carousel'
import TitleArrow from './../assets/TitleArrow'

const SecondSection = () => {
   const images = [
       'https://i.pinimg.com/564x/51/95/60/519560992ac0284dcb03c15c202c16d2.jpg',
       'https://i.pinimg.com/564x/00/2e/ec/002eec7d8058600da1ddba54ad26df14.jpg',
       'https://i.pinimg.com/564x/a0/e6/d6/a0e6d688bafd0a6e4450faf08f784c65.jpg',
       'https://i.pinimg.com/736x/22/34/31/2234315ebe8d26b1928a7b4dd05993fd.jpg',
       'https://i.pinimg.com/564x/e8/26/e0/e826e0ec646e1eef37a26654d74902ea.jpg'


   ]

  return (

    <div className='carousel-section ml-[7vw]' >
        
        <div className='flex items-center gap-5  mt-[20vh]'>
        <TitleArrow text='украшения' color="#434343" />
        </div>

        <div className='carousel-cont'>
        
             <Carousel images={images} />
        </div>
        <div>
          <p className='main-section-desc dark-color'>Украшения из позолоченого серебра  </p>
        </div>
        
   
  </div>
  )
}

export default SecondSection