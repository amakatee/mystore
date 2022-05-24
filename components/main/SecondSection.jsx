import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'
import Carousel from './../assets/Carousel'
import TitleArrow from './../assets/TitleArrow'

const SecondSection = () => {
   const images = [
       'https://inej.s3.amazonaws.com/4_2ozs3yf.jpg?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=hmlQ%2FOOXhSvwA20HO9XzjViB7W8%3D&Expires=1653415649',
       'https://inej.s3.amazonaws.com/IMG_3084_jpg.JPG?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=7pXlvqtccsRPJZx%2BRzGyoWXkauA%3D&Expires=1653415945',
       'https://inej.s3.amazonaws.com/IMG_3084_jpg.JPG?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=523nbt807rNQW5wt28K5X9vOBII%3D&Expires=1653411055',
       'https://inej.s3.amazonaws.com/IMG_2911_2_083F1Bd.JPG?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=ghQhcVU5MOSyzDSRqW75g7pPoH8%3D&Expires=1653411185',
       'https://inej.s3.amazonaws.com/IMG_2911_2_083F1Bd.JPG?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=ghQhcVU5MOSyzDSRqW75g7pPoH8%3D&Expires=1653411185'


   ]

  return (

    <div className='carousel-section ml-[13vw]' >
        
        <div className='  mt-[20vh]'>
        <TitleArrow text='украшения' color="#434343" />
        </div>

        <div className='carousel-cont'>
             <Carousel images={images} />
        </div>
        <div>
          <p className='main-section-desc dark-color'>goldplated silver with beautiful stones for every day wear</p>
        </div>
        
   
  </div>
  )
}

export default SecondSection