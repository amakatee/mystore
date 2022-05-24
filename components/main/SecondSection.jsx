import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'
import Carousel from './../assets/Carousel'
import TitleArrow from './../assets/TitleArrow'

const SecondSection = () => {
   const images = [
       'https://inej.s3.amazonaws.com/2_8KDEzbU.jpg?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=goBYLQd8Yik1SJ5bqf9SWTbHgRw%3D&Expires=1653410970',
       'https://inej.s3.amazonaws.com/5.jpg?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=0krFAHJM1yEXa%2BCdx%2FOJ%2FOpn70I%3D&Expires=1653411038',
       'https://inej.s3.amazonaws.com/IMG_3084_jpg.JPG?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=523nbt807rNQW5wt28K5X9vOBII%3D&Expires=1653411055',
       'https://inej.s3.amazonaws.com/IMG_2911_2_083F1Bd.JPG?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=ghQhcVU5MOSyzDSRqW75g7pPoH8%3D&Expires=1653411185',
       'https://inej.s3.amazonaws.com/IMG_2911_2_083F1Bd.JPG?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=ghQhcVU5MOSyzDSRqW75g7pPoH8%3D&Expires=1653411185'


   ]

  return (

    <div className='carousel-section' >
        
        <div className=' ml-[13vw] mt-[20vh]'>
        <TitleArrow text='украшения' color="#434343" />
        </div>

        <div>
             <Carousel images={images} />
        </div>
        
   
  </div>
  )
}

export default SecondSection